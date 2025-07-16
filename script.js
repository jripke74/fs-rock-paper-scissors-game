const options = ["Rock", "Paper", "Scissors"];

function getRandomComputerResult() {
  const randomNumber = Math.floor(Math.random() * (2 - 0 + 1) + 0);
  return options[randomNumber];
}

let playerScore = 0;
let computerScore = 0;

function hasPlayerWonTheRound(player, computer) {
  if (player === "Rock" && computer === "Scissors") {
    return true;
  } else if (player === "Scissors" && computer === "Paper") {
    return true;
  } else if (player === "Paper" && computer === "Rock") {
    return true;
  } else {
    return false;
  }
}

function getRoundResults(userOption) {
  const computerResult = getRandomComputerResult();
  if (hasPlayerWonTheRound(userOption, computerResult)) {
    playerScore += 1;
    return `Player wins! ${userOption} beats ${computerResult}`;
  } else {
    computerScore += 1;
    return `Computer wins! ${computerResult} beats ${userOption}`;
  }
}

const playerScoreSpanElement = document.querySelector("#player-score");
const computerScoreSpanElement = document.querySelector("#computer-score");
const roundResultsMsg = document.querySelector("#results-msg");

function showResults(userOption) {
  roundResultsMsg.innerText = getRoundResults(userOption);
  playerScoreSpanElement.innerText = playerScore;
  computerScoreSpanElement.innerText = computerScore;

  if (playerScore === 3 || computerScore === 3) {
    winnerMsgElement.innerText = `${
      playerScore === 3 ? "Player" : "Computer"
    } has won the game!`;

    resetGameBtn.style.display = "block";
    optionsContainer.style.display = "none";
  }
}

function resetGame() {
  playerScore = 0;
  computerScore = 0;
  playerScoreSpanElement.textContent = 0;
  computerScoreSpanElement.textContent = 0;
  resetGameBtn.style.display = "none";
  optionsContainer.style.display = "block";
  roundResultsMsg.innerText = "";
  winnerMsgElement.innerText = "";
}

resetGameBtn.addEventListener("click", resetGame);

const rockBtn = document.querySelector("#rock-btn");
const paperBtn = document.querySelector("#paper-btn");
const scissorsBtn = document.querySelector("#scissors-btn");

rockBtn.addEventListener("click", function () {
  showResults("Rock");
});
paperBtn.addEventListener("click", function () {
  showResults("Paper");
});

scissorsBtn.addEventListener("click", function () {
  showResults("Scissors");
});

const winnerMsgElement = document.querySelector("#winner-msg");
const optionsContainer = document.querySelector(".options-container");
const resetGameBtn = document.querySelector("#reset-game-btn");
