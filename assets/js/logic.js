let startButton = document.querySelector("#start")
let timerElement = document.querySelector("#time")
let questionTitle = document.querySelector(".question-title")
let questionChoices = document.querySelector(".choices")
let questionContent = document.querySelector(".questions");


let score;
let timerCount;
let currentQuestionIndex = 0;
let questions = [
    {
        question: "Sample Question 1",
        options: ["Option A", "Option B", "Option C"],
        correctAnswer: "Option A"
    },
    {
        question: "Sample Question 2",
        options: ["Option X", "Option Y", "Option Z"],
        correctAnswer: "Option Z"
    },
];


function startGame() {
    timerCount = 5;
    score = 0;
    startTimer();
    displayQuestion();

}

function startTimer() {
    let timer = setInterval(function () {
        timerCount--;
        timerElement.textContent = timerCount;
        if (timerCount === 0) {
            clearInterval(timer);
            timerElement.textContent = "Time up";
        }
    }, 1000);
}

function displayQuestion() {
    if (currentQuestionIndex < questions.length) {
        const currentQuestion = questions[currentQuestionIndex];

        questionTitle.textContent = `Question ${currentQuestionIndex + 1}`;
        questionContent.textContent = currentQuestion.question;

        questionChoices.innerHTML = "";
        currentQuestion.options.forEach((option) => {
            const listItem = document.createElement("li");
            listItem.textContent = option;
            listItem.addEventListener("click", () => checkAnswer(option));
            questionChoices.appendChild(listItem); // Updated to questionChoices
        });
    } else {
        questionContent.textContent = "Quiz complete";
        questionChoices.innerHTML = ""; // Updated to questionChoices
    }
}


function checkAnswer(selectedOption) {
    const currentQuestion = questions[currentQuestionIndex];
    if (selectedOption === currentQuestion.correctAnswer) {
        score += 10;
    } else {
        timerCount -= 2;
        if (timerCount < 0) {
            timerCount = 0;
        }
        }

    currentQuestionIndex++;
    displayQuestion();
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