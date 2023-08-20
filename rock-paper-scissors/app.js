const ComputerDisplayChoice = document.getElementById("computer-choice");
const UserDisplayChoice = document.getElementById("user-choice");
const resultDisplay = document.getElementById("result");
const possibleChoices = document.querySelectorAll("button");

let userchoice
let computerChoice
let result
possibleChoices.forEach(possibleChoice =>possibleChoice.addEventListener("click", (e) => {
    userchoice = e.target.id
    UserDisplayChoice.innerHTML = userchoice;
    generateComputerChooice()
    getResult()
}))

function generateComputerChooice() {
    const randomNumber = Math.floor(Math.random() * 3) + 1
    
    if(randomNumber === 1){
        computerChoice = 'rock'
    }
    if(randomNumber === 2){
        computerChoice = 'paper'
    }
    if(randomNumber === 3){
        computerChoice = 'scissors'
    }
    ComputerDisplayChoice.innerHTML = computerChoice
}

function getResult() {
    if (computerChoice === userchoice){
        result = 'Its a draw!'
    }
    if (computerChoice === 'rock' && userchoice === "paper"){
        result = 'You win!'
    }
    if (computerChoice === 'rock' && userchoice === "scissors"){
        result = 'You lost!'
    }
    if (computerChoice === 'paper' && userchoice === "scissors"){
        result = 'You win!'
    }
    if (computerChoice === 'paper' && userchoice === "rock"){
        result = 'You lost!'
    }
    if (computerChoice === 'scissors' && userchoice === "rock"){
        result = 'You win!'
    }
    if (computerChoice === 'scissors' && userchoice === "paper") {
        result = 'You lose!'
    }
    resultDisplay.innerHTML = result
}