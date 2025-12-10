// const students = ["saurav", "sikha", "ravi"]
// console.log(students);

// if you want to store only one entity data then you can use array but if you want to store
// multiple data related to that entity then you have to use object in javascript.

// Object:-
// const student = {
//     roll : 11,
//     name : "Sushil",
//     age : 24,
//     subject : "English"
// }

// console.log(student.name);


const admission = {
    studentName : "Sushil",
    courseName : "react course",
    amount : '₹3000',
    discount : "10%"
}

// console.log(admission.courseName);

//**for array we use for-of loop
//**for object we use for-in loop **

// for (let key in admission) {
//         console.log(key, '-',admission[key]);
// }


// array of objects:-

// if we multiple entity and their in data then we use array of objects:-

// const students = [
//     {
//         name : "Sushil",
//         age : 21,
//         subject : "English",
//         roll : 11,
//     },
//     {
//         name : "Sheetal",
//         age : 21,
//         subject : "Maths",
//         roll : 12,
//     },
//     {
//         name : "Akansha",
//         age : 20,
//         subject : "English",
//         roll : 13,
//     },

// ]

// console.log(students);



// const Products = [
//     {
//         title: "Blue shirt",
//         description: "Blue silk cotton soft lethered shirt",
//         price : 3000,
//         discount:10
//     },
//     {
//         title: "White plain shirt",
//         description: "White silk cotton soft plain shirt",
//         price : 1500,
//         discount:10
//     },
//     {
//         title: "Cotton plain pants",
//         description: "Black formal plain pants",
//         price : 1800,
//         discount:10
//     },

// ]

// //console.log(Products[0].description);

// for (let product of Products) {
//     console.log(product.title);
//     console.log(product.description);
//     console.log("₹",(product.price));
//     console.log(product.discount);
//     console.log("==============================");
    
// }
