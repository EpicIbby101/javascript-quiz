const startButton = document.getElementById("start");
const questionsContainer = document.getElementById("questions");
const choicesContainer = document.getElementById("choices");
const timerElement = document.getElementById("time");
const finalScoreElement = document.getElementById("final-score");
const initialsInput = document.getElementById("initials");
const submitButton = document.getElementById("submit");
const feedbackElement = document.getElementById("feedback");
const endScreenElement = document.getElementById("end-screen");


// Variables for game
let currentQuestionIndex = 0;
let timer;
let timeRemaining = 30;
let score = 0;

// Initialize game
function startQuiz() {
  startButton.style.display = "none";
  questionsContainer.style.display = "block";
  displayQuestion();
  startTimer();
}

startButton.addEventListener("click", startQuiz);

// Function to display the questions from array
function displayQuestion() {
  const currentQuestion = questions[currentQuestionIndex];
  document.getElementById("question-title").textContent =
    currentQuestion.question;
  choicesContainer.innerHTML = "";

  currentQuestion.choices.forEach((choice) => {
    const choiceButton = document.createElement("button");
    choiceButton.textContent = choice;
    choiceButton.addEventListener("click", () => checkAnswer(choice));
    choicesContainer.appendChild(choiceButton);
  });
}

// Logic to check if the answer is correct, then show next question
function checkAnswer(choice) {
  const currentQuestion = questions[currentQuestionIndex];

  if (choice === currentQuestion.correctAnswer) {
    feedbackElement.textContent = "Correct!";
    score++;
  } else {
    feedbackElement.textContent = "Wrong! -10 seconds";
    timeRemaining -= 10;
  }

  currentQuestionIndex++;

  if (currentQuestionIndex < questions.length) {
    displayQuestion();
  } else {
    endQuiz();
  }
}

// Logic for timer
function startTimer() {
  timer = setInterval(() => {
    timeRemaining--;
    timerElement.textContent = timeRemaining;

    if (timeRemaining <= 0) {
      endQuiz();
    }
  }, 1000);
}

// Logic for the end of the quiz and to submit your highscore
function endQuiz() {
  clearInterval(timer);
  questionsContainer.style.display = "none";
  finalScoreElement.textContent = score;
  feedbackElement.textContent = "";

  // Show the end-screen when the quiz ends
  endScreenElement.style.display = "block";
}

submitButton.addEventListener("click", saveScore);

function saveScore() {
  const initials = initialsInput.value.trim();

  if (initials !== "") {
    // Create a new object to store the user's data
    const userData = {
      initials: initials,
      score: score,
    };

    // Retrieve existing high scores from localStorage or initialize an empty array
    const highScores = JSON.parse(localStorage.getItem("highScores")) || [];

    // Add the current user's data to the high scores array
    highScores.push(userData);

    // Sort the high scores by score in descending order
    highScores.sort((a, b) => b.score - a.score);

    // Store the updated high scores back in localStorage
    localStorage.setItem("highScores", JSON.stringify(highScores));

    // Redirect the user to highscores.html after saving the score
    window.location.href = "highscores.html";
    alert("Score saved successfully!")
  }
}


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
