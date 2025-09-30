// const student = {
//     fullName: "Sushil Kamble",
//     marks: 96.64,
//     printMarks: function () {
//         console.log("Marks:", this.marks);
//     }
// }

// const employee = {
//     calcTax() {
//         console.log('tax rate is 10%');

//     },
// we can write this function as below
// calcTax1 : function (){
//     console.log('tax rate is 5%');

// }
// }

// const karanArjun = {
//     salary : 50000,
//     calcTax() {
//         console.log('Your salary is high so tax rate is 15%');

//     }
// };

// karanArjun.__proto__ = employee;

// console.log(karanArjun);


// Classes in javascript:-
// classes in js is program-code template for creating objects and those objects will have some states(variables)
// & some behaviours(methods) inside it.

class Car {

    constructor(brand, mileage) {
        console.log('Creating new objects.');
        this.brand = brand;
        this.mileage = mileage;
    }
    start() {
        console.log('The car has automatic start feature!');
    }

    stop() {
        console.log('The car has emergency stop feature!');

    }

    // setBrand(brand){
    //     this.brandName = brand;
    // }
}

// let MercedezBenz = new Car("benz", 10)
// MercedezBenz.setBrand('Mercedez')
// console.log(MercedezBenz)

// let Audi = new Car('audi', 20)
// Audi.setBrand('Audi')
// console.log(Audi)

// Audi.start()
// MercedezBenz.start()


// Inheritance in js:-
// Inheritance basically passing down properties and methods from parent class to child class.

// class Parent {
//     hello() {
//         console.log('You are accesing props from parent class');
//     }
// }

// class Child extends Parent {}

// let obj = new Child()


// class Person {

//     constructor(species) {
//         this.species = 'Home sapiens'
//     }
//     eat() {
//         console.log('eat');
//     }
//     sleep() {
//         console.log('sleep');

//     }
//     work() {
//         console.log('Do nothing');

//     }
// }

// class Engineer extends Person {
//     work() {
//         console.log("We work on solving problems and build something extraordinary.");

//     }
// }

// class Doctor extends Person {
//     work() {
//         console.log('we are doctors, we treat people regarding there health help them to cure disease.');

//     }
// }

// If child & parent has same methods child's method will be used.
// let Sushil = new Engineer
// Sushil.work()

// let sheetal = new Doctor
// sheetal.work()


// Super keyword in js:-
// the super keyword is used to call parent class constructor to access the parent's class properties and methods.


// class Teacher {
//     constructor(name) {
//         this.mentor = "Performs various activities"
//         this.name = name;
//     }

//     teach() {
//         console.log('Teaches various subjects');

//     }

// }

// class EnglishTeacher extends Teacher {
//     constructor(name) {
//         super(name);  // to invoke parent class constructor.
//     }
//     teach() {
//         console.log('Teaches english subject');
//     }
// }

// class MathTeacher extends Teacher {
//     constructor( name) {
//         super(name)
//     }
//     teach() {
//         console.log('teaches maths subject with fun');
//     }
// }

// let engobj = new EnglishTeacher('Shubhangi sultane')
// let mathobj = new EnglishTeacher('borse')

// console.log(engobj.qualifications)
// console.log(engobj.name)
// console.log(mathobj.qualifications)
// console.log(mathobj.name)





// Q.1.You are creating a website for your college. create a class user with 2 properties, name and email
// it also has a method called viewdata() that allow user to view website data


let data = 'Confidential Info'

class User {
    constructor (name, email){
        this.name = name;
        this.email = email;
    }

    viewData(){
        console.log('Data',data);
    }    
}

// create a new class of admin which inherits user class and add method called edit data to admin which allows edit
// user data 


class Admin extends User{
    constructor (name, email){
        super(name, email)
    }
    edit_info (){
        data = 'Some new values'
    }
}




let stu1 = new User("Sushil", "sush@77gmail.com")
let stu2 = new User('Pooja', 'Pooja@143gmail.com')

let admin = new Admin("admin", "admin@elclassico.com")

admin.name






