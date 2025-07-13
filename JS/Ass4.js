// let userfirstname = prompt("First Name : ");
// let userlastname = prompt("Last Name : ");

// let FullName = userfirstname + userlastname;

// let len = FullName.length;

// alert(`@${FullName}${len}`)

//average of marks of array

// let marks = [78, 87, 99, 100, 66, 14];
// let total=0;

// let len = marks.length;

// for(let val of marks){
    
//     total += val;
//     console.log(val);

  
// }
//   alert(`Average marks of class is ${total/len}`)


//apply offer of 10% to every price using for off, for loop

//  let prices = [799, 77, 200, 900, 5555];
// let offer;
// let i = 0;
// for(let el of prices){
//   offer = el / 10; 
//   prices[i]-=offer;
//   i++;
//   // console.log(prices);
// }

// console.log(prices);

// for loop

// for(let i = 0; i < prices.length; i++){
//   let offer = prices[i]/10;
//   prices[i] -= offer;

// }
// console.log(prices);

//array methods

let comp = ["Google", "Microsoft", "Wipro", "Uber", "Blueberge"];

console.log(comp);

comp.shift();

comp.splice(2, 1,  "Ola");

comp.push("Tata");

console.log(comp);

