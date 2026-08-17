const correctClick = new Audio("correctClick.mp3");
const startButton = document.getElementById("start-button");
const textElement = document.getElementById("text");
const progressMover = document.getElementById("progress-mover");
const keyboardChange = document.getElementById("keyboard-change");
const hebrewRegex = /[\u0590-\u05FF]/
const englishRegex = /^[a-zA-Z]$/;
const symbolRegex = /,.\;\//
const dialogOk = document.getElementById("dialog-ok");
const listLessons = document.getElementById("list-lessons");


class TypingLesson {
  constructor(text) {
    this.text = text;
    this.userInfo = {
      correctCount: 0,
      incorrectCount: 0,
      time: 0
    }
  }
}
const lessons= [new TypingLesson("חכ"), new TypingLesson("לג"), new TypingLesson("ךד") ];
lessons.forEach(lesson => {
   listLessons.innerHTML += `<li class="lesson">${lesson.text}</li>`
})
listLessons.addEventListener("click", (e) => {
  if(e.target.closest(".lesson")){
    console.log(e.target.closest(".lesson").innerText)
  }
});


function startLesson()
// const timer = document.getElementById("timer");
// let time = 0
// const startTimer = () => {
//   time++
//   timer.innerText = `${(time/60).toFixed()}:${String((time % 60).toFixed()).padStart(2, "0")}`
// }


// function createRandomString(letters) {
//   let randomString = "";
//   for (let i = 0; i < 20; i++) {
//     randomString += letters[Math.floor(Math.random() * letters.length)];
//   }
//   return randomString;
// } 

// let textToType = "";
// let correctCount = 0;
// let incorrectCount = 0;
// let currentIndex = 0;
// let width = 0;
// let timming
// let isFirstKey = true
// document.addEventListener("keydown", (e) => {

// if (englishRegex.test(e.key)){
//     console.log(e.key)
//     keyboardChange.showModal();
//     e.preventDefault()
//     return
//   }


//   currentSpan = textElement.querySelectorAll("span")[currentIndex];

//   if(!hebrewRegex.test(e.key)){
//     currentSpan.animate([
//       { transform: "translateX(0px)" },
//       { transform: "translateX(-10px)" },
//     ], {
//       duration: 100,
//       iterations: 1
//     });
//     return
//   }

//     if (isFirstKey) {
//     timming = setInterval(startTimer, 1000)
//     isFirstKey = false
//     console.log(isFirstKey)
//   }
  
//   if (e.key === Array.from(textToType)[currentIndex]) {
//     correctClick.play();
    
//     currentSpan.classList.remove("incorrect");
//     currentSpan.classList.remove("next");
//     currentSpan.classList.add("correct");
//       if(currentSpan.nextElementSibling){
//       currentSpan.nextElementSibling.classList.add("next")
//       } else {
//         clearInterval(timming)
//       }
 
//     correctCount++;
//     document.getElementById("correct-count").textContent = correctCount;
   
//     width += 100 / textToType.length;
//     progressMover.style.width = width + "%";
//     currentIndex++;
//   } else {
   
//     const currentSpan = textElement.querySelectorAll("span")[currentIndex];
//     currentSpan.animate([
//       { transform: "translateX(0px)" },
//       { transform: "translateX(-10px)" },
//     ], {
//       duration: 100,
//       iterations: 1
//     });
//     currentSpan.classList.add("incorrect");
//     incorrectCount++;
//     document.getElementById("incorrect-count").textContent = incorrectCount;
//   }
  
// }); 
// dialogOk.addEventListener("click", () => {
//   keyboardChange.close()})




// startButton.addEventListener("click", () => {
//   textToType = createRandomString(lessons[0].text);
//   Array.from(textToType).forEach((char) => {
//     textElement.innerHTML += `<span>${char}</span>`;
//   });
//   let currentSpan = textElement.querySelectorAll("span")[currentIndex];
//   currentSpan.classList.add("next");
//   startButton.blur();
//   startButton.innerText = "Next Lesson";

// })






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