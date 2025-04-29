//function to get computer's choice
function getComputerChoice(){

    const randomNumber = Math.random();

    if (randomNumber <= 0.33){
        console.log ('Rock')
        return 'Rock';
    }else if (randomNumber <= 0.66 && randomNumber > 0.34){
        console.log ('Paper')
        return'Paper';
    }else{
        console.log ('Scissors')
        return 'Scissors';
    }
}

//function to get human's choice
function getHumanChoice(){

    let userChoice  = prompt('Rock, Paper or Scissors?', '');
    let capitalizeUserChoice = userChoice.charAt(0).toUpperCase() + userChoice.slice(1).toLowerCase();

    if (capitalizeUserChoice == 'Rock'){
        return 'Rock';
    }else if(capitalizeUserChoice == 'Paper'){
        return 'Paper';
    }else if (capitalizeUserChoice == 'Scissors'){
        return 'Scissors';
    }else {
       return 'Invalid input, please try again.'
    };
}

//variables to store the scores of both players
let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice){


    if (humanChoice == 'Rock' && computerChoice == 'Paper'){

      ++computerScore;
      return `Computer wins! ${computerChoice} beats ${humanChoice}.`;

    }else if (humanChoice == 'Rock' && computerChoice == 'Scissors'){
        
        ++humanScore;
        return `You win! ${humanChoice} breaks ${computerChoice}.`;

    }else if (humanChoice == 'Scissors' && computerChoice == 'Paper'){

        ++humanScore;
        return `You win! ${humanChoice} cuts ${computerChoice}.`;
    }else if(humanChoice == 'Scissors' && computerChoice == 'Rock'){

        ++computerScore;
        return `Computer wins! ${computerChoice} breaks ${humanChoice}.`;
    }else if (humanChoice == 'Paper' && computerChoice == 'Rock'){

        ++humanScore;
        return `You win! ${humanChoice} beats ${computerChoice}.`;
    }else if (humanChoice == 'Paper' && computerChoice == 'Scissors'){

        ++computerScore;
        return `Computer wins! ${computerChoice} cuts ${humanChoice}.`;
    }else if(humanChoice === computerChoice){

        return `It's a tie. Play another round!`;
    }else{
        return `You donut, that's not even in the options. Play again!`;
    };   
}

function playGame(){

//variable to store the number of times the player or computer has won
   const numberOfRounds = 5;

    for(i = 0; i < numberOfRounds; i++){
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        console.log(playRound(humanSelection, computerSelection));
} 
    if (humanScore > computerScore){
        console.log('You win the game!')
    }else if(humanScore < computerScore){
        console.log('Computer wins!')
    }else{
        console.log('It\'s a tie')
    }

}

playGame();
