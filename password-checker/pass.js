let password = 1234;
let trial;
var entryCount = 0;
var limit = 3;
var error = false;

while(trial != password){
    if(entryCount < limit){
        trial = window.prompt("Enter password")
        entryCount++;
    }else{
        error = true;
    }
    
}
alert("You entered correct password")