let password = 1234;
let trial;
var entryCount = 0;
var limit = 3;
var error = false;

while(trial != password && !error){
    if(entryCount < limit){
        trial = window.prompt("Enter password");
        entryCount++;
    }else{
        error = true;
    }}

    if(error){
        alert("Too many entries");
    }else{
        alert("You entered correct password")
    }

