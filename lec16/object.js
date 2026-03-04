let student ={
    name:"Aditya",
    age:21,
    marks:70 
};

console.log(student.name);
console.log(student["name"]);
// dot for static keys , bracket for dynamic keys 
console.log(student)

student.class = "A";
console.log(student)

delete student.class;
console.log(student)
