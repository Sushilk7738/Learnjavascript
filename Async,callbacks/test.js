// console.log("Let's");
// console.log("Welcome");

// setTimeout((()=>{
//     console.log('The python developer: Sushil');

// }),4000)

// console.log('Its honour to be developer like you in this industry');






// callback :- a callback is function passed as an argument to another function.

// function sum(a, b){
//     console.log(a + b);

// }


// function calc(a, b, sumCallback) {
//     sumCallback(a, b);
// }

// calc(2,5,sum)



// let age = 18

// if (age >= 18) {
//     if (age >= 60) {
//         console.log('senior citizen');
//     }
//     else{
//         console.log('Middle citizen');

//     }
// } else {
//     console.log('minor(child)');
// }



// function getData(getId)  {
//     setTimeout(()=>{
//         console.log('Data', getId);
// }, 2000)
// }

// getData("Sushil")




//promises in javascript:-
// promise is for eventual completion of task. It is an object in js. it is solution for callback hell.


// let promise = new Promise((resolve, reject)=>{
//     console.log('I am a promise.');
//     // resolve("success")
//     reject('Some error occured')
// })






// promises reject and resolve are callbacks provided by js


// function getData(dataId, getNxtData) {
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             console.log('data', dataId);
//             resolve('Success, Sushil is now a software engineer.')

//             if (getNxtData){
//                 getNxtData();
//             }

//         }, 7000);
//     })
// }



// const getPromise = ()=>{
//     return new Promise((resolve, reject)=>{
//         console.log('I am a promise');
//         resolve('success')
//         reject('Network error!')
//     })
// }

// let promise = getPromise()
// promise.then((res)=>{
//     console.log('Promise fulfilled', res);

// })

// promise.catch((err)=>{
//     console.log('rejected!', err);

// })













// function getData(dataId, getNxtData) {
//     setTimeout(() => {
//         console.log('Data', dataId);
//         if (getNxtData) {
//             getNxtData();
//         }
//     }, 2000);
// }

// //callback hell
// getData(1, () => {
//     getData(2, ()=>{
//         getData(3, ()=>{
//             getData('are bas kar bas kar', ()=>{
//                 getData('Le mai mar gaya... game over☠️')
//             })
//         })
//     })
// })







// function async() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log('Data1');
//             resolve('success')
//         }, 2000)
//     })
// }

// function async1() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log('Data2');
//             resolve('success')
//         }, 4000)
//     })
// }


// console.log('fetching data1...');

// let p = async();

// p.then((res) => {
//     console.log('fetching data2...');  //promise chaining
//     let p2 = async1()
//     p2.then((res) => { })
// })


// let p1 = async1();

// p1.then((res)=>{
//     console.log(res);
// })





function getData(dataId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Data', dataId);
            resolve('Success')
        }, 2000);
    })
}

// promise chain

// getData(1).then((res) => {
//     return getData(2)
// }).then((res) => {
//     return getData(3)
// }).then((res)=>{
//     console.log(res);
// })


// Async- await:- async function always returns a Promise
// and await pauses the execution of its surrounding async function until the promise is settled.

// async function hello(){
//     console.log('hello');
// }
// hello()


function api() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('weather data');
            resolve(200);
        }, 2000)

    })
}

// async function getWeatherData(){
//     await api() //1st call
//     await api()
// }



// using IIFE

(async function(){
    console.log('getting first data....');
    await getData("Sushil")
    console.log('getting second data....');
    await getData("The")
    console.log('getting third data....');
    await getData("Python Developer")
}
)();
