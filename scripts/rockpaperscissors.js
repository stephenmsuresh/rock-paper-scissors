//function to generate random computer "choice" of rock/paper/scissors
function getComputerChoice() {
    //create an array to store values that will be randomly selected
    let choices = ["rock", "paper", "scissors"];
    //generate random number to access element of array and return it
    return (choices[(Math.floor((Math.random() * 3)))]);
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


function capitalize(word) {
    //replace only replaces the first match
    return ((word.toLowerCase()).replace(word.charAt(0), word.charAt(0).toUpperCase()));
};