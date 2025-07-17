let playerscore = 0;
let compscore = 0;

let choices = document.querySelectorAll(".btn");

let compchoice = () => {
  let randno = Math.floor(Math.random() * 100);

  if (randno <= 33) {
    return "rock";
  } else if (randno <= 66) {
    return "paper";
  } else {
    return "scissor";
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    let clicked = choice.getAttribute("id");
    let x = compchoice();
    console.log("Player: ", clicked);
    console.log("Computer: ", x);

    const msg = document.querySelector(".winner");
    msg.style.visibility = "visible"

    if (clicked === x) {
      console.log("Draw");
      msg.innerText = "Match Draw! Try Again..";
      // alert("Draw");
    } else {
      let userwin = true;

      if (clicked === "rock") {
        userwin = x === "paper" ? false : true;
      } else if (clicked === "paper") {
        userwin = x === "scissor" ? false : true;
      } else {
        userwin = x === "rock" ? false : true;
      }
      const msg = document.querySelector(".winner");
      if (userwin) {
        playerscore++;
        msg.innerText = "Congrats! You Won...";
        document.querySelector(".p1").innerText = playerscore;
      } else {
        compscore++;
        msg.innerText = "Ohh! You Lose..";
        document.querySelector(".p2").innerText = compscore;
      }
    }
  });
});
