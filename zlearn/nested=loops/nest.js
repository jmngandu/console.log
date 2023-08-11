//2D arrays
let numberGrid = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]
for(let i=0; i < numberGrid.length; i++){
    for(let j=0; j < numberGrid[i].length; j++){
        document.write(`i is ${i} while j is ${j} <br/>`);
    }
}



document.write(numberGrid[2][0]);//[row] [colos]
