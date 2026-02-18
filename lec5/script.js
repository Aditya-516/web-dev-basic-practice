// let name = prompt("Enter your Name : ")
// console.log("welcome " +name)

// let a = 23 ;
// let b = 34 ;

// console.log("Addition : ",(a+b))
// console.log("Subtraction : ",(a-b))
// console.log("Multiplication : ",(a*b))
// console.log("Division : ",(a/b))
// console.log("Modulus : ",(a%b))
// console.log("Power : ",(a**b))

// let age = prompt("Enter your AGE : ")
// age = Number.parseInt(age);

// if(age>=18){
//     alert("You can Drive")
// }
// else{
//     alert("You cannot drive ")
// }

function updateClock(){
  const now = new Date();

  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();

  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  document.getElementById("time").innerText =
    `${hours}:${minutes}:${seconds}`;
}

setInterval(updateClock, 1000);
updateClock();

