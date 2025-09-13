// there are two types of memory in javascript
// stack memory and heap memory


// *** for primitive datatype stack memory use ***
// *** for non-primitive datatype heap memory use ***

// let's start with primitive datatype it uses stack 
// for ex:-

// let myName = "Sushil"

// let updName = myName

// updName = "Sheetal"

// console.log(updName);
// console.log(myName);


// Now with non-primitive datatype it uses heap memory
// it heap memory it directly references to value it didnt creates references so if we make change in value by other references
// it originally changes real value


let userOne = {
    email : 'user@google.com',
    upi : 'user@ybl'
}

let userTwo = userOne

userTwo.email = 'Sushil@google.com'

console.log(userOne);
console.log(userTwo);
