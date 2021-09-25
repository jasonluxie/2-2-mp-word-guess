let gameWins = 0;
let gameLoss = 0;
//sets startButton to "start" <button> from html
let startButton = document.querySelector("#start");
let wordHolder = document.querySelector("#word");


let wordArray = ["Banana"];

const guessWord = wordArray[randomInt(wordArray.length)].split("");
//Event listner for tracking keystrokes
document.addEventListener("keydown", letterGuess);

//Clicking the start game button will run the function "startGame()"
startButton.addEventListener("click", startGame());

//TEST BUTTON TO TRIGGER ANYTHING
let testButton = document.querySelector("#test-button");
testButton.addEventListener("click", wordGame());

function startGame() {
    let timer = document.querySelector("#timer");
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

function wordGame() {
    //Creating <div> of each letter
    for (i = 0; i <= guessWord.length - 1; i++) {
        function letterBox() {
            let letterDiv = document.createElement("div");
            letterDiv.classList.add("letter")
            return letterDiv;
        }
        wordHolder.appendChild(letterBox());
    }
}


function letterGuess(event) {
    //Goes through every index of the array guessWord[]
    for (i = 0; i < guessWord.length; i++) {
        let key = event.key;
        console.log(key.toLowerCase());
        if (guessWord[i].toLowerCase == key.toLowerCase()) {
            letterHolder.textContent = guessWord[i];
        }
        console.log(guessWord[i])
    }
}
