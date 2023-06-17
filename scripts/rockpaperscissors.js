//function to generate random computer "choice" of rock/paper/scissors
function getComputerChoice() {
    //create an array to store values that will be randomly selected
    let choices = ["rock", "paper", "scissors"];
    //generate random number to access element of array and return it
    return (choices[(Math.floor((Math.random() * 3)))]);
};

//function that takes a string and makes every letter lowercase except the first letter
function capitalize(word) {
    //replace only replaces the first match
    return ((word.toLowerCase()).replace(word.charAt(0), word.charAt(0).toUpperCase()));
};

function playRound(playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() === computerSelection.toLowerCase()) {
        return ("It's a tie!");
    }
    else {
        if ((playerSelection.toLowerCase() == "rock" && computerSelection.toLowerCase() == "paper") ||
            (playerSelection.toLowerCase() == "scissors" && computerSelection.toLowerCase() == "rock") ||
            (playerSelection.toLowerCase() == "paper" && computerSelection.toLowerCase() == "scissors")) {
            return (`You lose! ${capitalize(computerSelection)} beats ${capitalize(playerSelection)}!`);
        }
        else{
            return (`You win! ${capitalize(playerSelection)} beats ${capitalize(computerSelection)}!`);
        }
    }
}

function game(){
    //number of rounds of rock paper scissors to play
    let noOfGames = 5, playerScore = 0, computerScore = 0;
    //loop that plays a certain number of rounds
    for(let i = 1; i <= noOfGames; i++){
        let playerSelection = prompt("Let's play a round of rock paper scissors! Enter your choice: ");
        let result = playRound(playerSelection, getComputerChoice());
        if(result.charAt(4) === 'w'){
            playerScore++;
        }
        else if(result.charAt(4) == 'l'){
            computerScore++;
        }
        console.log(result);
    }
    if(playerScore > computerScore){
        console.log("Congratulations! You won!");
    }
    else if(computerScore > playerScore){
        console.log("Oh no! You lost!");
    }
    else{
        console.log("It's a tie!");
    }
}

game();