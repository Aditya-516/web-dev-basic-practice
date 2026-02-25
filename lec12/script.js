// console.log("Hello");


// let arr = [12,23,34,"Aditya","Sahil"];


// console.log(arr)
// console.log(arr.toString());

// arr.shift()
// console.log(arr)

// arr.unshift(90);
// console.log(arr)

// console.log(arr.join("+"));

// arr.pop();
// console.log(arr)

// arr.push("Tejas");
// console.log(arr)

// delete arr[1];
// console.log(arr)

// let arr2 = ["RAHUL","MALI"];
// let arr3 = ["YASH","MORE"];
// console.log(arr.concat(arr2,arr3));

// console.log(arr.slice(2));


// arr.splice(1,4,"Abhijeet","Daya","Dr.Salunke","Dr.Sarika");
// console.log(arr)

// console.log(arr.reverse());

let num = [45,78,90,34,67];
console.log("Original Array : "+num);

num.push(85);
console.log("After Push : "+num);

num.pop();
console.log("After Pop : "+num);

num.unshift(50);
console.log("After Unshift : "+num);

num.shift();
console.log("After Shift : "+num);

console.log("has 90 ? : "+num.includes(90));

console.log("Index OF 78 : "+num.indexOf(78));

console.log(num.slice(1,3));

num.splice(2,1,100);
console.log("After Splice : "+num)

// console.log("Doubled : ")
// for(let value of num){
//     console.log(value*2);
// }

console.log("Doubled : "+num.map(n=> n*2));


// let sum = 0 ;
// for(let value of num){
//     sum += value;
// }
// console.log("Total : "+sum);

console.log("Total;  "+num.reduce((total,value)=>total+value,0))

// for(let value of num){
//     if(value>80){
//         console.log("First : "+value);
//         break;
//     }
// }

console.log("First > 80 : "+num.filter(n => n>80))

console.log("Sorted Array : "+num.sort((a,b)=>a-b));

console.log("Array Reversed : "+num.reverse());

