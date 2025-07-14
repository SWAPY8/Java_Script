// //Functions definition and calling
// //sum function
// let sum;
// function sumfun(a, b, c){
// sum = c + a + b;
// console.log(sum);
// return sum;
// }

// // console.log()
// sumfun(6, 7, 5);
// // console.log(sum);
// sumfun(64, 57, 75);

//Arrow function

// const mult = (x, y, z) => {

//     return  (x * y) / z;

// }
// mult(8, 554, 6);

//calculate vowels in the string using function

// function countVowels(str) {
//   let count = 0;
//   for (let val of str) {
//     if (
//       val === "a" ||
//       val === "e" ||
//       val === "i" ||
//       val === "o" ||
//       val === "u"
//     ) {
//       count++;
//     }
//   }
//   console.log("count: ", count)

// }
// countVowels("Striiiiing");

// //arrow function

// let count = 0;
// const countfunction = (str) => {
//   for (let i = 0; i < str.length; i++) {
//     if (
//       str[i] === "a" ||
//       str[i] === "e" ||
//       str[i] === "i" ||
//       str[i] === "o" ||
//       str[i] === "u"
//     ) {
//       count++;
//     }
//   }
//   console.log("count: ", count);
//   alert("count: " + count)
// };

// countfunction("aeiou");

//for each loop(higher order function - functions that takes other function as a arguments)

// let NumArray = [2, 34, 76, 99, 44];

// NumArray.forEach((val) => {
//   console.log(val * val);
// //   NumArray.splice()
// });
// alert(NumArray);

//filter 
//calculate marks which r 90+ using filter

// let marks = [66, 98, 99, 89,90,100];

// let toppers = marks.filter((mark) => {
//     return mark > 90;
// })

// console.log(toppers);

//calculate sum and product of 1 to user input 'n' using reduce method

let userInp = prompt("Enter N to Calculate Sum and Product : ");

let arr = [];

for(let i = 1; i <= userInp; i++){
    arr[i-1] = i;
}
console.log(arr);

//reduce for sum

let sum = arr.reduce((prev, curr) =>{
    return prev + curr;
})
console.log("Sum = ", sum)

//reduce for product
let prod = arr.reduce((prev, curr) =>{
    return prev * curr;
})
console.log("Prod = ", prod)



