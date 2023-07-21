const gameScreen = document.querySelector(".game-screen");
const resultScreen = document.querySelector(".result-screen");

let computerScore = 0;
let playerScore = 0;

//Create and return random computer choice
function getComputerChoice() {
  const choices = ["ROCK", "PAPER", "SCISSORS"];
  const randomNumber = Math.floor(Math.random() * choices.length);
  return choices[randomNumber];
}

//Reset score after game ends
function resetGameScore() {
  computerScore = 0;
  playerScore = 0;
}

//Show winner when someone reaches 5 points
function showWinner() {
  let winnerString = "";
  if (playerScore >= 5 && computerScore >= 5 && playerScore == computerScore) {
    winnerString = "BOTH!";
  } else if (playerScore >= 5 && playerScore > computerScore) {
    winnerString = "Player";
  } else if (computerScore >= 5 && computerScore > playerScore) {
    winnerString = "Computer";
  }
  const winner = document.createElement("div");
  winner.textContent = `Winner: ${winnerString}!!!`;
  const anyButton = document.createElement("div");
  anyButton.textContent = `Press any button to continue`;
  resultScreen.appendChild(winner);
  resultScreen.appendChild(anyButton);
  document.addEventListener("keydown", endGame, { once: true });
  document.addEventListener("mousedown", endGame, { once: true });
}

const endScreen = document.querySelector(".end-screen");
const playAgain = document.querySelector(".play-again-button");
playAgain.addEventListener("click", startGame);

function endGame() {
  gameScreen.style.display = "none";
  endScreen.style.display = "flex";
  showWinner();
}

//Show game score on screen
function showGameScore(playerScore, computerScore) {
  const gameScore = document.createElement("div");
  gameScore.textContent = `Player: ${playerScore}, Computer: ${computerScore}`;
  resultScreen.appendChild(gameScore);
  if (playerScore >= 5 || computerScore >= 5) showWinner();
}

//Update game score after round
function updateGameScore(verdict) {
  const formattedVerdict = verdict.toUpperCase();
  if (formattedVerdict.includes("TIE")) {
    playerScore++;
    computerScore++;
  } else if (formattedVerdict.includes("VICTORY")) {
    playerScore++;
  } else if (formattedVerdict.includes("DEFEAT")) {
    computerScore++;
  }
  showGameScore(playerScore, computerScore);
}

//Show round result on screen
function showRoundResult(verdict) {
  const roundResult = document.createElement("div");
  roundResult.textContent = verdict;
  resultScreen.textContent = "";
  resultScreen.appendChild(roundResult);
  updateGameScore(verdict);
}

//Play a single round of rps
function playRound(playerSelection, computerSelection) {
  const constPlayerSelection = playerSelection.toUpperCase();
  const constComputerSelection = computerSelection.toUpperCase();
  if (constPlayerSelection === constComputerSelection) {
    showRoundResult(`TIE YOU BOTH CHOSE ${constPlayerSelection}`);
    return "TIE";
  } else if (
    (constPlayerSelection === "ROCK" &&
      constComputerSelection === "SCISSORS") ||
    (constPlayerSelection === "PAPER" && constComputerSelection === "ROCK") ||
    (constPlayerSelection === "SCISSORS" && constComputerSelection === "PAPER")
  ) {
    showRoundResult(
      `VICTORY! ${constPlayerSelection} BEATS ${constComputerSelection}`
    );
  } else {
    showRoundResult(
      `DEFEAT.. ${constComputerSelection} BEATS ${constPlayerSelection}`
    );
  }
}

const startScreen = document.querySelector(".start-screen");
const startButton = document.querySelector(".start-button");

function startGame() {
  gameScreen.style.display = "flex";
  startScreen.style.display = "none";
  endScreen.style.display = "none";
}

startButton.addEventListener("click", startGame);

//Everytime a button is clicked, call playRound() with corresponding button class
const selectionButtons = document.querySelectorAll("button.selection");

selectionButtons.forEach((button) =>
  button.addEventListener("click", () =>
    playRound(button.id, getComputerChoice())
  )
);
