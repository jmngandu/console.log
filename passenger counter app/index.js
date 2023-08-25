 // document.getElementById("count-el").innerText = 5
 let countEl = document.getElementById("count-el")
 let saveEl = document.getElementById("save-el")
 
 let count = 0
 function increment(){
     count += 1
     countEl.textContent = count
 }
 function save(){
     let countstr = count + " - "
     saveEl.textContent += countstr
     console.log(count)
     countEl.textContent = 0
     count = 0
 }

