// Questions array
const questions = [
    {
      question: "What does HTML stand for?",
      choices: ["Hyper Text Markup Language", "Home Tool Markup Language", "Hyperlinks and Text Markup Language"],
      correctAnswer: "Hyper Text Markup Language"
    },
    {
      question: "Which language is used for styling web pages?",
      choices: ["HTML", "CSS", "JavaScript"],
      correctAnswer: "CSS"
    },
    {
      question: "Which programming language is often used for web development?",
      choices: ["Python", "Java", "JavaScript"],
      correctAnswer: "JavaScript"
    }
  ];

const startButton = document.getElementById("start");
const questionsContainer = document.getElementById("questions");
const choicesContainer = document.getElementById("choices");
const timerElement = document.getElementById("time");
const finalScoreElement = document.getElementById("final-score");
const initialsInput = document.getElementById("initials");
const submitButton = document.getElementById("submit");
const feedbackElement = document.getElementById("feedback");

let currentQuestionIndex = 0;
let timer;
let timeRemaining = 60;
let score = 0;


function startQuiz() {
    startButton.style.display = "none";
    questionsContainer.style.display = "block";
    displayQuestion();
    startTimer();
  }

  function displayQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    document.getElementById("question-title").textContent = currentQuestion.question;
    choicesContainer.innerHTML = "";
  
    currentQuestion.choices.forEach((choice) => {
      const choiceButton = document.createElement("button");
      choiceButton.textContent = choice;
      choiceButton.addEventListener("click", () => checkAnswer(choice));
      choicesContainer.appendChild(choiceButton);
    });
  }

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