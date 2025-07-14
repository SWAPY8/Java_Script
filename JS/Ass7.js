// let tbtn = document.createElement("button");
// tbtn.innerText = "Change Mode";

// let parent = document.querySelector("body");

// tbtn.insertBefore (
//     tbtn, parent.firstChild 
// )

// tbtn.style.color= "green";

function changemode(){
    let screen = document.body;
    screen.style.backgroundColor = "black"

}

let cmode = document.getElementById("#btn");
let mode = "light";

cmode.addEventListener ("click", () => {
    if(mode === "light"){
        changemode();
    }
}
) 

