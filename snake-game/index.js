//block
var blockSize =25;
var rows = 20;
var cols = 20;
var board;
var context;

window.onload = function() {
    board = document.getElementById("board");
    board.height = rows * blockSize;
    board.width = cols * blockSize;
    context = board.getContext("2d") // used for drawing on the board

    update();
}

function update() {
    
}