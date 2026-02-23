// function fun() {
//   let i = 25;
//   let j = 1;
//   let num = 10;
//   while (num > 0) {
//     console.log(i);
//     i = i + j * j;
//     j++;
//     num--;
//   }
// }

// fun();

// const prompt = require("prompt-sync");


const prompt = require("prompt-sync")({ sigint: true });
// let num = prompt("Enter the NUM : ");
// num = Number.parseInt(num);
// function fun(num){
//     let i = 25 ;
//     let n1 = num ;
//     for(let j=1;j<=n1;j++){
//         console.log(i);
//         i +=(j*j);
//     }
// }
// fun(num);


// fibonacci series 
// let a = 0 ;
// let b = 1 ;

// let num = prompt("Enter the NUM : ");
// num = Number.parseInt(num);

// for(let i=0;i<num;i++){
//     console.log(a) ;
//     let next = a + b; 
//     a = b;
//     b = next;
// }


// Tribonnaci series

// let a = 0 ;
// let b = 1 ;
// let c = 1 ;

// let num = prompt("Enter the NUM : ");
// num = Number.parseInt(num);

// for(let i=0;i<num;i++){
//     console.log(a) ;
//     let next = a+b+c ; 
//     a = b ;
//     b = c ;
//     c = next ;
// }


// 
let num = Number.parseInt(prompt("Enter the NUM : "));
let i = 100;

for(let j = 1; j <= num; j++){
    console.log(i);
    i = i - (3 * j);
}

