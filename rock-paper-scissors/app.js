const ComputerDisplayChoice = document.getElementById("computer-choice");
const UserDisplayChoice = document.getElementById("user-choice");
const resultDisplay = document.getElementById("result");
const possibleChoices = document.querySelectorAll("button");

let userchoice
possibleChoices.forEach(possibleChoice =>possibleChoice.addEventListener("click", (e) => {
    userchoice = e.target.id
    UserDisplayChoice.innerHTML = userchoice;
    generateComputerChooice()
}))

function generateComputerChooice() {
    const randomNumber = Math.floor(Math.random() * 3)
}



