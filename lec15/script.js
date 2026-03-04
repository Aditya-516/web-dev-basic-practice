let name = "aditya " ;
// console.log(name);
console.log(`Hello ${name}`);

console.log(`Length of String : ${name.length}`);

console.log(name[0]);
console.log(name[1]);
console.log(name[2]);
console.log(name[3]);
console.log(name[4]);
console.log(name[5]);
console.log(name[6]);

console.log(`name.toUpperCase : ${name.toUpperCase()}`);
console.log(`name.toLowerCase : ${name.toLowerCase()}`);


let str = "            Hello world      ";
console.log(str)
console.log(str.trim())


console.log("JAVASCRIPT".substring(0,4));
console.log("JAVASCRIPT".indexOf("SCRIPT"));
console.log("JAVASCRIPT".slice(0,2));

// replace
console.log(str.replace("Hello","java"));


// Split()
let data = "Apple,Banana,Orange";
console.log(data.split("_"))

// Char at()
console.log(data.charAt(0))
console.log(data.charAt(1))

// Startswith EndsWith
console.log(data.startsWith("Apple"))
console.log(data.endsWith("Orange"))

// Concta
let str1 = "Fox"
let str2 = "Megan"
console.log(str1.concat(str2))

// Escape sequence characters
console.log("He said \" Hello World\" ")
console.log("Hello \n World ")
console.log("Hello \t World ")

// String Comparision
let str3 = 'Mango';
let str4 = 'Mango';
console.log(str3===str4);

