// const process = require("node:process");

// let name = process.argv[2];

// console.log("hELLO ",name)

const prompt = require("prompt-sync")()

// let name = prompt("Enter your name : ")
// console.log("Hello ",name)

// let n = prompt("Enter the num : ")
// console.log("n : ",n)

// n = parseInt(n);

// for(let i=1;i<=n;i++){
//     console.log(i)
// }

let num1 = prompt("Enter the num 1 : ")
num1 = parseInt(num1);
let num2 = prompt("Enter the num 2 : ")
num2 = parseInt(num2);

let op = prompt("Enter the operation : " )
switch(op){
    case "+" :
        console.log("Addition : ",num1+num2);
        break;
    case "-" :
        console.log("Suntraction : ",num1-num2);
        break;
    case "*" :
        console.log("Multiplication : ",num1*num2);
        break;
    case "/" :
        console.log("Division :  ",num1/num2);
        break;
    default:
        console.log("Enter valid operation from (+,-,/,*) : ")
}