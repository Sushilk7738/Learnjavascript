// let arr =[45,23,21]

// // console.log(arr);

// let a = arr.map((value, index, array)=>{
//     console.log(value, index, array);
//     return value + index;
// })
// console.log(a);

// the map method performs on an array returns new array and for each performs the operations
// on existing array elements.

// let arr2 = [45 ,23 ,2 ,15 ,0 ,3 ,5 ]
// let a = arr2.filter((val)=>{
//     return val<10;
// })

// console.log(a);

// let arr3 = [ 45 ,25 ,15 ,14 ,21 ,3 ,5 ,9 ]

// let b = arr3.reduce((h1, h2) =>{
//     return h1 + h2
// })

// console.log(b);




// const coding = ['js', 'ruby', 'py', 'cpp', 'java']

// const values = coding.forEach((lang)=>{
    // console.log(lang);
    
// })
// console.log(values);  //returns undefined 


// const myNums = [1,2,3,4,5,6,7,8,9,10]

// const updNums = myNums.filter((num) => num > 4)


// const updNums = myNums.filter((num)=>(num > 4))
// console.log(updNums);


// const updNums = myNums.filter((num)=>{
//     return num > 4     //while using '{}' we declares as scope so it has to be return values otherwise it provide empty arr.
// })

// console.log(updNums);


// const newNums = []

// myNums.forEach((num)=>{
//     if (num > 4) {
//         newNums.push(num)
//     }
// })

// console.log(newNums);




// const books = [
//     { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
//     { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
//     { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
//     { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
//     { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
//     { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
//     { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
//     { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
//     { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
// ];


// const userBooks = books.filter((bk)=>(bk.genre === "History"))

// console.log(userBooks);

// const publishBooks = books.filter((bk)=>(
//     bk.publish >=1995 && bk.genre ==="History"
// ))

// console.log(publishBooks);


// const myNums = [1,2,3,4,5,6,7,8,9,10]

// const updNums = myNums.map((num)=> num + 10)
// console.log(updNums);

// const newNums = myNums
//                 .map((num)=>(num * 10))
//                 .map((num)=>num + 1)
//                 .filter((num)=>num >40)
// console.log(newNums);







// reduce in js:-

// const myNums = [1,2,3,4]

// const myTotal = myNums.reduce((acc, currVal)=>{
//     console.log(`acc: ${acc} currval: ${currVal}`);
    
//     return acc + currVal
// }, 0)

// console.log(myTotal);


// const updNums = myNums.reduce((acc, currVal)=> acc + currVal, 0)

// console.log(updNums);


const shoppingCart =[
    {
        item : 'js course',
        price : 2999
    },
    {
        item : 'Py course',
        price : 3999
    },
    {
        item : 'Java course',
        price : 4999
    },
]

const priceToPay = shoppingCart.reduce((acc, item)=> acc+ item.price, 0)

console.log(priceToPay);
