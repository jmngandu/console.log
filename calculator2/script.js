let runningTotal = 0;
let buffer = "0";
let previousOperator = 0;

const screen = document.querySelector('.screen');

function buttonClick (value){
    if(isNaN(value)){
        //this is not a number
        handleSymbol(value);
    }else {
        //this is a number
        handleNumber(value);
    }
 }

 function handleSymbol(symbol){}
 function handleNumber(numberString){}

function init () {
    document.querySelector('.calc-buttons')
    .addEventListener("click", function(event){
        buttonClick(event.target.innerText);
    })

}

init();