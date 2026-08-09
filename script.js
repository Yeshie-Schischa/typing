const correctClick = new Audio("correctClick.mp3");
const startButton = document.getElementById("start-button");
const textElement = document.getElementById("text");
const progressMover = document.getElementById("progress-mover");
function createRandomString(letters) {
  let randomString = "";
  for (let i = 0; i < 20; i++) {
    randomString += letters[Math.floor(Math.random() * letters.length)];
  }
  return randomString;
} 

let textToType = "";
let correctCount = 0;
let incorrectCount = 0;
let currentIndex = 0;
let width = 0;
progressMover.style.width = width + "%";
document.addEventListener("keydown", (e) => {
  if (e.key === Array.from(textToType)[currentIndex]) {
    correctClick.play();
    currentSpan = textElement.querySelectorAll("span")[currentIndex];
    currentSpan.classList.remove("incorrect");
    currentSpan.classList.remove("next");
    currentSpan.classList.add("correct");
    correctCount++;
    document.getElementById("correct-count").textContent = correctCount;
    const nextSpan = textElement.querySelectorAll("span")[currentIndex+1];
    try {
      nextSpan.classList.add("next");
    } catch (error) {}
    width += 100 / textToType.length;
    progressMover.style.width = width + "%";
    currentIndex++;
  } else {
   
    const currentSpan = textElement.querySelectorAll("span")[currentIndex];
    currentSpan.animate([
      { transform: "translateX(0px)" },
      { transform: "translateX(-10px)" },
    ], {
      duration: 100,
      iterations: 1
    });
    currentSpan.classList.add("incorrect");
    incorrectCount++;
    document.getElementById("incorrect-count").textContent = incorrectCount;
  }
  
}); 

class TypingLesson {
  constructor(text) {
    this.text = text;
  }
}
const lessons= [new TypingLesson("חכ")];

startButton.addEventListener("click", () => {
  textToType = createRandomString(lessons[0].text);
  Array.from(textToType).forEach((char) => {
    textElement.innerHTML += `<span>${char}</span>`;
  });
  let currentSpan = textElement.querySelectorAll("span")[currentIndex];
  currentSpan.classList.add("next");
})






/* const resetButton = document.getElementById("reset-button");
resetButton.addEventListener("click", () => {
  textToType = "";
  correctCount = 0;
  incorrectCount = 0;
  document.getElementById("correct-count").textContent = correctCount;
  document.getElementById("incorrect-count").textContent = incorrectCount;
  // add a new random word to the textToType variable and display it in the textElement
  // a for loop to collect 9 more random words and add them to the textToType variable
  for (let i = 0; i < 9; i++) {
    fetch("https://random-word-api.herokuapp.com/word")
      .then((response) => response.json())
        .then((data) => {
            const randomWord = data[0];
            textToType += randomWord + " ";
            arrayOfCharacters = textToType.trim().split("");
            textElement.innerHTML = "";
            arrayOfCharacters.forEach((char) => {
              textElement.innerHTML += `<span>${char}</span>`;
            });
           
        });
       
  } 
    // reset the currentIndex to 0
    currentIndex = 0;

    resetButton.blur();
}); */