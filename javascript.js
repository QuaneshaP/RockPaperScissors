console.log("hello");

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

function getHumanChoice(){
    let choice = prompt("Choose: Rock Paper or Scissors");
    choice = choice.toUpperCase();
    switch(choice){
        case "ROCK":
            return "Rock"
            break;
        case "PAPER":
            return "Paper"
            break;
        case "SCISSORS":
            return "Scissors"
            break;
    }   
}


function playGame(){
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice){
        humanChoice = humanChoice.toUpperCase();

        if(humanChoice ==="ROCK" && computerChoice ==="Paper"){
        console.log("You lose! Paper beats rock");
        computerScore ++;
        }
        else if (humanChoice === "ROCK" && computerChoice ==="Scissors"){
        console.log("You win! Rock smashes Scissors");
        humanScore ++;
        }
        else if(humanChoice ==="ROCK" && computerChoice === "Rock"){
        console.log("It's a Draw");
        }
        else if(humanChoice ==="PAPER" && computerChoice === "Rock"){
        console.log("You win! Paper covers Rock");
        humanScore ++;
        }
        else if(humanChoice ==="PAPER" && computerChoice === "Scissors"){
        console.log("You lose! Scissors cuts Paper");
        computerScore ++;
        }
        else if(humanChoice ==="PAPER" && computerChoice === "Paper"){
        console.log("It's a Draw");
        }
        
        else if(humanChoice ==="SCISSORS" && computerChoice === "Paper"){
        console.log("You win! Scissors cuts Paper");
        humanScore ++;
        }
        else if(humanChoice ==="SCISSORS" && computerChoice === "Scissors"){
        console.log("It's a Draw");
        }
        else if(humanChoice ==="SCISSORS" && computerChoice === "Rock"){
        console.log("You lose! Rock smashes Scissors.");
        computerScore ++;
        }
    
    }
    for (let i = 0; i <6; i++){
        let recallC = recallComputer();
        let recallH = recallHuman();
        console.log("The computer chooses : " + recallC);
        console.log("You choose :" + recallH);
        playRound(recallH, recallC);
    }
    if(computerScore>humanScore){
        console.log("The computer wins!");
    }
    else if(computerScore === humanScore){
        console.log("It's a draw");
    }
    else{
        console.log("You Win!");
    }
}

function recallComputer(){
    return getComputerChoice();
}
function recallHuman(){
    return getHumanChoice();
}
console.log(playGame());


