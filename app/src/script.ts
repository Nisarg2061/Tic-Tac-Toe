//-----------------------------------------------------------------------------------------//
const boxes = document.querySelectorAll(".box");
const resetBtn = document.querySelector("#resetBtn");
const msgC = document.querySelector(".hide");
const msg = document.querySelector("#msg");
//-----------------------------------------------------------------------------------------//
//0 indicates player X turn and 1 indicates player O turn.
let turn = 0;
let counter = 0;
//-----------------------------------------------------------------------------------------//
//Winning Conditions
const winC = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
]
//-----------------------------------------------------------------------------------------//
//Resets the game without reloading.
const resetGame = () => {
  resetBtn.innerText = "Reset Game"
  turn = 0;
  counter = 0;
  toggleBoxes(false);
  msgC.classList.add("hide");
}
//-----------------------------------------------------------------------------------------//
//Checking winner by comparing combinations with the winning Conditions.
const checkWinner = () => {
 for (const c of winC) {
   let p1 = boxes[c[0]].innerText;
   let p2 = boxes[c[1]].innerText;
   let p3 = boxes[c[2]].innerText;
   if (p1 != "" && p2 != "" && p3 != "") {
     if (p1 == p2 && p2 == p3 && p3 == p1) {
       toggleBoxes(true);
       resetBtn.innerText = "New Game";
       if(showWinner(p1)) {
         return true;
       };
     }
   }
 } 
}
//-----------------------------------------------------------------------------------------//
//Displays winner.
const showWinner = (winner) => {
    let wStr = "Winner is Player" + winner;
    msg.innerText = wStr;
    msgC.classList.remove("hide");
    return true;
}
//-----------------------------------------------------------------------------------------//
//Toggles boxes enable or disabled.
const toggleBoxes = (op) => {
  for (const box of boxes) {
    box.disabled = op;
    if (op == false) {
      box.innerText = "";
    }
  }
}
//-----------------------------------------------------------------------------------------//
boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turn === 0) {
       box.innerText = "X";
       turn += 1;
    } else {
      box.innerText = "O";
      turn -= 1;
    }
    counter += 1;
    box.disabled = true;
    checkCount();
  });
});

const gameOver = () => {
    let wStr = "Game Over!!";
    msg.innerText = wStr;
    msgC.classList.remove("hide");
    resetBtn.innerText = "New Game";
}
const checkCount = () => {
  if (checkWinner()) {
    return true;
  }else if (counter >= 9) {
    gameOver();
  }
}
//-----------------------------------------------------------------------------------------//
resetBtn.addEventListener("click", resetGame);
//-----------------------------------------------------------------------------------------//
