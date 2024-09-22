function getComputerChoice(){
    switch(Math.floor(Math.random()*3)){
        case 0:
        return "Rock";
        break;
        case 1:
        return "Paper";
        break;
        case 2:
        return "Scissors"
        break;
    }
}

function getHumanChoice(input){
     input =  prompt("Pick a choice: Rock, Paper or Scissors");
    return input.toLowerCase();
    }

    let humanScore = 0;
    let computerScore = 0;


function playRound(humanChoice, computerChoice){
    if(humanChoice=="rock"){
        if(computerChoice=="rock"){
            console.log("Draw! Both chose Rock!");
        }
        if(computerChoice=="paper"){
            console.log("You lost! Paper beats Rock!");
            computerScore++;
        }
        if(computerChoice=="scissors"){
            console.log("You Win! Rock beats Scissors!");
            humanScore++;
        }
    }
    if(humanChoice=="paper"){
        if(computerChoice=="rock"){
            console.log("You Win! Paper beats Rock!");
            humanScore++;
        }
        if(computerChoice=="paper"){
            console.log("Draw! Both chose Paper!");
        }
        if(computerChoice=="scissors"){
            console.log("You lost! Scissors beats Paper!");
            computerScore++;
        }
    }
    if(humanChoice=="scissors"){
        if(computerChoice=="rock"){
            console.log("You Lost! Rock beats Scissors!");
            computerScore++;
        }
        if(computerChoice=="paper"){
            console.log("You Win! Scissors beats Paper!");
            humanScore++;
        }
        if(computerChoice=="scissors"){
            console.log("Draw! Both chose Scissors!");
        }
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);

