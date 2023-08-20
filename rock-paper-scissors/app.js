const ComputerDisplayChoice = document.getElementById("computer-choice");
const UserDisplayChoice = document.getElementById("user-choice");
const resultDisplay = document.getElementById("result");
const possibleChoices = document.querySelectorAll("button");

let userchoice
let computeChoice
possibleChoices.forEach(possibleChoice =>possibleChoice.addEventListener("click", (e) => {
    userchoice = e.target.id
    UserDisplayChoice.innerHTML = userchoice;
    generateComputerChooice()
}))

function generateComputerChooice() {
    const randomNumber = Math.floor(Math.random() * 3) + 1
    
    if(randomNumber === 1){
        computeChoice = "Rock"
    }
    if(randomNumber === 2){
        computeChoice = "Paper"
    }
    if(randomNumber === 3){
        computeChoice = "Scissors"
    }
    ComputerDisplayChoice.innerHTML = computeChoice
}



