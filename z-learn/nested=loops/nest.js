//2D arrays
let numberGrid = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [0]
]
for(let i = 0; i < numberGrid.length; i++){
    for(let j = 0; j < numberGrid[i].length; j++){
        document.write(numberGrid[i][j]);
    }
    document.write("<br/>");
}
