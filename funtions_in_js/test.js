// console.log("Sushil Kamble".toUpperCase());


// a=  ["sushil"].push("Sheetal");
// console.log(a);

// name = prompt("Enter your name: ")

// function greet(name) {
//     console.log(`Hey hie ${name}, Good morning😊`);
//     console.log(`${name}, Today we are going to learn functions concept in javascript.`);
//     a = prompt('Are you excited? ')
//     if (a == 'Yes') {
//         console.log("So lets do this...😃");

//     } else {
//         console.log(`Kya developer banega re tu ${name} 😒`);

//     }
// }

// greet(name) 





// let x = Number(prompt("Enter number: "))
// let y = Number(prompt("Enter number: "))

// function sum(x, y) {
//     sum = x + y,
//     sub = x - y,
//     mul = x * y,
//     div = x / y,
//     fdiv = x // y

//     List = ['x + y =', sum, 'x - y = ', sub, 'x * y = ', mul, 'x / y =', div, 'x // y =', fdiv]
//     return List
// }

// a = sum(x, y)
// console.log(a);

// function parameters are the local variables we can access them in within function we cant access them outside of 
// function.


// const arrowSum = (a , b ) => {
//     console.log(a + b);
// }


// const arrowMul =(x, y) => {
//     console.log(x * y);
// }

// arrowMul(5, 4)



// const arrowdiv = (a, b) => {
//     console.log(a / b);
// }

// arrowdiv(5 ,4)


// const printhello = () => {
//     console.log('sushil');
// }

// printhello()


// we can write this also one liner
// const print = () => console.log("Sushil");

// print()





// create a function using the 'function' keyword that takes a string as an argument & returns the number of vowels in
// the string


// function countVowels(str) {
//     let vowels = 0;
//     for (const char of str) {
//         if (char === 'a' || char === "e" || char === 'i' || char === 'o' || char === "u") {
//             vowels++;

//         }
//     }
//     console.log(vowels);
// }

// countVowels("abc")





// create same with arrow function:- 

// const countVowels = (str) => {
//     let count = 0;
//     for (const char of str) {
//         if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u' ) {
//             count++;
//         }
//     }
//     return count;
// }

// str = prompt("Enter string: ")
// p =countVowels(str)
// console.log(p);





// forEach loop in arrays:-

// arr.foreach(callbackFunction)
// callbackFunction:- here it is a function to execute for each element in the array
// A callback is a function passed as an argument to another function

// let arr = ['pune', 'mumbai', 'bangalore'];

// arr.forEach(function printval(val){
//     console.log(val);
// });

// same as arrowfunc

// arr.forEach((val, idx, arr) => {
//     console.log(val.toLocaleUpperCase(), idx, arr);
// })



// for a given array of numbers print the square of each value using the foreach loop

// let a = [1,2,3,4,5, 88,99]

// a.forEach((val) =>{
//     console.log(val ** 2);
// });


// we can write call back function as :-

// let square =(num) => {
//     console.log(num * num);
// };

// a.forEach(square)


// Map function in javascript

// Its function same as foreach but foreach perform operations on array and returns same array whereas map function 
// returns new array we can also pass callback function.

// let nums = [10,20,98];

// let new_arr= nums.map((val) => {
//     return val**3;
// });

// console.log(new_arr);



// filter method:- create a new array of elements that give true for condition/filter

// let arr = [10,2,5,8,9,77,58];

// let new_arr = arr.filter((val) => {
//     return val%2 !==0;
// })

// console.log(new_arr);



// let arr = [1, 2, 3, 4]


// const op = arr.reduce((prev, curr) => {
//     return prev + curr;
// });

// console.log(op);


// find largest number using reduce

// const op = arr.reduce((prev, curr) =>{
//     return prev < curr ? prev : curr;
// });

// console.log(op);




// we are given array of marks of students filter out of the marks of students that scored 90.


// let arr = [86,88,99,98,91,85]

// let new_arr = arr.filter((val) => {
//     return val > 90;
// })

// console.log(new_arr);





// take a number n as input from user. create an array of numbers from 1 to n.
// use the reduce method to calculate sum of all numbers in the array
// also calculate product of all numbers in array.


// let n = prompt("Enter a number: ")

// let arr = [];

// for (i = 1; i <= n; i++) {
//     arr[i-1] = i;
// }

// console.log(arr);

// const p = arr.reduce((prev, curr)=> {
//     return prev + curr;
// })


// console.log("Sum",p);


// const s = arr.reduce((prev, curr)=> {
//     return prev * curr;
// })

// console.log("Product",s);


function saymyName() {

    console.log("S");
    console.log("U");
    console.log("S");
    console.log("H");
    console.log("I");
    console.log("L");
    console.log("========================");

}

// saymyName()

// let a = Number(prompt('Enter number'));
// let b = Number(prompt('Enter number'));

// function addTwoNumbers(a,b){
//     console.log("The addition is:",a + b);
// }

// const sum =addTwoNumbers(a,b)
// console.log(sum);



function addnos(a, b) {
    // let Result = a + b;
    // return Result;

    return a + b;

}

const result = addnos(5, 3);
// console.log('Result is: ', result);



// function loginUserMessage(username = "Mike") {
    // if (username === undefined) {
    //     console.log('Please enter your name.');
    //     return
    // } 
    
    // we can write this same as follows
//     if (!username){
//         console.log('Please enter your name.');
//         return
//     }
//     return `${username} just logged in.`
// }
// console.log(loginUserMessage("Sushil"))



function CalculateCartPrice(...nums) {
    return nums;
}
// console.log(CalculateCartPrice(100,200,300))


const user = {
    id : 7,
    user_name : "Sushil",
}

function handleObject(otherObject) {
    console.log(`Usename is ${otherObject.user_name} and your id is: '${otherObject.id}'`);
}

// handleObject(user)

// handleObject({
//     id : 121,
//     user_name: "Mike"
// })


// const myArray = [200,400,600,900]

// function printSecondValue(getArray) {
//     return getArray[1];
// }
// console.log(printSecondValue([200,500,600]));
