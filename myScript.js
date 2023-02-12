//Variable definition
let options = ["rock", "paper", "scissors"]
let computerSelection;
let playerSelection;
let rock, paper, scissors;
let x; //varaible to define who wins or loses
let computerScore=0, playerScore=0

for (let i=0; i<5; i++){    
//Player inputs their choice
playerSelection = prompt("Do you choose Rock, Paper or Scissors?").toLowerCase();
console.log(`Player chose: ${playerSelection}`)

//Computer inputs its choice
function getComputerChoice(options) {
    return options[Math.floor(Math.random() * options.length)];
}
computerSelection = getComputerChoice(options);
console.log(`Computer chose: ${computerSelection}`);

//Compare inputs to choose the winer
    function playRound(playerSelection, computerSelection) {
        if (computerSelection === playerSelection) {
            return "It's a tie!"
        }
        else if ((computerSelection === rock & playerSelection === paper) | (computerSelection === paper & playerSelection === scissors) | (computerSelection === scissors & playerSelection === rock)){
            playerScore=playerScore+1
            return "You win this one!!"
        }
        else {
            computerScore=computerScore+1
            return "You lose this one!!"}
    }
    console.log(playRound(playerSelection,computerSelection))
}
