function getComputerChoice() {
  const choices = ["ROCK", "PAPER", "SCISSORS"];
  const randomNumber = Math.floor(Math.random() * choices.length);
  return choices[randomNumber];
}

function showResult(verdict) {
  const resultsContent = document.createElement("div");
  const body = document.querySelector("body");
  resultsContent.textContent = verdict;
  body.appendChild(resultsContent);
}

function displayScore()

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
    return "VICTORY";
  } else {
    showResult(
      `DEFEAT.. ${constComputerSelection} BEATS ${constPlayerSelection}`
    );
    return "DEFEAT";
  }
}

const buttons = document.querySelectorAll("button");
console.log(buttons);
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
