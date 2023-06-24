let playerScore = 0;
let computerScore = 0;

//.children property returns HTML collection, not an array
const playerChoice = Array.from(document.getElementById('choices').children);

playerChoice.forEach((choice) => {
    choice.addEventListener('click', playRound);
})

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

function playRound(e) {
    let playerSelection = this.id;
    let computerSelection = getComputerChoice();
    if (playerSelection.toLowerCase() === computerSelection.toLowerCase()) {
        // return ("It's a tie!");
        console.log("tie");
        updateScore("tie");
    }
    else {
        if ((playerSelection.toLowerCase() == "rock" && computerSelection.toLowerCase() == "paper") ||
            (playerSelection.toLowerCase() == "scissors" && computerSelection.toLowerCase() == "rock") ||
            (playerSelection.toLowerCase() == "paper" && computerSelection.toLowerCase() == "scissors")) {
            // return (`You lose! ${capitalize(computerSelection)} beats ${capitalize(playerSelection)}!`);
            console.log("lose");
            updateScore("lose")
        }
        else {
            // return (`You win! ${capitalize(playerSelection)} beats ${capitalize(computerSelection)}!`);
            console.log("win");
            updateScore("win");
        }
    }
}

function updateScore(result){

}

// game();