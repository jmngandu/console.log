let num1 = 8
let num2 = 2
document.getElementById("num1-el").textContent = num1
document.getElementById("num2-el").textContent = num2
let addEl = document.getElementById("sum-el")
let subtractEL = document.getElementById("sum-el")
let divideEl = document.getElementById("sum-el")
let multiplyEL = document.getElementById("sum-el")
function add(){
    let result =  num1 + num2
    addEl.textContent = "Sum: " + result
}
function subtract(){
    num3 = num1 -num2
    subtractEL.textContent = "Sum: " + num3 
}
function divide(){
    divideEl.textContent = "Sum: " + num1/num2
}
function multiply(){
    multiplyEL.textContent = "Sum: " + num1*num2
}