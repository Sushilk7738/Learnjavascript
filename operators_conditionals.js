// This code prints developer name
// console.log("Sushil");


/*This is code that prints
an output on website console */

// console.log("I'm learning javascript operators and conditionals concept.")


// operators in js:-
// Used to perform some operations on data



// Arithmetic Operators:-
// let a = 5;
// let b = 2;

// console.log("a =",a ,"& b =", b,);

// console.log("a + b =", a+b);
// console.log("a - b =", a-b);
// console.log("a x b =", a*b);
// console.log("a / b =", a/b);
// console.log("a % b =", a%b);       // modulus :- prints reminder of division
// console.log("a ** b=", a**b);       


// Unary operators:-

// Increment:-  a++ == a+1
// Decrement:-  a-- == a-1

// let a = 5;
// let b = 2;

// console.log("a =",a ,"& b =", b,);

// a++;
// console.log("a =", a);

// a--;
// console.log("a =", a);


// a++ (post increment) ,  a-- (post decrement)
// ++a (pre increment),   --a (pre decrement)



// Assignment Operators:-
// let a = 5;
// let b = 2;

// a += 4;  // a = a + 4
// console.log('a = ',a);

// a -= 4;  // a = a - 4
// console.log('a = ',a);

// a *= 4;  // a = a * 4
// console.log('a = ',a);


// a /= 4;  // a = a / 4
// console.log('a = ',a);

// a %= 4;  // a = a % 4
// console.log('a = ',a);

// a **= 4;  // a = a ** 4
// console.log('a = ',a);


// Comparison Operators: -

// let a = 5;
// let b = 2;

// console.log("a =",a ,"& b =", b,);

// console.log('a == b', a == b);
// console.log('a != b', a != b);


// let a = 5;
// let b = '5';

// console.log("a == b", a==b);    //it returns true 

// console.log('a === b', a===b);   //it checks datatypes also
// console.log('a !== b', a!==b);   //it checks datatypes also


// let a = 5;
// let b = 3;

// console.log('a > b', a>b);
// console.log('a >= b', a>=b);

// console.log('a < b', a<b);
// console.log('a <= b', a<=b);



// Logical Operators:-

// Logical AND && 
// Logical OR ||
// Logical NOT !

// let a = 6;
// let b = 5;

// let cond1 = a > b;   //true
// let cond2 = a === 6;   //true


// console.log('cond1 && cond2 = ', cond1 && cond2);
// console.log('cond1 || cond2 = ', cond1 || cond2);

// console.log('!(a < b) = ', !(a < b));



// Conditional statements:-

// let age = Number(prompt("Enter your age: "))

// if (age >= 18) {
//     console.log("You can vote!");
// }

// if (age < 18) {
//     console.log("You CANNOT vote!");

// }





// if block
// let mode = prompt("Enter mode you want to apply: (light/dark)")

// let color;

// if (mode === 'dark') {
//     console.log("Dark mode activated");
//     color = 'black';
// }

// if (mode === 'light') {
//     console.log("Light mode activated");
//     color = 'light';
// }






// let mode = prompt("Enter mode you want to apply: (light/dark)")

// let color;

// if (mode === 'dark') {
//     console.log("Dark mode activated");
//     color = 'black';
// }

// else {
//     console.log("Light mode activated");
//     color = 'light';
// }



// let num = Number(prompt("Enter your number: "))

// if (num % 2 == 0) {
//     console.log(num,"Is even number");
// }
// else {
//     console.log(num, "Is Odd Number!");
// }


// let mode = prompt("Enter mode: ")
// let color;

// if (mode === "dark") {
//     color = 'black';
// }
// else if (mode == "blue") {
//     color = "blue";
// }

// else if (mode == "yellow") {
//     color = "yellow";
// }
// else {
//     color = "white";
// }


// console.log(color);


// if (mode === 'dark') console.log(mode);


// Ternary Operators:-
// a ? b : c

// age = Number(prompt('Enter age: '))

// let result = age >= 18 ? "adult" : "not adult"
// console.log(result)


// age >= 18 ? console.log('adult') : console.log('not adult')



// problem 1:-

// get user input and check it number is multiple of 5 or not?

// let num = Number(prompt("Enter your number: "))

// if (num % 5 == 0){
//     console.log(num ,"is multiple of 5");
// } else {
//     console.log(num, "is not multiple of 5");
    
// }


// grading system:-


let marks = Number(prompt("Enter your marks (0-100)"))
let grade;

if (marks <=100 && marks >=90) {
    grade = "O+"
}

else if (marks<=89 && marks >=80) {
    grade = "A"
}
else if (marks<=79 && marks >=70) {
    grade = "B+"
}
else if (marks<=69 && marks >=60) {
    grade = "B"
}

else if (marks<=59 && marks >=45) {
    grade = "C"
}
else if (marks<=44 && marks >=35) {
    grade = "D"
}

else {
    grade = "F"
    console.log("You failed!");
    
}
console.log("According to your marks, you achived grade: ", grade);















