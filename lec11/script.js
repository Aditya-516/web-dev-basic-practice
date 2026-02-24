
const prompt = require("prompt-sync")({ sigint: true });

let num = prompt("Enter the num : ");
// let i = 500 ;
// for(let j=1;j<=num;j++){
//     console.log(i);
//     i -=(j*j*j);
// }

// pattern printing 

// for(let i=1;i<=num;i++){
//     console.log("*");      //printing 5 starts 
// }  

// for(let i = 1;i<=num;i++){
//     let star = "";
//     for(let j=1;j<=i;j++){
//         star+=" *"                           // triangle 
//     }
//     console.log(star);
// }

// for(let i = num ;i>=1;i--){
//     let star = "" ;
//     for(let j = 1 ;j<=i;j++){              // reverse triangle 
//         star+=" *";
//     }
//     console.log(star);
// }



// for(let i=1;i<=num;i++){
//     let star = "";
//     console.log(" *");
//     for(let j=1;j<=i;j++){
//         star+=" *";
//     }

//     console.log(star)
// }



// for(let i=1;i<=num;i++){
//     let star = "";
//     for(let j=1;j<=num-i;j++){
//         star+=" "
//     }
//     for(let k=1;k<=i;k++){       //pyramid
//         star+="* ";
//     }
//     console.log(star)
// }

for(let i=num;i>=1;i--){
    let star = "";
    for(let j=1;j<=num-i;j++){
        star+=" "
    }                             
    for(let k=1;k<=i;k++){    //reverse pyramid 
        star+="* ";
    }
    console.log(star)
}