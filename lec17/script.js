class Person{
    constructor(name){
        this.name = name ;

    }
    display(){
        console.log(`Hello ${this.name}`);
    }
    setName(name){
        this.name = name ;
    }
    getName(){
        return this.name ;
    }
}

let p1 = new Person("Aditya");
let p2 = new Person("Rahul");
let p3 = new Person("Krishna");
// p1.display();
// p2.display();
// p3.display();

class Student{
    constructor(name,rollNo,address,age){
        this.name = name ;
        this.rollNo = rollNo ;
        this.address = address ;
        this.age = age ;
    }

    display(){
        console.log(`Name : ${this.name} `)
        console.log(`age : ${this.age}`)
        console.log(`rollNo : ${this.rollNo}`)
        console.log(`Address : ${this.address}`)
    }
}

let s1 = new Student("Aditya",48,"Manjari BK",21);
s1.display();
let s2 = new Student("Krishna",61,"Manjari BK",22);
s2.display();
let s3 = new Student("Aniket",21,"Manjari BK",23);
s3.display();
let s4 = new Student("Abhijit",46,"Manjari BK",63);
s4.display();