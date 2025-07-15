# fs-rock-paper-scissors-game

In this workshop, you will review DOM manipulation and events by building a Rock, Paper, Scissors Game.

Step 1
In this workshop, you will continue to practice working with the DOM and event handling by building a Rock, Paper, Scissors game.

The HTML and CSS boilerplate for the game has been provided for you.

On the screen, you will see the rules to the game, the player and computer scores and the buttons for the user to select Rock, Paper, or Scissors.

Your task over the next few steps is to build the JavaScript functionality that generates a computer choice, compares it to the player's choice, and updates the scores accordingly.

Take some time to look through the HTML provided and familiarize yourself with the structure of the game.

When you're ready, click on the "Check your code" button to proceed to the next step and start the workshop.

Step 2
In the first part of the workshop, you will focus on building the functionality that generates a random choice for the computer.

Start by creating a variable called options and assign it an array with the following strings: "Rock", "Paper", and "Scissor

Step 3
The next step is to build out the functionality that will generate a random choice for the computer.

Create a function called getRandomComputerResult that returns a random choice from the options array.

Hint: Don't forget that in the earlier JavaScript fundamentals section, you learned about using Math.random() and Math.floor().

Step 4
In this step, you will focus on determining if the player has won the round.

Create a hasPlayerWonTheRound function with two parameters called player and computer.

The function should return true if the player has won the round, and false if the player has lost or tied the round.

Here are the criteria for the player to win a round:

If the player chooses "Rock" and the computer chooses "Scissors"
If the player chooses "Scissors" and the computer chooses "Paper"
If the player chooses "Paper" and the computer chooses "Rock"