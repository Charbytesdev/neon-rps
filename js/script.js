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
  resultScreen.textContent = "";
  document.removeEventListener("keydown", endGame);
  document.removeEventListener("mousedown", endGame);
}

const endScreen = document.querySelector(".end-screen");
const playAgain = document.querySelector(".play-again-button");
playAgain.addEventListener("click", startGame);

function endGame() {
  playSoundEffect(buttonClickAudio);
  gameScreen.style.display = "none";
  endScreen.style.display = "flex";
  resetGameScore();
}

//Show winner when someone reaches 5 points
function showWinner() {
  const winner = document.createElement("div");
  let color = "";
  winner.id = "winner";

  if (playerScore >= 5 && computerScore >= 5 && playerScore == computerScore) {
    winner.textContent = "IT'S A TIE!";
    color = `#CCFF00`;
  } else if (playerScore >= 5 && playerScore > computerScore) {
    winner.textContent = "YOU WIN!";
    color = `#1B03A3`;
  } else if (computerScore >= 5 && computerScore > playerScore) {
    winner.textContent = "YOU LOSE.";
    color = `#FF3131`;
  }
  winner.style.color = color;
  winner.style.boxShadow = `inset 0 0 0.4em ${color},
  0 0 0.4em ${color}`;

  const anyButton = document.createElement("div");
  anyButton.textContent = `Press any key to continue`;
  resultScreen.appendChild(winner);
  resultScreen.appendChild(anyButton);
  document.addEventListener("keydown", endGame, { once: true });
  document.addEventListener("mousedown", endGame, { once: true });
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
    showRoundResult(`TIE! YOU BOTH CHOSE ${constPlayerSelection}`);
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
  playBackgroundMusic();
}

startButton.addEventListener("click", startGame);

//Everytime a button is clicked, call playRound() with corresponding button class
const selectionButtons = document.querySelectorAll("button.selection");

selectionButtons.forEach((button) =>
  button.addEventListener("click", () =>
    playRound(button.id, getComputerChoice())
  )
);

//Audio
const backgroundMusic = document.querySelector("#background-music");
const buttonClickAudio = document.querySelector("#button-click-audio");

function playBackgroundMusic() {
  backgroundMusic.volume = 0.3;
  if (!isMuted) backgroundMusic.play();
}

function pauseBackgroundMusic() {
  backgroundMusic.pause();
}

function playSoundEffect(audio) {
  audio.currentTime = 0;
  audio.play();
}

const allButtons = document.querySelectorAll("button");
allButtons.forEach((button) =>
  button.addEventListener("click", () => playSoundEffect(buttonClickAudio))
);

const soundImage = document.querySelector("#unmute");

function changeSoundImage(soundImage) {
  if (soundImage.src.includes("/unmute.png")) {
    soundImage.src = soundImage.src.replace("/unmute.png", "/mute.png");
  } else {
    soundImage.src = soundImage.src.replace("/mute", "/unmute");
  }
}

let isMuted = false;
function changeAudioState() {
  if (!isMuted) {
    isMuted = true;
    pauseBackgroundMusic();
    buttonClickAudio.muted = true;
  } else {
    isMuted = false;
    playBackgroundMusic();
    buttonClickAudio.muted = false;
  }
}

soundImage.addEventListener("click", () => {
  changeSoundImage(soundImage);
  changeAudioState();
});
