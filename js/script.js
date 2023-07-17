function getComputerChoice() {
  const choices = ["ROCK", "PAPER", "SCISSORS"];
  const randomNumber = Math.floor(Math.random() * choices.length);
  return choices[randomNumber];
}

function playRound(playerSelection, computerSelection) {
  const constPlayerSelection = playerSelection;
  const constComputerSelection = computerSelection.toUpperCase();
  if (constPlayerSelection == constComputerSelection) {
    return `TIE YOU BOTH CHOSE ${constPlayerSelection}`;
  } else if (
    (constPlayerSelection == "ROCK" && constComputerSelection == "SCISSORS") ||
    (constPlayerSelection == "PAPER" && constComputerSelection == "ROCK") ||
    (constPlayerSelection == "SCISSORS" && constComputerSelection == "PAPER")
  ) {
    return `VICTORY! ${constPlayerSelection} BEATS ${constComputerSelection}`;
  } else {
    return `DEFEAT.. ${constComputerSelection} BEATS ${constPlayerSelection}`;
  }
}
const playerSelection = "    roCk   ".trim().toUpperCase();
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));
