const promt = require("prompt-sync")()

// let age = promt("Enter your Age : ")

// if(age>=18){
//     console.log("you Can Vote ");
// }
// else{
//     console.log("You Cannot Vote ")
// }

let year = promt("Enter the Year : ")

if(year%4==0 && year%100!=0 || year%400==0){
    console.log(year+" Is a leap year ")
}
else{
    console.log(year+" Not A LEAP year ")
}