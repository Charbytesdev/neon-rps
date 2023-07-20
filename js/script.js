const body = document.querySelector("body");

function getComputerChoice() {
  const choices = ["ROCK", "PAPER", "SCISSORS"];
  const randomNumber = Math.floor(Math.random() * choices.length);
  return choices[randomNumber];
}

function showScore(playerScore, computerScore) {
  const score = document.createElement("div");
  score.textContent = `Player: ${playerScore}, Computer: ${computerScore}`;
  body.appendChild(score);
}

function showResult(verdict) {
  const resultsContent = document.createElement("div");
  resultsContent.textContent = verdict;
  body.appendChild(resultsContent);
  showScore(5, 3);
}

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
