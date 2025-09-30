const user = {
    username :'Sushil',
    price : 999,
    welcomeMessage: function(){
        console.log(`${this.username}, welcome to our website`);
        
        console.log(this);
    }
    
};

// user.welcomeMessage()

// user.username ="Pooja" 
// user.welcomeMessage()


// console.log(this);

// function chai(){
//     let username = "Sushil"
//     console.log(this.username);
// }
// chai()


// const chai =function chai(){
//     let username = "Sushil"
//     console.log(this.username);
// }
// chai()    //this also returns undefined.

// const laddoo = () =>{
//     let username = "Aakansha"
//     console.log(this.username);
// }
// laddoo()


// basic arrow function:-
// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// console.log(addTwo(5,2));


// arrow function with implicit return:-
// const addTwo = (n1, n2) => n1 + n2

// console.log(addTwo(7,3));



// we can write this also same as :-

// const addTwo =(num1, num2) => (num1 + num2)

// console.log(addTwo(5,5));




// const addTwo = (num1, num2) => ({username:"Sushil"})
// console.log(addTwo());

// Named IIFE:-
// Immediately Invoked Function Expressions (IIFE)


(function chai(){
    console.log(`DB CONNECTED`);
})();

//Normal IIFE
((name)=> {
    console.log(`DB CONNECTED TWO ${name}`);  
    
})("Sushil")

// IIFE is used to prevent existing function from global scope variable pollution and 
// quickly run a function we use iife.