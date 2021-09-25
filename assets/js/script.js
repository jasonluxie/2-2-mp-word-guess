let gameWins = 0;
let gameLoss = 0;
//sets startButton to "start" <button> from html
let startButton = document.querySelector("#start");
let wordHolder = document.querySelector("#word");

let wordArray = ["Banana", "Apple", "Pineapple"];

const wordGuess = wordArray[randomInt(wordArray.length)].split("");
//Event listner for tracking keystrokes
document.addEventListener("keydown", letterGuess);

//Clicking the start game button will run the function "startGame()"
startButton.addEventListener("click", startGame());

function startGame() {
    let timer = document.querySelector("#timer");
    let time = wordArray.length * 30000;
    wordGame();
    //Timer function
    setInterval(function () {
        if (time > 0) {
            time = time - 1000;
            let minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
            let seconds = Math.floor((time % (1000 * 60)) / 1000);
            timer.textContent = minutes + ":" + seconds;
        }
        if (time <= 0) {
            var playAgain = confirm(
                "You ran out of time! Do you want to play again?"
            );
            if (playAgain == true) {
                time = wordArray.length * 30000;
            }
        }
    }, 1000);
}

function randomInt(maxLength) {
    return Math.floor(Math.random() * maxLength);
}

function wordGame() {
    //Creating <div> of each letter
    for (i = 0; i <= wordGuess.length - 1; i++) {
        function letterBox() {
            let letterDiv = document.createElement("div");
            letterDiv.classList.add("letter");
            return letterDiv;
        }
        wordHolder.appendChild(letterBox());
    }
}

let letterHolder = wordHolder.children;
function letterGuess(event) {
    let key = event.key.toLowerCase();
    //Goes through every index of the array wordGuess[]
    for (i = 0; i < wordGuess.length; i++) {
        if (wordGuess[i].toLowerCase() == key) {
            letterHolder[i].textContent = wordGuess[i];
        }
    }
}
