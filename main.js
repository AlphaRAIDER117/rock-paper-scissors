let playerScore = 0;
let computerScore = 0;
game();

function computerPlay() {
    let selection = Math.floor(Math.random() * 3);
    if (selection == 0) {
        return "rock";
    }
    else if (selection == 1) {
        return "paper";
    }
    else {
        return "scissors";
    }
}

function userPlay() {
    let selection = prompt("Rock/Paper/Scissors. Please enter your move");
    if (selection.length == 4) {
        return "rock";
    }
    else if (selection.length == 5) {
        return "paper";
    }
    else {
        return "scissors";
    }
}

function playRound(player, computer) {
    if ((player == "rock" && computer == "scissors") || (player == "paper" && computer == "rock") || (player == "scissors" && computer == "paper")) {
        playerScore++;
        return ("You win, " + player + " beats " + computer);
    }
    else if (player == computer) {
        return ("Tie, " + player + " equals " + computer);
    }
    else {
        computerScore++;
        return ("You lose, " + computer + " beats " + player);
    }
}

function game() {
    let i = 0;
    while (i < 5) {
        let playerSelection = userPlay();
        let computerSelection = computerPlay();
        console.log(playRound(playerSelection, computerSelection));
        i++;
    }
    if (playerScore > computerScore) {
        console.log("You beat the Computer, you are The One");
    }
    else if (playerScore == computerScore) {
        console.logt("You and the Computer are evenly matched, the war continues.");
    }
    else {
        console.log("The Computer won, humanity has fallen");
    }
}