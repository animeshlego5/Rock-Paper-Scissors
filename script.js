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
    

