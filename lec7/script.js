// for(let i=1;i<11;i++){
//     console.log(11*i)
// }
// for(let i=1;i<=50;i++){
//     console.log(i*i)
// }
// for(let i=1;i<=50;i++){
//     console.log(Math.sqrt(i))
// }
// let count = 10 ;
// let i = 0 ;
// let sum = 0;
// while(count!=0){
//     if(i%2==0){
//         sum += i ;
//         count--;
//     }
//     i++ ;
// }
// console.log(sum)

// let count = 10 ;
// let i = 0 ;
// let sum = 0;
// while(count!=0){
//     if(i%2!=0){
//         sum += i ;
//         count--;
//     }
//     i++ ;
// }
// console.log(sum)

function prime(n){
    for(let i=2 ;i<n/2;i++){
        if(n%i==0){
            return false;
            break ;
        }
        
    }
    return true ;
}

let a = prime(7);
console.log(a)