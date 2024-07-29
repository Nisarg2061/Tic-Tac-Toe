//-----------------------------------------------------------------------------------------//
var boxes = document.querySelectorAll(".box");
var resetBtn = document.querySelector("#resetBtn");
var msgC = document.querySelector(".hide");
var msg = document.querySelector("#msg");
//-----------------------------------------------------------------------------------------//
//0 indicates player X turn and 1 indicates player O turn.
var turn = 0;
var counter = 0;
//-----------------------------------------------------------------------------------------//
//Winning Conditions
var winC = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];
//-----------------------------------------------------------------------------------------//
//Resets the game without reloading.
var resetGame = function () {
    resetBtn.innerText = "Reset Game";
    turn = 0;
    counter = 0;
    toggleBoxes(false);
    msgC.classList.add("hide");
};
//-----------------------------------------------------------------------------------------//
//Checking winner by comparing combinations with the winning Conditions.
var checkWinner = function () {
    for (var _i = 0, winC_1 = winC; _i < winC_1.length; _i++) {
        var c = winC_1[_i];
        var p1 = boxes[c[0]].innerText;
        var p2 = boxes[c[1]].innerText;
        var p3 = boxes[c[2]].innerText;
        if (p1 != "" && p2 != "" && p3 != "") {
            if (p1 == p2 && p2 == p3 && p3 == p1) {
                toggleBoxes(true);
                resetBtn.innerText = "New Game";
                if (showWinner(p1)) {
                    return true;
                }
                ;
            }
        }
    }
};
//-----------------------------------------------------------------------------------------//
//Displays winner.
var showWinner = function (winner) {
    var wStr = "Winner is Player" + winner;
    msg.innerText = wStr;
    msgC.classList.remove("hide");
    return true;
};
//-----------------------------------------------------------------------------------------//
//Toggles boxes enable or disabled.
var toggleBoxes = function (op) {
    for (var _i = 0, boxes_1 = boxes; _i < boxes_1.length; _i++) {
        var box = boxes_1[_i];
        box.disabled = op;
        if (op == false) {
            box.innerText = "";
        }
    }
};
//-----------------------------------------------------------------------------------------//
boxes.forEach(function (box) {
    box.addEventListener("click", function () {
        if (turn === 0) {
            box.innerText = "X";
            turn += 1;
        }
        else {
            box.innerText = "O";
            turn -= 1;
        }
        counter += 1;
        box.disabled = true;
        checkCount();
    });
});
var gameOver = function () {
    var wStr = "Game Over!!";
    msg.innerText = wStr;
    msgC.classList.remove("hide");
    resetBtn.innerText = "New Game";
};
var checkCount = function () {
    if (checkWinner()) {
        return true;
    }
    else if (counter >= 9) {
        gameOver();
    }
};
//-----------------------------------------------------------------------------------------//
resetBtn.addEventListener("click", resetGame);
//-----------------------------------------------------------------------------------------//
