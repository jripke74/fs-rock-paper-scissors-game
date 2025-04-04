// Step 1
// In this workshop, you will continue to practice working with the
// DOM and event handling by building a Rock, Paper, Scissors game.

// The HTML and CSS boilerplate for the game has been provided for
// you.

// On the screen, you will see the rules to the game, the player
// and computer scores and the buttons for the user to select Rock,
// Paper, or Scissors.

// Your task over the next few steps is to build the JavaScript
// functionality that generates a computer choice, compares it to
// the player's choice, and updates the scores accordingly.

// Take some time to look through the HTML provided and familiarize
// yourself with the structure of the game.

// When you're ready, click on the "Check your code" button to
// proceed to the next step and start the workshop.

// Step 2
// In the first part of the workshop, you will focus on building the
// functionality that generates a random choice for the computer.

// Start by creating a variable called options and assign it an
// array with the following strings: "Rock", "Paper", and
// "Scissors".

const options = ["Rock", "Paper", "Scissors"];

// Step 3
// The next step is to build out the functionality that will generate
// a random choice for the computer.

// Create a function called getRandomComputerResult that returns a
// random choice from the options array.

// Hint: Don't forget that in the earlier JavaScript fundamentals
// section, you learned about using Math.random() and Math.floor().

function getRandomComputerResult() {
  const randomNumber = Math.floor(Math.random() * (2 - 0 + 1) + 0);
  return options[randomNumber];
}

// Step 4
// In this step, you will focus on determining if the player has
// won the round.

// Create a hasPlayerWonTheRound function with two parameters called
// player and computer.

// The function should return true if the player has won the round,
// and false if the player has lost or tied the round.

// Here are the criteria for the player to win a round:

// If the player chooses "Rock" and the computer chooses "Scissors"
// If the player chooses "Scissors" and the computer chooses "Paper"
// If the player chooses "Paper" and the computer chooses "Rock"

// Step 5
// The next step is to create the variables responsible for keeping
// track of the player and computer scores.

// Create a variable called playerScore and initialize it with the
// value 0.

// Then, create a variable called computerScore and initialize it
// with the value 0.

// You will need to use let to declare these variables because their
// values will change throughout the game.

let playerScore = 0;
let computerScore = 0;

// Step 6
// Now it's time to get the results of the round. Complete the
// getRoundResults function.

// If the player wins the round, update the playerScore by 1 and
// return the message "Player wins! [player's choice] beats
// [computer's choice]".

// If the computer and player choose the same option, return the
// message "It's a tie! Both chose [player's choice]".

// If the computer wins the round, update the computerScore by 1 and
// return the message "Computer wins! [computer's choice] beats [player's choice]".

// [computer's choice] should be replaced with computerResult while
// [player's choice] should be replaced with the userOption.

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

// Step 7
// The next portion of the workshop is to create the functionality
// that will show the results.

// Start by creating a variable called playerScoreSpanElement and
// assign it the value of the element with the id player-score.

// Then create a variable called computerScoreSpanElement and assign
// it the value of the element with the id computer-score.

// Finally, create a variable called roundResultsMsg and assign it
// the value of the element with the id results-msg.

const playerScoreSpanElement = document.querySelector("#player-score");
const computerScoreSpanElement = document.querySelector("#computer-score");
const roundResultsMsg = document.querySelector("#results-msg");

// Step 8
// Now it is time to update the scores and the round results
// message.

// Create a showResults function with a parameter called
// userOption.

// Inside your showResults function, the roundResultsMsg should be
// updated with the result of the round.

// Then, the playerScoreSpanElement and computerScoreSpanElement
// should also be updated to show the updated scores of the player
// and computer.

// Remember, that the order matters here. You will need to first
// update the roundResultsMsg, then the playerScoreSpanElement, and
// finally the computerScoreSpanElement because the roundResultsMsg
// will be used to determine the scores.

function showResults(userOption) {
  roundResultsMsg.innerText = getRoundResults(userOption);
  computerScoreSpanElement.innerText = computerScore;
  playerScoreSpanElement.innerText = playerScore;

  if (playerScore === 3 || computerScore === 3) {
    winnerMsgElement.innerText = `${
      playerScore === 3 ? "Player" : "Computer"
    } has won the game!`;

    resetGameBtn.style.display = "block";
    optionsContainer.style.display = "none";
  }
}

// Step 14
// For the final step of the workshop, you will need to build out
// the reset game functionality.

// Create a resetGame function that accomplishes the following:

// Resets the player and computer scores to 0.
// Updates the playerScoreSpanElement and computerScoreSpanElement
// to display the new scores.
// Hides the resetGameBtn button.
// Shows the optionsContainer so the player can play again.
// Clears the content for the winnerMsgElement and roundResultsMsg
// elements.
// Try testing out the game by playing a few rounds until one of the
// players reaches 3 points. Then, click the "Play again?" button to
// see if the game resets correctly.

// And with this final step, you have completed the Rock, Paper,
// Scissors game!

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

// Step 13
// If the player or computer has won the game, there should be an
// option to reset the game and play again.

// Add an event listener to the resetGameBtn button. Your event
// listener should take in a "click" event and a reference to the
// resetGame function.

resetGameBtn.addEventListener("click", resetGame);

// Step 9
// Now it is time to test out your showResults function.

// Start by creating a variable called rockBtn and assign it the
// value of the button with the id of rock-btn.

// Then, create a variable called paperBtn and assign it the value
// of the button with the id of paper-btn.

// Finally, create a variable called scissorsBtn and assign it the
// value of the button with the id of scissors-btn.

const rockBtn = document.querySelector("#rock-btn");
const paperBtn = document.querySelector("#paper-btn");
const scissorsBtn = document.querySelector("#scissors-btn");

// Step 10
// The next step is to attach event listeners to each of the buttons
// you created in the previous step.

// Start by creating an event listener for the rockBtn button. When
// the rockBtn button is clicked, you should call the showResults
// function with the argument "Rock".

// Then, create an event listener for the paperBtn button. When the
// paperBtn button is clicked, you should call the showResults
// function with the argument "Paper".

// Finally, create an event listener for the scissorsBtn button. When
// the scissorsBtn button is clicked, you should call the showResults
// function with the argument "Scissors".

// Now, you should be able to click on any of the buttons and see
// the results for each round.

rockBtn.addEventListener("click", function () {
  showResults("Rock");
});
paperBtn.addEventListener("click", function () {
  showResults("Paper");
});
scissorsBtn.addEventListener("click", function () {
  showResults("Scissors");
});

// Step 11
// For the last portion of the workshop, you will focus on building
// out the winner message and reset button functionality.

// Start by creating a variable called winnerMsgElement that will
// store the element with the id of winner-msg.

// Then, create a variable called optionsContainer that will store
// the element with the class of options-container.

// Finally, create a variable called resetGameBtn that will store
// the element with the id of reset-game-btn.

const winnerMsgElement = document.querySelector("#winner-msg");
const optionsContainer = document.querySelector(".options-container");
const resetGameBtn = document.querySelector("#reset-game-btn");

// Step 12
// If you try to play the game, you will see that you can play for
// an infinite amount of rounds. But the rules state that the first
// one to three points wins. You want to check if there's a winner,
// and display a message.

// In your showResults function, if the player has reached three
// points, update the winnerMsgElement to "Player has won the
// game!". If the computer has reached three points, update the
// winnerMsgElement to "Computer has won the game!".

// If there is a winner, show the resetGameBtn button by settings
// it's display to block and hide the optionsContainer by setting
// it's display to none.

// Now, try to play the game and see if the winner message is
// displayed when a player reaches three points.
