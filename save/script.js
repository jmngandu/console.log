const textbox = document.getElementById("textbox");
const button = document.getElementById("btn");

button.addEventListener("click", function(){
   localStorage.name = textbox.value;
});
document.write(localStorage.name);
