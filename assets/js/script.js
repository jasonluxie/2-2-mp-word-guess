let gameWins = 0;
let gameLoss = 0;
//sets startButton to "start" <button> from html
let startButton = document.querySelector("#start");

let timer = document.querySelector("#timer");
let wordHolder = document.querySelector("#word");

let wordArray = ["Banana", "Apple", "Pineapple"];

//TEST BUTTON TO TRIGGER ANYTHING
let testButton = document.querySelector("#test-button");
testButton.addEventListener("click", wordSplit());

//Clicking the start game button will run the function "startGame()"
// startButton.addEventListener("click", startGame());

function startGame() {
    let time = wordArray.length * 30000;
    //Timer function
    setInterval(function () {
        if (time > 0) {
            time = time - 1000;
            // console.log(time);
            let minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
            let seconds = Math.floor((time % (1000 * 60)) / 1000);
            timer.textContent = minutes + ":" + seconds;
        }
        if (time <= 0) {
            return;
        }
    }, 1000);
}

function randomInt(maxLength) {
    return Math.floor(Math.random() * maxLength);
}

function wordSplit() {
    const guessWord = wordArray[randomInt(wordArray.length)].split("");
    console.log(guessWord);
    //Creating <div> of each letter
    for (i = 0; i <= guessWord.length - 1; i++) {
        function insertLetter() {
            let letterDiv = document.createElement("div")
            letterDiv.textContent = guessWord[i]
            return letterDiv
        }
        wordHolder.appendChild(insertLetter());
    }
}