w// using the while loop
// let i = 1;
// while(i<11){
//     console.log(i);
//     i++;
// }


// using the do while loop 
// do{
//     console.log(i);
//     i++;
// }
// while(i<=20);


//  Printitng the even numbers
// let j = 0 ;
// while(j<20){
//     console.log(j);
//     j+=2;
    
// }
 
// Addition of first 10 num 
let sum = 0 ;
let l = 0 ;
while(l<=10){
    sum = sum + l ;
    l++
} 
console.log("Addition : "+sum)


// reverse the num 
let num = 12345 ;
let rev = 0 ;
while(num>0){
    rev = rev*10 + num %10 ;
    num =  Math.floor(num/10);
}
console.log("Reverse of num : "+rev)