function getComputerChoice(){
    let computerChoice = ['rock','paper','scissor'];
    return computerChoice[Math.floor(Math.random()*100)%3];
}
console.log(getComputerChoice());