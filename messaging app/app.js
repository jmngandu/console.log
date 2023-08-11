let messages = document.querySelector('#message');
let textb = document.querySelector('#text');
let button = document.querySelector('#btn');

prompt('Confirm your not a robot');

button.addEventListener('click', function(){
    var newElement = document.createElement("li");
    newElement.innerText = textb.value;
    messages.appendChild(newElement);
    textb.value = "";
    alert('message sent')
})



