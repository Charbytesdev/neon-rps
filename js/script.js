function getComputerChoice() {
  const choices = ["ROCK", "PAPER", "SCISSORS"];
  const randomNumber = Math.floor(Math.random() * choices.length);
  return choices[randomNumber];
}

function playRound(playerSelection, computerSelection) {
  const constPlayerSelection = playerSelection;
  const constComputerSelection = computerSelection.toUpperCase();
  if (constPlayerSelection === constComputerSelection) {
    alert(`TIE YOU BOTH CHOSE ${constPlayerSelection}`);
    return "TIE";
  } else if (
    (constPlayerSelection === "ROCK" &&
      constComputerSelection === "SCISSORS") ||
    (constPlayerSelection === "PAPER" && constComputerSelection === "ROCK") ||
    (constPlayerSelection === "SCISSORS" && constComputerSelection === "PAPER")
  ) {
    alert(`VICTORY! ${constPlayerSelection} BEATS ${constComputerSelection}`);
    return "VICTORY";
  } else {
    alert(`DEFEAT.. ${constComputerSelection} BEATS ${constPlayerSelection}`);
    return "DEFEAT";
  }
}

function game() {
  let playerCount = 0;
  let computerCount = 0;
  for (let i = 0; i < 5; i++) {
    let playerSelection = prompt("ENTER CHOICE: ROCK, PAPER, SCISSORS?");
    const formattedPlayerSelec = playerSelection.trim().toUpperCase();
    const roundResult = playRound(formattedPlayerSelec, getComputerChoice());
    if (roundResult === "VICTORY") playerCount++;
    else if (roundResult === "DEFEAT") computerCount++;
    else {
      playerCount++;
      computerCount++;
    }
    alert(`RESULTS: PLAYER: ${playerCount}, COMPUTER ${computerCount}`);
  }
}

game();
