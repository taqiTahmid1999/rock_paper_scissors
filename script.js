function getComputerChoice(){
    let computerChoice = ['rock','paper','scissor'];
    return computerChoice[Math.floor(Math.random()*100)%3];
}


function getPlayerChoice(computerScore,playerScore,matchNumber){
    let playerChoiceText=prompt(`Match number:${matchNumber}\nComputer(${computerScore}) vs Player(${playerScore})\nWrite the choice(rock/paper/scissor):`);
    let playerChoice=playerChoiceText.trim().toLowerCase();
    if(playerChoice==='rock'||'paper'||'scissor')
    return playerChoice;
    else
        return undefined;
}

function game(computerScore,playerScore,matchNumber){
    let player=getPlayerChoice(computerScore,playerScore,matchNumber);
    let computer=getComputerChoice();
    let result;
    if(player===computer) result='draw with computer';
    else if(player==='rock'&&computer==='scissor'||player==='scissor'&&computer==='paper'||player==='paper'&&computer==='rock'){
        result='win against computer';
    }
    else result='lost against computer';
    alert(`Computer gives ${computer} and you give ${player};\nSo you ${result}`);
    return result;
}
function start(){
    let computerScore=0;
    let playerScore=0;
    let matchNumber=0;
    let finalResult='';
    for(let i=0;i<=4;i++){
        let score=game(computerScore,playerScore,matchNumber);
        if(score==='win against computer'){
            playerScore++;
            matchNumber++;
        }
        else if(score==='lost against computer'){
            computerScore++;
            matchNumber++;
        }
        else{
            matchNumber++;
        }

    }
    if(computerScore>playerScore){
        finalResult=`Sorry You lost against Computer by ${playerScore}-${computerScore}`;
    }
    else if(playerScore>computerScore){
        finalResult=`Hurrah! You win against Computer by ${playerScore}-${computerScore}`;
    }
    else if(playerScore===computerScore){
        finalResult=`You draw with Computer by ${playerScore}-${computerScore}`;
    }
    alert(finalResult);
}
start();
