// let tbtn = document.createElement("button");
// tbtn.innerText = "Change Mode";

// let parent = document.querySelector("body");

// tbtn.insertBefore (
//     tbtn, parent.firstChild
// )

// tbtn.style.color= "green";

let cmode = document.getElementById("btn");
let mode = "light";

cmode.addEventListener("click", () => {
  if (mode === "light") {
    document.querySelector("body").style.backgroundColor = "black";
    mode = "dark";
  }else{
    document.querySelector("body").style.backgroundColor = "white";
    mode = "light";
  }
});
