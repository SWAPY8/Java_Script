// Loops
//for loop

//calculate the sum of first n numbers
//  let sum = 0;
//  let n = prompt("Enter NO for N ");

//  for(let i = 1; i <= n; i++){
//    sum += i;
//  } 
//   alert("Sum Of Your Entered No is " + sum);
// find even no betn 1 to 100


// for(let i = 0; i <= 100; i++){
    
//        console.log(i); 
    
// }

// // let num = 100;
// for(let i = 0; i <= 100; i++){
//     if(i % 2 === 0){
//        console.log(i); 
//     }
// }

//random number guessing game

let RandomNumber = 55;
let num = parseInt(prompt("Guess The Number to Win 1Cr"));

while (num !== RandomNumber) {
  num = parseInt(prompt("Wrong guess! Try again to win 1Cr"));
}

alert("Congratulations! You won 1Cr!");

