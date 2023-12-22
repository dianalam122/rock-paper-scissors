
const options = ["rock", "paper", "scissors"];
const buttons = document.querySelectorAll('button');

function getComputerChoice(){
    const choice = options[Math.floor(Math.random() * options.length)];
    return choice; 
}

function checkWinner(playerSelection, computerSelection){
    if (playerSelection == computerSelection){
        return "Tie"
    } 
    else if (
        (playerSelection == "rock" && computerSelection == "scissors") ||
        (playerSelection == "paper" && computerSelection == "rock") ||
        (playerSelection == "scissors" && computerSelection == "paper")
    ){
        return "Player";
    } 
    else {
        return "Computer";
    }
}

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        playRound(button.id, getComputerChoice());        
    });
});
 
const body = document.body
const div = document.createElement('div')
body.append(div)
const tieText = document.createElement('h1')
div.append(tieText)
const playerText = document.createElement('h1')
div.append(playerText)
const computerText = document.createElement('h1')
div.append(computerText)

function clearTextContent() {
    tieText.textContent = '';
    playerText.textContent = '';
    computerText.textContent = '';
}

function playRound(playerSelection, computerSelection){
    clearTextContent();
    const result = checkWinner(playerSelection, computerSelection);
    if(result == "Tie"){
        tieText.textContent = "It's a Tie!";
    } 
    else if (result == "Player") {
       playerText.textContent = "You win!";
    }else {
        computerText.textContent = "You lose!";
    } 
}


// function getPlayerChoice() {
//     let validatedInput = false;
//     while(validatedInput == false) {
//         const choice = prompt("Rock Paper Scissors");
//         if(choice == null){
//             continue;

//         }
//         const choiceInLower = choice.toLowerCase();
//         if(options.includes(choiceInLower)){
//             validatedInput = true;
//             return choiceInLower;
//         }
//     }
// }

// function game(){
//     let scorePlayer = 0;
//     let scoreComputer = 0;

//     for (let i = 0; i < 5; i++) {
//         const playerSelection = getPlayerChoice();
//         const computerSelection = getComputerChoice();
//         console.log(playRound(playerSelection, computerSelection));
//         if(checkWinner(playerSelection, computerSelection)=="Player"){
//             scorePlayer++;
//         } else if (checkWinner(playerSelection, computerSelection)=="Computer"){
//             scoreComputer++;
//         }
//         console.log(scorePlayer);
//         console.log(scoreComputer); 
//     }
//     console.log("Game over") 
//     if(scorePlayer > scoreComputer){
//         console.log("Player was the winner")
//     } else if (scorePlayer < scoreComputer){
//         console.log("Computer was the winner")
//     } else {
//         console.log("It was tie!")
//     }

// }

// game()

