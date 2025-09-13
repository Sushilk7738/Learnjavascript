// const score = 183
// console.log(score);


// we can explicitly define Number datatype in javascript 

// const balance = new Number(78000000)
// console.log(balance);

// console.log(balance.toFixed(2));

// const othNumber = 777.786
// console.log(othNumber.toPrecision(3));


// we can convert number datatype into string datatype
// console.log(balance.toString().length);

// console.log(typeof(balance.toString()));


// const nos = 10000000
// console.log(nos.toLocaleString("en-IN"));



// ========================MATHS=============================================
// console.log(Math);

// console.log(Math.abs(-7));

// console.log(Math.round(777.786));

// console.log(Math.ceil(87.12)); // it return highest prision value 

// console.log(Math.floor(87.99));

// console.log(Math.min(7,3,5,5,2));

// console.log(Math.max(7,3,5,5,2));

// console.log(Math.random());

// console.log(Math.floor(Math.random()*10) + 1);

const min = 10
const max= 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)
