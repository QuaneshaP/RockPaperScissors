const paperBtn = document.querySelector(".paperBtn");
const rockBtn = document.querySelector(".rockBtn");
const scissorBtn = document.querySelector(".scissorBtn");
const content = document.querySelector(".content");
const winner = document.querySelector(".winner");

const div = document.querySelector("div");
div.appendChild(content);
div.appendChild(winner);




function getComputerChoice(){
    let counter = Math.floor(Math.random()*3);
    if (counter === 0){
        return "Rock";
    }
    else if(counter === 1){
        return "Paper";
    }
    else{
        return "Scissors";
    }
}


function playGame(){

    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice){
        if (humanScore >= 5 || computerScore >= 5) {
            return; 
        }
        let computerChoice = getComputerChoice();
        
        if(humanChoice ==="ROCK" && computerChoice ==="Rock" ){
            content.textContent = "Its a draw! " + " Your score: " 
            + humanScore + " Computer Score: " + computerScore;
        }
        else if(humanChoice === "ROCK" && computerChoice === "Paper"){
            computerScore ++;
            content.textContent = "You Lose Paper Covers Rock. " + "Your score: " 
            + humanScore + " Computer Score: " + computerScore;
        }
        else if(humanChoice === "ROCK" && computerChoice === "Scissors"){
            humanScore ++;
            content.textContent = "You win Rock Smashes Scissors. \n " + "Your score: "
            + humanScore + " Computer Score: " + computerScore;
        }
        else if(humanChoice ==="PAPER" && computerChoice === "Rock"){
            humanScore ++;
            content.textContent = "You win! Paper covers Rock. \n " + "Your score: " 
            + humanScore + " Computer Score: " + computerScore;
        }
        else if(humanChoice === "PAPER" && computerChoice === "Scissors"){
            computerScore ++;
            content.textContent = "You lose! Scissors cuts Paper. \n " + "Your score: " 
            + humanScore + " Computer Score: " + computerScore;
        }
        else if(humanChoice === "PAPER" && computerChoice === "Paper"){
            content.textContent = "Its a draw! " + " Your score: " 
            + humanScore + " Computer Score: " + computerScore;;
        }
        else if(humanChoice === "SCISSORS" && computerChoice === "Paper"){
            humanScore ++;
            content.textContent = "You win! Scissors cuts Paper. \n " + "Your score: " 
            + humanScore + " Computer Score: " + computerScore;
        }
        else if(humanChoice === "SCISSORS" && computerChoice === "Scissors"){
            content.textContent = "Its a draw! " + " Your score: " 
            + humanScore + " Computer Score: " + computerScore;
        }
        else if(humanChoice === "SCISSORS" && computerChoice === "Rock"){
            computerScore ++;
            content.textContent = "You lose! Rock smashes Scissors. \n "  + "Your score: " 
            + humanScore + " Computer Score: " + computerScore;
        }
        if(humanScore === 5 || computerScore === 5){
            if(humanScore > computerScore){
                winner.textContent = "You Win!";
            }
            else{
                winner.textContent = "The Computer Wins!";
            } 
        }
        
    }    
   
    paperBtn.addEventListener("click", function(){
        playRound("PAPER");
    });
    rockBtn.addEventListener("click", function(){
        playRound("ROCK");
    });
    scissorBtn.addEventListener("click", function(){
        playRound("SCISSORS");
    });  
    
}
playGame();