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

Step 5
The next step is to create the variables responsible for keeping track of the player and computer scores.

Create a variable called playerScore and initialize it with the value 0.

Then, create a variable called computerScore and initialize it with the value 0.

You will need to use let to declare these variables because their values will change throughout the game.

Step 6
Now it's time to get the results of the round. Complete the getRoundResults function.

If the player wins the round, update the playerScore by 1 and return the message "Player wins! [player's choice] beats [computer's choice]".

If the computer and player choose the same option, return the message "It's a tie! Both chose [player's choice]".

If the computer wins the round, update the computerScore by 1 and return the message "Computer wins! [computer's choice] beats [player's choice]".

[computer's choice] should be replaced with computerResult while [player's choice] should be replaced with the userOption.

Step 7
The next portion of the workshop is to create the functionality that will show the results.

Start by creating a variable called playerScoreSpanElement and assign it the value of the element with the id player-score.

Then create a variable called computerScoreSpanElement and assign it the value of the element with the id computer-score.

Finally, create a variable called roundResultsMsg and assign it the value of the element with the id results-msg.

Step 8
Now it is time to update the scores and the round results message.

Create a showResults function with a parameter called userOption.

Inside your showResults function, the roundResultsMsg should be updated with the result of the round.

Then, the playerScoreSpanElement and computerScoreSpanElement should also be updated to show the updated scores of the player and computer.

Remember, that the order matters here. You will need to first update the roundResultsMsg, then the playerScoreSpanElement, and finally the computerScoreSpanElement because the roundResultsMsg will be used to determine the scores.

Step 9 Passed
Now it is time to test out your showResults function.

Start by creating a variable called rockBtn and assign it the value of the button with the id of rock-btn.

Then, create a variable called paperBtn and assign it the value of the button with the id of paper-btn.

Finally, create a variable called scissorsBtn and assign it the value of the button with the id of scissors-btn.

Step 10
The next step is to attach event listeners to each of the buttons you created in the previous step.

Start by creating an event listener for the rockBtn button. When the rockBtn button is clicked, you should call the showResults function with the argument "Rock".

Then, create an event listener for the paperBtn button. When the paperBtn button is clicked, you should call the showResults function with the argument "Paper".

Finally, create an event listener for the scissorsBtn button. When the scissorsBtn button is clicked, you should call the showResults function with the argument "Scissors".

Now, you should be able to click on any of the buttons and see the results for each round.