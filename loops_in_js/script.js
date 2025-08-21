// console.log("CodeWithSushil");

// for (let i = 1; i <= 5; i++) {
//     console.log("LearnJSWithSushil");
// }
// console.log("Loops has ended");


// calculate sum 1 to 100

// let sum = 0;
// let n = 100
// for (i=1; i<= n; i++) {
//     sum = sum + i;
// }
// console.log("sum=", sum);
// console.log('loops ended');


// for (let i = 1; i <= 5; i++) {
//     console.log('i = ', i);
// }



// let i = 1;

// while (i <=5) {
//     console.log('i = ', i);
//     i++;
// }


// let i = 1;
// while (i <=10) {
//     console.log('CodeWithSushil');
//     i++
// }


// do-while loop:-

// let i = 20;
// do {
//     console.log("CodeWithSush");
//     i++
// }
// while (i <= 10);


// for-of loop use this only in string and array data type

// let str = prompt("Enter input: ")
// let size = 0;
// for(let i of str) {
//     console.log('i =', i);
//     size++;
// }

// console.log('This size of', str ,"is", size);


// for-in loop use this only on object and Array.

// let student = {
//     name   : "Sushil",
//     age    : 20,
//     cgpa   : 7.45, 
//     isPass : true
// };

// for (let key in student) {
//     console.log(key,'=',student[key]);
// }





// print 1 to 100 even number using loops

// for (let i=0; i <=100; i++ ) {
//     if (i % 2 == 0){
//         console.log(i);

//     }
// }

// let i = 0;

// while (i <= 100) {
//     if (i % 2 ===0) {
//         console.log('num =',i);
//     }
//     i++;
// }




/*
create a game where you start with any random game Number. ask the user to keep
guessing the game number until the user enters correct value.
*/


// let guess_number = Number(prompt("Enter a number: "))

// let lucky_no = 7;

// while (guess_number != lucky_no){
//     guess_number = Number(prompt("Wrong guess! try again.."))
// }

// console.log("Congratulations!!! you guessed right.");


// sum of first 1 to 10
// sum = 0
// for (let i = 0; i <= 10; i++){
//     sum = sum + i;
    
// }
// console.log('sum = ', sum);


// multiplication table

// let num = Number(prompt("Enter number you want multiplication table: "));
// let i = 1;

// while (i <=10) {
//     console.log(`${num} x ${i} = ${num * i}`);
//     i++;
// }

// for (let i=1; i<=10; i++) {
//     console.log(`${num} x ${i} = ${num*i}`);
// }


// Reverse counting
// → Print numbers from 20 down to 1.


// let num = Number(prompt("Enter number you want multiplication table: "));

// while (num >0) {
//     console.log("num =", num);
//     num--;
// }






// print factorial of number

// let num = Number(prompt("Enter number: "))
// fact = 1
// for (let i = 1; i <=num; i++){
    //     fact *= i
    // }
    
    // console.log(`Factorial of ${num} is ${fact}`);
    
// i = 1
// while (i <= num) {
//     fact *=i
//     i++;
// }
// console.log(`Factorial of ${num} is ${fact}`);












// Count digits of a number
// → Input: 9876 → Output: 4 digits.
// let n = Number(prompt("Enter number:"))
// let count = 0;

// while (n > 0){
//     n = Math.floor(n / 10);
//     count++;
// }

// console.log('count is:', count);




//sum of digit of a number:-

// let n = prompt("Enter number: ")

// let sum = 0;

// for (let i = 0; i< n.length; i++) {
//     sum += Number(n[i]); 
// }
// console.log('Sum of digits: ', sum);
