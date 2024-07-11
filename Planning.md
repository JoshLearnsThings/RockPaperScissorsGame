## Functions & Variables Needed ##

- getComputerChoice()
> Will randomly return a string value between "Rock", "Paper", and "Scissors".

==HOW==
$ This can be achieved by creating an array that contains these 3 strings as 3 separate elements within the array. 

Then, use Math.random() method to randomly choose an integer value between 0 and 2 (Inclusive). Remember, JS uses zero-based indexing, i.e. first element in an array is referenced with 0, not 1. 

Important to note, Math.random does not return whole numbers, rather decimal point values, so use Math.random() in addition to Math.float() to return a whole number. $
==HOW==

- getHumanChoice()
> Will return one of the valid choices that the user inputs.

==HOW==
$ Use window.prompt() to get user's choice. String should display available options. The user inputted value should be stored inside a variable so it can be referenced. $
==HOW==

- humanScore & computerScore (Variable - GLOBAL scope)
> Acts as a counter to store the Human and Computer's scores respectively within the two variables. 

==HOW==
$ Variables must have a type of Integer (0, 1, 2 etc...) so it can be compared and manipulated. Initialise both variables with a value of 0, then increment +1 as appropriate. $
==HOW==

- playRound(humanChoice, computerChoice)
> Use the two parameters (humanChoice & computerChoice) that both should return a string value "Rock", "Paper", and "Scissors", that will be used to determine who wins that specific round. The winner's respective score counter should be incremented by 1. This function should ONLY play a single round, due to the nature in which it is being used in the over-arching function. The function serves 2 purposes, increasing the correct player's score count, and logging the winner with a simple console.log("User/Computer won! _ beats _.")

> humanChoice()'s returned value should be case-insensitive, meaning even if the user inputs a string value like "rOcK", it will be treated as "Rock".

==HOW==
$ Logic should involve if/else conditional statements that run through (Through comparison) all possible ways both Human and Computer can win. Increment the appropriate scores as appropriate within each statement. $
==HOW==

- playGame(playRound)
> The game will have 5 rounds. This function will call playRound to run through 5 rounds, keeping track of both player's scores and announcing the winner at the end.

==HOW==
The playRound() function and score variables (humanScore & computerScore) should be declared inside the playGame() function.

We can create a playCount variable counter initialized with 0 that can be used as part of a conditional loop to call the playRound() function indefinitely until the condition (playCount > 5) is met. Increment playCount variable by +1 after each round.
==HOW==

==ALGORITHM== 
Develop an algorithm that
