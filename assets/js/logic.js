let startButton = document.querySelector("#start")
let timerElement = document.querySelector("#time")

let score;
let timerCount;

function startGame() {
    timerCount = 5;
    score = 0;
    startTimer();

}

function startTimer() {
    timer = setInterval(function() {
        timerCount--;
        timerElement.textContent = timerCount;
        if (timerCount === 0) {
            clearInterval(timer)
            timerElement.textContent = "Time up"
        }
    }, 1000)
}

function renderGame() {
    
}

// Event listener to start game when button is pressed
startButton.addEventListener("click", startGame);

// PSEUDOCODE - GENERAL GAME LOGIC
// When start button is pressed, timer starts and first question appears
// So the questions are called from the questions list, each question has a button players click to submit their answers
// When answer is clicked, next question appears
// Incorrect answers deduct from time (5 secs)
// Quiz ends when all questions are answered or timer = 0
// At game end, score should be displayed and users are prompted to submit their initials

// PSEUDOCODE - SCORE SYSTEM
// A score counter should be implemented to keep track of current score
// Each correct answer will add 10pts to the score counter
// Each question answered incorrectly should not add to the score counter
// Upon submission of player's initials, their score should be saved to the localStorage