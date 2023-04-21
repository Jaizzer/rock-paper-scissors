

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

    // Initialize user score Tracker.
    let userScore = 0;

    // Initialize computer score Tracker.
    let computerScore = 0;

    do {
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

            userScore++;
        }
        // The player and the computer are tied.
        else if (playerSelection === computerSelection) {

            // Print Tie Message.
            console.log(`Tie!`);
        }
        // The player lost.
        else {

            // Print defeat message.
            console.log(`You Lose! ${computerSelection} Beats ${playerSelection}`);

            computerScore++;
        }
    } while (userScore !== 5 || computerScore !== 5)



}


