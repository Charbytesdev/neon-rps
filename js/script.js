const body = document.querySelector("body");

let computerScore = 0;
let playerScore = 0;

//Create and return random computer choice
function getComputerChoice() {
  const choices = ["ROCK", "PAPER", "SCISSORS"];
  const randomNumber = Math.floor(Math.random() * choices.length);
  return choices[randomNumber];
}

function showWinner() {
  const winnerDiv = document.createElement("div");
  let winnerString = "";
  if (playerScore >= 5 && computerScore >= 5 && playerScore == computerScore) {
    winnerString = "BOTH!";
  } else if (playerScore >= 5 && playerScore > computerScore) {
    winnerString = "Player";
  } else if (computerScore >= 5 && computerScore > playerScore) {
    winnerString = "Computer";
  }
  winnerDiv.textContent = `Winner: ${winnerString}`;
  body.appendChild(winnerDiv);
}

//Show game score on screen
function showGameScore(playerScore, computerScore) {
  const score = document.createElement("div");
  score.textContent = `Player: ${playerScore}, Computer: ${computerScore}`;
  body.appendChild(score);
  if (playerScore >= 5 || computerScore >= 5) showWinner();
}

function updateScore(verdict) {
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
  const resultsContent = document.createElement("div");
  resultsContent.textContent = verdict;
  body.appendChild(resultsContent);
  updateScore(verdict);
}

// Play a single round of rps figure out the winner
// Call showGameResult() with the verdict
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

// Everytime a button is clicked, call playRound() with corresponding button class
const buttons = document.querySelectorAll("button");
buttons.forEach((button) =>
  button.addEventListener("click", () =>
    playRound(button.classList[0], getComputerChoice())
  )
);

// function game() {
//   let playerCount = 0;
//   let computerCount = 0;
//   for (let i = 0; i < 5; i++) {
//     let playerSelection = prompt("ENTER CHOICE: ROCK, PAPER, SCISSORS?");
//     const formattedPlayerSelec = playerSelection.trim().toUpperCase();
//     const roundResult = playRound(formattedPlayerSelec, getComputerChoice());
//     if (roundResult === "VICTORY") playerCount++;
//     else if (roundResult === "DEFEAT") computerCount++;
//     else {
//       playerCount++;
//       computerCount++;
//     }
//     alert(`RESULTS: PLAYER: ${playerCount}, COMPUTER ${computerCount}`);
//   }
// }

// game();
