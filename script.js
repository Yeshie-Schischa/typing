const correctClick = new Audio("correctClick.mp3");

let textToType = "בא נגיד שאתה יודע מה שאתה מדבר אבל בכל זאת אתה לא יודע מה שאתה מדבר";
let textElement = document.getElementById("text");
textElement.textContent = ""
let arrayOfWords = textToType.split(" ");
let arrayOfCharacters = textToType.split("");
console.log(arrayOfCharacters);
arrayOfCharacters.forEach((char) => {
  textElement.innerHTML += `<span>${char}</span>`;
});

let correctCount = 0;
let incorrectCount = 0;
let currentIndex = 0;
let currentSpan = textElement.querySelectorAll("span")[currentIndex];
currentSpan.classList.add("next");
document.addEventListener("keydown", (e) => {
  if (e.key === arrayOfCharacters[currentIndex]) {
    correctClick.play();
    currentSpan = textElement.querySelectorAll("span")[currentIndex];
    currentSpan.classList.remove("incorrect");
    currentSpan.classList.remove("next");
    currentSpan.classList.add("correct");
    correctCount++;
    document.getElementById("correct-count").textContent = correctCount;
    const nextSpan = textElement.querySelectorAll("span")[currentIndex+1];
    nextSpan.classList.add("next");
    currentIndex++;
  } else {
   
    const currentSpan = textElement.querySelectorAll("span")[currentIndex];
    
    currentSpan.classList.add("incorrect");
    incorrectCount++;
    document.getElementById("incorrect-count").textContent = incorrectCount;
  }
  
}); 

const resetButton = document.getElementById("reset-button");
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
});
