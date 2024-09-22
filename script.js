function getComputerChoice() {
    switch (Math.floor(Math.random() * 3)) {
        case 0:
            return "rock";
            break;
        case 1:
            return "paper";
            break;
        case 2:
            return "scissors"
            break;
    }
}
function getHumanChoice(input) {
    input = prompt("Pick a choice: Rock, Paper or Scissors");
    return input.toLowerCase();
}




let humanScore = 0;
let computerScore = 0;




const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();



function playGame() {
    function playRound(humanChoice, computerChoice) {
    

   

        if (humanChoice == "rock") {
            if (computerChoice == "rock") {
                alert("Draw! Both chose Rock!");
            }
            if (computerChoice == "paper") {
                alert("You lost! Paper beats Rock!");
                computerScore++;
            }
            if (computerChoice == "scissors") {
                alert("You Win! Rock beats Scissors!");
                humanScore++;
            }
        }
        if (humanChoice == "paper") {
            if (computerChoice == "rock") {
                alert("You Win! Paper beats Rock!");
                humanScore++;
            }
            if (computerChoice == "paper") {
                alert("Draw! Both chose Paper!");
            }
            if (computerChoice == "scissors") {
                alert("You lost! Scissors beats Paper!");
                computerScore++;
            }
        }
        if (humanChoice == "scissors") {
            if (computerChoice == "rock") {
                alert("You Lost! Rock beats Scissors!");
                computerScore++;
            }
            if (computerChoice == "paper") {
                alert("You Win! Scissors beats Paper!");
                humanScore++;
            }
            if (computerChoice == "scissors") {
                alert("Draw! Both chose Scissors!");
            }
        }
    }


    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());

    if (humanScore > computerScore) {
        console.log("You Won!");
    } else {
        console.log("You Lost!");
    }
}

