// Initialize user score Tracker.
let userScore = 0;

// Initialize computer score Tracker.
let computerScore = 0;

// Get all buttons.
let buttons = Array.from(document.querySelectorAll("button"));

// Add event lister to all buttons.
buttons.forEach(button => button.addEventListener("click", playRound))


let scoreDisplay = document.querySelector("#score");
let selectionDisplay = document.querySelector("#selection");
let decisionDisplay = document.querySelector("#decision");
let finalResult = document.querySelector("#final-result");


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
    selectionDisplay.textContent = `Computer: ${computerSelection}  You: ${playerSelection}`;

    // The player won.
    if ((playerSelection === "scissor" && computerSelection == "paper") ||
        (playerSelection === "paper" && computerSelection == "rock") ||
        (playerSelection === "rock" && computerSelection == "scissor")) {

        // Print Victory Message.
        decisionDisplay.textContent = `You Won! ${playerSelection} Beats ${computerSelection}`;

        userScore++;
    }
    // The player and the computer are tied.
    else if (playerSelection === computerSelection) {

        // Print Tie Message.
        decisionDisplay.textContent = `Tie!`;
    }
    // The player lost.
    else {

        // Print defeat message.
        decisionDisplay.textContent = `You Lose! ${computerSelection} Beats ${playerSelection}`;

        computerScore++;
    }

    let florenz = "florenz";

    // Display who got to 5 first.
    if (userScore === 5 || computerScore === 5) {
        finalResult.textContent = (userScore === 5) ? "You Won" : "Computer Won!";
        userScore = 0;
        computerScore = 0;
    }

    
    // Display current score.
    scoreDisplay.textContent = `Computer: ${computerScore}   User: ${userScore}`;
    let jaizzer = "calderon";

    let palis = "palis";
}

