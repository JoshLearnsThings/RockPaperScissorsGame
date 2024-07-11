function getComputerChoice() {
    // All lower case for easier comparison between User and Computer
    let validChoices = ["rock", "paper", "scissors"];
    let randomChoice = Math.floor(Math.random() * (2 - 0 + 1) + 0);

    return validChoices[randomChoice];
}

function getHumanChoice() {
    // Transforms user's string input into all lowercase; easier comparison
    humanChoice = prompt("Rock, Paper, or Scissors?").toLowerCase();
    return humanChoice
}

function playRound() {
    // Fetch player picks
    let humanChoice = getHumanChoice()
    let computerChoice = getComputerChoice()

    // Case when Drawing
    if (humanChoice == computerChoice) {
        console.log(`It's a tie! Both players picked ${ humanChoice }`)
    }

    // Case when Human wins
    else if ((humanChoice === "scissors" && computerChoice === "paper") || (humanChoice === "paper" && computerChoice === "rock") || (humanChoice === "rock" && computerChoice === "scissors")) {
        console.log(`Human wins! ${ humanChoice } beats ${ computerChoice }`)
        humanScore++
    }

    // Case when Computer wins
    else if ((computerChoice === "scissors" && humanChoice === "paper") || (computerChoice === "paper" && humanChoice === "rock") || (computerChoice === "rock" && humanChoice === "scissors")) {
        console.log(`Computer wins! ${ computerChoice } beats ${ humanChoice }`)
        computerScore++
}
}

function playGame() {
    // Initializes a counter variable (i) to track rounds played
    // Sets a conditional statement, while i < 5, call playRound() func
    // i++ increments (i) by 1 after each run through
    for (let i = 0; i < 5; i++) {
        console.log(`===Round ${ i + 1 }===`);
        playRound();
    }

    // Displays current scores of both players
    console.log(`Human: ${ humanScore}\nComputer: ${ computerScore }`);

    // Human win case scenario
    if (humanScore > computerScore) {
        console.log(`Human has won with a score of ${ humanScore } compared to Computer's score of ${ computerScore }!`);
    } else {
        console.log(`Computer has won with a score of ${ computerScore} compared to Human's score of ${ humanScore }!`)
    }
}

// Init player scores
let humanScore = 0
let computerScore = 0

// Main
playGame();

