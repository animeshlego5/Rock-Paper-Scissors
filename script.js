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







function playGame(){

let humanScore = 0;
let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
    
        
   

        if (humanChoice == "rock") {
            if (computerChoice == "rock") {
                alert("Draw! Both chose Rock!");
            }
            else if (computerChoice == "paper") {
                alert("You lost! Paper beats Rock!");
                computerScore++;
            }
            else if (computerChoice == "scissors") {
                alert("You Win! Rock beats Scissors!");
                humanScore++;
            }
        } else if (humanChoice == "paper") {
            if (computerChoice == "rock") {
                alert("You Win! Paper beats Rock!");
                humanScore++;
            }
            else if (computerChoice == "paper") {
                alert("Draw! Both chose Paper!");
            }
            else if (computerChoice == "scissors") {
                alert("You lost! Scissors beats Paper!");
                computerScore++;
            }
        } else if (humanChoice == "scissors") {
            if (computerChoice == "rock") {
                alert("You Lost! Rock beats Scissors!");
                computerScore++;
            }
            else if (computerChoice == "paper") {
                alert("You Win! Scissors beats Paper!");
                humanScore++;
            }
            else if (computerChoice == "scissors") {
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
        alert("You Won!");
    } else if(humanScore < computerScore){
        alert("You Lost!");
    } else {
        alert("Draw!");
    }

}
playGame();
//     const humanSelection = getHumanChoice();
// const computerSelection = getComputerChoice();


    

    

