// for of loop

// arr = [1,2,3,4,5]

// for (const num of arr) {
//     console.log(num);
// }


const greetings = "Hey Sushil!"

for (const greet of greetings) {
    // console.log(greet);
}



// Map in js:-

const map = new Map()

map.set("IN", "India")
map.set("Ch", "China")
map.set("RSA", "Russia")

// for (const keys of map) {
//     console.log(keys);
// }

// to print both key value style:-

for (const [key, value] of map) {
    // console.log(key,":-", value);
}


const myObj = {
    game1 : 'PUBG',
    game2 : 'ASPHALT',
    game3 : 'WWE2K'
}

// for (const [key, value] of myObj) {
//     console.log(key, ":-", value);
// }

// forof loop is not applicable on object

// by forin loop on object:-
for (const key in myObj) {
    // console.log(key);   //returns only keypair
    // console.log(`${key} the value is ${myObj[key]}`);  //it returns both
}


// const prg = ['js' ,'py', 'rb', 'cpp']

// for (const key in prg) {
//     console.log(prg[key]);
// }


const coding = ['js', 'ruby', 'java', 'python', 'cpp']


// with function:-
// coding.forEach(function (lang){
//     console.log(lang);
// })

// with arrow function:-
// coding.forEach((e)=>{
//     e = e.toLocaleUpperCase()
//     console.log(e);
    
// })


// by function reference :-

// function printMe(e){
//     console.log(e);
// }

// coding.forEach(printMe)


// coding.forEach((val, index, arr)=>{
//     console.log(val, index, arr);
// })

const myCode = [
    {
        lang: 'javascript',
        langfile: 'js'
    },
    {
        lang:'java',
        langfile: 'java'
    },
    {
        lang:'python',
        langfile:'py'
    }
]

myCode.forEach((e)=>{
    console.log(e.lang, e.langfile);
})