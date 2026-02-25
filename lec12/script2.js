let Arr = [] ;

const prompt =require("prompt-sync")();

function addNum(num){
    if(num%2==0){
        Arr.push(num);
        console.log("Number Added Into the Array ");
        console.log("Updated Array : "+Arr)
    }
    else{
        console.log("Invalid Number ! ");
    }
}

while(true){

    let num = prompt("Enter the num : ");
    num = Number.parseInt(num);
    addNum(num);

}