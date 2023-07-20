const body = document.querySelector("body");

//Create a random computer choice
function getComputerChoice() {
  const choices = ["ROCK", "PAPER", "SCISSORS"];
  const randomNumber = Math.floor(Math.random() * choices.length);
  return choices[randomNumber];
}

//Show game score on screen
function showScore(playerScore, computerScore) {
  const score = document.createElement("div");
  score.textContent = `Player: ${playerScore}, Computer: ${computerScore}`;
  body.appendChild(score);
}

//Show round result on screen
function showResult(verdict) {
  const resultsContent = document.createElement("div");
  resultsContent.textContent = verdict;
  body.appendChild(resultsContent);
  showScore(5, 3);
}

// Play a single round of rps figure out the winner
// Call showResult() and updateScore() with the verdict
function playRound(playerSelection, computerSelection) {
  const constPlayerSelection = playerSelection.toUpperCase();
  const constComputerSelection = computerSelection.toUpperCase();
  if (constPlayerSelection === constComputerSelection) {
    showResult(`TIE YOU BOTH CHOSE ${constPlayerSelection}`);
    return "TIE";
  } else if (
    (constPlayerSelection === "ROCK" &&
      constComputerSelection === "SCISSORS") ||
    (constPlayerSelection === "PAPER" && constComputerSelection === "ROCK") ||
    (constPlayerSelection === "SCISSORS" && constComputerSelection === "PAPER")
  ) {
    showResult(
      `VICTORY! ${constPlayerSelection} BEATS ${constComputerSelection}`
    );
  } else {
    showResult(
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
