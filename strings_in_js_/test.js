// Strings
// creating string
// let str = "Ganpati Bappa Morya"
// let str2 = "Ganesha"



// console.log(str);
// console.log(str2);

// string length

// console.log(str.length);
// console.log(str2.length);

// string indices
// console.log(str[0]);
// console.log(str[14]);

// Template Literals
// let name = "Sushil"
// let specialString = `Hii,This is ${name}`;
// console.log(typeof specialString);


// let obj = {
//     item: "pen",
//     price: 10,
// }

// console.log("The cost of",obj.item,"is", obj.price, "rupees.");
// console.log(`The cost of ${obj.item} is ${obj.price}`);

// let str = "Sushil \n\tKamble";
// console.log(str.length);



// string methods in js
// These are built-in functions to manipulate a string.

// let str = "Sushil Kamble"
// new_str = str.toUpperCase()

// console.log(str);
// console.log(new_str);

// built in function didnt changed existing str but it returned new str and we save into new
// variable 

// s = '      World of beauty   '
// new_s = s.trim()
// console.log(new_s);

// p = s.concat(new_s)
// console.log(p);

// let str = '0123456';
// console.log(str.slice(5));


// concatenation in string
// let s = "Sushil"
// let n = "ushil"

// console.log(s.concat(n));




// replace method in string:-

// let str = "hellololo"

// console.log(str.replace('h', 'y'));
// console.log(str.replace('lo', 'po'));



// to search value index in string:

// let str = 'I love python';
// console.log(str.charAt(3));

// let name = prompt("Enter your name: ")

// console.log(`@${name}${name.length}`);



// const name = "Sushil"

// const repoCount = 50

// console.log(name +" "+ repoCount + " repo on github acc.");


// by String interpolation :-

// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

// there is another way to declare a string in javascript

// const gameName = new String('Sushil-k')

// console.log(gameName[0]);
// console.log(gameName.__proto__);


// console.log(gameName.length);

// console.log(gameName.toUpperCase());

// console.log(gameName.charAt(1));
// console.log(gameName.indexOf('h'));

// const newStr = gameName.substring(0,4)
// console.log(newStr);

// const otrStr = gameName.slice(-1, 4)
// console.log(otrStr);

// difference between substring and slice they both sliceing string but in slice we can use negative index so it stands
// different.

// const anthrStr = "             Sushil.    "
// console.log(anthrStr);

// console.log(anthrStr.trim());

// console.log(anthrStr.trimEnd());
// console.log(anthrStr.trimStart());



// const url = 'https://Sushil.com/sushil%20k'

// upd_url = url.replace('%20', '-')
// console.log(upd_url);

// console.log(url.includes('k'));


// const newOne = "Sushil kamble is Software Engineer."

// console.log(newOne.split(" "));

// console.log(newOne.bold());

// console.log(newOne.fixed());

