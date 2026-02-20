const prompt = require("prompt-sync")()
// function sum(a,b){
//     return a+b ;
// }

// console.log("Sum : ",sum(12,23));
// function square(a){
//     return a*a;
// }


// let a = prompt("Enter the num :")
// a = Number.parseInt(a);

// console.log("Square of "+ a +" : " + square(a))

// function checkEvenOdd(a){
//     if(a%2){
//         return("Even number ")
//     }
//     else{
//         return("Odd Number")
//     }
// }

// let num = prompt("Enter the num : ")
// console.log(checkEvenOdd(a))

// function IsPrime(a){
//     if(a<=1){
//         return false;
//     }
//     for(let i=2;i<=Math.sqrt(a);i++){
//         if(a%i==0){
//             return false;
//         }
//     }
//     return true
// }

// let c = prompt("Enter the num : ")
// console.log(IsPrime(c)?console.log(c," is a prime number"):console.log("Not a prime number"))

// const mult = function(a,b){
//     return a*b;
// }

// console.log(mult(12,2));

// const greet = () => {
//     return "atmkbfjabplmjatgmlnddy";
// }
// console.log("greet : "+greet())

// function welcome(name="Aditya"){
//     console.log("Welcome "+name)
// }

// welcome();
// welcome("vikas");

// function login(username,password){
//     if(username==="admin" && password==="password"){
//         console.log("Login Successfull");
//     }
//     else{
//         console.log("Failed Login")
//     }
// }

// login("admin","password")
// login("user","1234")
// login("admin","1234")

// function greet(name,callback){
//     console.log("Hello "+ name);
//     callback();
// }
// function bye(){
//     console.log("Goodbye");
// }
// greet("aditya",bye)
  
// function orderFood(item,callback){
//     console.log("Order Placed for : "+item)
//     setTimeout(()=>{
//         console.log(item + " is Ready")
//         callback();
//     },2000)
// }

// orderFood("Pizza",function(){
//     console.log("enjoy your meal")
// });

let age = prompt("Enter your age : ")
age = Number.parseInt(age)
function isApplicable(age){
    
    if(age>=18 && age<=60){
        return "You are Eligible for this job ";
    }
    else{
        return "You are not Eligible for this job"
    }
}

console.log(isApplicable(age))