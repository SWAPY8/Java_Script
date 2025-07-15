let boxes = document.querySelectorAll(".box");
let turnp1 = true;

let winpatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turnp1 === true) {
      box.innerText = "X";
      turnp1 = false;
    } else {
      box.innerText = "O";
      turnp1 = true;
    }
    box.disabled = true;
    winner();
  });
});

let winner = () => {
  for (let pat of winpatterns) {
    let pos1val = boxes[pat[0]].innerText;
    let pos2val = boxes[pat[1]].innerText;
    let pos3val = boxes[pat[2]].innerText;
    if (pos1val != "" && pos2val != "" && pos3val != "") {
      if (pos1val === pos2val && pos2val === pos3val) {
        document.querySelector(".winner").innerText =
          "winner " + pos1val + "," + " Winner Winnner, Chicken Dinner!!!!!!";

        gameover();
      } else {
      }
    }
  }
};

let gameover = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};
let playagain = document.querySelector(".resetgame");

let reset = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = "";
    document.querySelector(".winner").innerText = "";
  }
};

playagain.addEventListener("click", () => {
  reset();
});
