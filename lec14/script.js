const prompt = require("prompt-sync")();
let index = prompt("Enter the No of Subjects : ");
index = Number.parseInt(index) ;

let marks = [] ;
for(let i = 0 ;i<index ;i++){
    let mark  = prompt(`Enter the marks for subject ${i+1} : `)
    marks.push(parseInt(mark));
} 
console.log("Marks Entered : ",marks);

let total = 0;
let failCount = 0 ;
let passCount = 0 ;
for(let i=0;i<marks.length;i++){
    total +=marks[i];

    if(marks[i]>=40){
        passCount++;
    }
    else{
        failCount++;
    }
}

let result ;
if(failCount === 0){
    result = "Passed" ;
}
else{
    result = "Failed" ;
}


let grade ;
let average = total/index ;
switch(true){
    case(average>=80):
        grade = "A";
        break ;
    
    case(average>=60):
        grade = "B";
        break ;
    case(average>=40):
        grade = "C";
        break ;
    default:
        grade = "D";
}
console.log(`Grade : ${grade}`)
console.log(`Result : ${result}`)
console.log(`Total Marks  : ${total}`);
console.log(`Fail Count : ${failCount}`);
console.log(`Pass Count  : ${passCount}`);
