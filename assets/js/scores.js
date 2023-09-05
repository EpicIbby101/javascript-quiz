document.addEventListener("DOMContentLoaded", function () {
  const highscoresList = document.getElementById("highscores");

  // Retrieve high scores from localStorage
  const highScores = JSON.parse(localStorage.getItem("highScores")) || [];

  // Sort high scores in descending order by score
  highScores.sort((a, b) => b.score - a.score);

  // Iterate through the high scores and create list items to display them
  highScores.forEach((userData, index) => {
    const listItem = document.createElement("li");
    listItem.textContent = ` ${userData.initials}: ${userData.score} points`;
    highscoresList.appendChild(listItem);
  });

  // Add event listener to the "Clear Highscores" button
  const clearButton = document.getElementById("clear");
  clearButton.addEventListener("click", clearHighscores);
});

function clearHighscores() {
  // Clear high scores from localStorage
  localStorage.removeItem("highScores");

  // Clear the displayed high scores on the page
  const highscoresList = document.getElementById("highscores");
  highscoresList.innerHTML = "Highscores cleared!";
}
