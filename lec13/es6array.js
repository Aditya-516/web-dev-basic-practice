// Foreach
let num = [1,2,3,4,5];
// console.log("Numbers : " + num );

// num.forEach(n => console.log(n));

// map

let squared = num.map(n => n*n);
console.log("squared : "+squared);

// fiter 

let even = num.filter(n => n%2===0);
console.log("Even : "+even);

// find 

let result = num.find( n => n<3);
console.log("result : "+result);

// splice 

let arr = [10,20,30,40,50,60];
arr.splice(1,1);
console.log("Splice : ",arr)

// arr.splice(1,5,90,90,90,90,90)
// console.log(arr)

// slice 

let part = arr.slice(0,2);
console.log("Part : ",part);

// sort 

let num1 = [12,23,34,4123,123,135,54,5687,13]
num1.sort((a,b)=> a-b);
console.log(num1)

// reduce 
// syntax : Array.reduce((accumulator,currentValue))
let sum = num.reduce((acc,n) =>acc+n,0)
console.log("Sum : "+sum);


// example calculate total price of item in shopping cart 

let cart = [200,300,400,700,500,399,792];
let total = cart.reduce((a,b)=>a+b,0);
console.log("Total Price : ",total);

const prompt = require("prompt-sync")();

let username ;
let passward ;
let username_databse = "Aditya";
let passward_database = "1222";
for(let i=1;i<=3;i++){
    username = prompt("Enter your Username : ");
    
    if(username!== username_databse){
        console.log("Incorrect Usename ! Please enter valid Username ...");
        if(i===3){
            console.log("Account locked for 15 seconds ");
            let seconds = 15 ;
            let timer = setInterval(()=>{
                console.log(` Try Again in ${seconds} Seconds ` );
                seconds--;
                
                if(seconds<=0){
                    clearInterval(timer);
                    console.log(`You Can Try Now .`)
                }
            },1000)
        }
        continue;
    }
    passward = prompt("Enter your Passward : ");
    if (passward!==passward_database){
        console.log("Incorrect Passward ! Please enter correct Passward ...");
        if(i===3){
            let seconds = 15 ;
            console.log(`Account locked for ${seconds} seconds `);
            let timer = setInterval(()=>{
                console.log(` Try Again in ${seconds} Seconds ` );
                seconds--;
                
                if(seconds<=0){ 
                    clearInterval(timer);
                    console.log(`You Can Try Now .`)
                }
            },1000)
        }
        continue;
    }
    
    console.log("Login Succesful")
    break;

}
