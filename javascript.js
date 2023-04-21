game();

// Randomly generate 'Rock', 'Paper' or 'Scissors'.
function getComputerChoice() {

    // Generate random value.
    let randomValue = Math.floor(Math.random() * 100);

    console.log(randomValue);

    // Arbitraty classify the random value to either rock, paper or scissors thru modular arithmetic.
    if (randomValue % 3 === 0) {
        return "rock";
    }
    else if (randomValue % 3 === 1) {
        return "paper"
    }
    else {
        return "scissor"
    }
}

// Check winner. 
function playRound(event) {

    // Get computer's selection.
    let computerSelection = (getComputerChoice()).toLowerCase();

    // Get the player's selection.
    let playerSelection = event.target.textContent;

    // Display the computer and user's selection
    console.log(`Computer: ${computerSelection}  You: ${playerSelection}`)

    // The player won.
    if ((playerSelection === "scissor" && computerSelection == "paper") ||
        (playerSelection === "paper" && computerSelection == "rock") ||
        (playerSelection === "rock" && computerSelection == "scissor")) {

        // Print Victory Message.
        console.log(`You Won! ${playerSelection} Beats ${computerSelection}`);

        return "victory";
    }
    // The player and the computer are tied.
    else if (playerSelection === computerSelection) {

        // Print Tie Message.
        console.log(`Tie! Repeat Round`);

        return "tie";
    }
    // The player lost.
    else {

        // Print defeat message.
        console.log(`You Lose! ${computerSelection} Beats ${playerSelection}`);

        return "defeat";
    }
}

// Play Rock, Paper, Scissors 5 times.
function game() {

    // Initialize score Tracker.
    let userScore = 0;

    // Play the game 5 times.
    for (let i = 0; i < 5; i++) {

        // Increment score if the player won the round.
        if (playRound(computerSelection, playerSelection) === "victory") {
            userScore++;
        }
        // Repeat round if the computer and player are tied.
        else if (playRound(computerSelection, playerSelection) === "tie") {
            i--;
        }
    }

    // Check whether the user won.
    if (userScore > 2) {
        console.log("You Won the game!");
    }
    else {
        console.log("You Lost the game.")
    }
}

