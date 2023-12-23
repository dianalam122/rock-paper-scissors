
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

 
const body = document.body;
const div = document.createElement('div');
body.append(div);
const roundText = document.createElement('h1');
div.append(roundText);
const resultText = document.createElement('h1');
div.append(resultText);
const score = document.createElement('h1');
div.append(score);
const endText = document.createElement('h1');
div.append(endText);


function clearTextContent() {
    roundText.textContent = '';
}

let scorePlayer = 0;
let scoreComputer = 0;

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        // game(button.id)
        const computerSelection = getComputerChoice();

        if(scorePlayer == 5 || scoreComputer == 5){
            endText.textContent = "Game Over!"
        }else playRound(button.id, computerSelection);

    });
});


function playRound(playerSelection, computerSelection){

    clearTextContent();

    const result = checkWinner(playerSelection, computerSelection);
    if(result == "Tie"){
        roundText.textContent = `Its a tie! Both chose ${playerSelection}`;
    } 
    else if (result == "Player") {
       roundText.textContent = `You win! ${playerSelection} beats ${computerSelection}`;
       scorePlayer++;
    }else {
        roundText.textContent = `You lose! ${computerSelection} beats ${playerSelection}`;
        scoreComputer++;
    }
    score.textContent = `Player: ${scorePlayer} - Computer: ${scoreComputer}`;

}

// incorporate 5 rounds into the game. 

// function game(buttonId){ 

//     let scorePlayer = 0;
//     let scoreComputer = 0;
     
//     for (let i = 0; i < 5; i++) {
//         const computerSelection = getComputerChoice();
//         playRound(buttonId, computerSelection); 
//         if(checkWinner(buttonId, computerSelection)=="Player"){
//             scorePlayer++;
//         } else if (checkWinner(buttonId, computerSelection)=="Computer"){
//             scoreComputer++;
//         }
//     }
    
//     endText.textContent = "Game Over!";
//     if(scorePlayer > scoreComputer){
//         resultText.textContent = "Player was the winner";
//     } else if (scorePlayer < scoreComputer){
//         resultText.textContent = "Computer was the winner";
//     } else {
//         resultText.textContent = "It was a tie!";
//     }

// }