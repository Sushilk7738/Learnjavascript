// let marks = [97, 84, 88, 61, 75];
// console.log(marks);
// console.log(marks.length); //property

// let heroes = ["swami vivekanda", "Chandrashekhar azad", "Bhagat singh", "Sukhdeo", 'Rajguru', 'Subhashchandra bose']
// console.log(heroes);
// console.log(heroes[3]);
// console.log(heroes[7]);


// marks[0] = 98;
// console.log(marks);


// Loop over an Array:-

// let heroes = ["Swami vivekanda", "Chandrashekhar azad", "Bhagat singh", "Sukhdeo", 'Rajguru', 'Subhashchandra bose']

// By applying for loop:-

// for (i=0; i< heroes.length; i++) {
//     console.log(heroes[i]);
// }

// console.log('loop ended');


// By applying for of loop :-

// for (let hero of heroes) {
//     console.log(hero);
// }



// let cities = ['Mumbai', 'Bangalore', 'Pune', 'Jaipur', 'Chennai']

// for (let city of cities) {
//     console.log(city.toUpperCase());
// }


// Q. For a give array with marks of student [85,58,96,69,45,54]
// find the average of marks

// let marks = [85,58,96,69,45,54];

// sum = 0;

// for (let val of marks) {
//     sum += val;
// }

// let avg = sum / marks.length;
// console.log(`The average marks of class = ${avg.toFixed(2)}`);



// Q. for given array of prices apply 10% off discount and print final price of that array items

// let items = [250, 345, 900, 1000, 4000];

// final_price = []

// for (let item of items) {
//     discount = item / 10;
//     let discounted_price = item - discount;
//     final_price.push(discounted_price);
// }

// console.log(final_price);
// console.log(`So the discounted price are ${final_price}`);

// let i = 0
// for (let item of items) {
//     offer = item / 10;
//     let discounted_price = item - offer

//     console.log(`The price after discount is  ${discounted_price}`);
// }

// for (let i = 0; i < items.length; i++) {
//     discount = items[i] / 10;
//     let discounted_price = items[i] - discount;
//     console.log(`The price after applied discount is ${discounted_price}`);
    
// }






// Arrrays methods:-


// let food_items = ['Potato', "Noodles", "Apples", 'litchi', "Tomato", "Sugarpotato"]

// food_items.push('Orange', 'Chips', 'Banana');
// console.log(food_items);

// let deleted_item =food_items.pop()

// console.log(food_items);
// console.log('Deleted: ', deleted_item);


// console.log(food_items.toString());


// let marvel_gabde = ['thor', 'spiderman', 'ironman'];
// marvel_gabde.unshift('chuuuu')
// val =marvel_gabde.shift()
// console.log('deleted',val);

// let Dc_che_gabde = ['superman', 'batman'];
// Dc_che_gabde.unshift('yedzavveee')
// val2 =Dc_che_gabde.shift()
// console.log('deleted', val2);


// let indian_heroes = ['shaktiman', 'krish'];

// sagle_gabde = marvel_gabde.concat(Dc_che_gabde, indian_heroes)
// console.log(sagle_gabde);



// splice method in array:- it can add, delete, replace element of array

// let power_rangers = ['red', 'yellow', 'blue', 'black']

// console.log(power_rangers);

// console.log(power_rangers.slice(1, 3));

// add element:
// power_rangers.splice(5, 0, "satrangi chuu");
// console.log(power_rangers);


// delete element
// power_rangers.splice(3, 1);

//replace element

// power_rangers.splice(3, 1, 'pink')








// let companies = ['Bloomberg', 'Microsoft', 'Uber', 'Google', 'IBM', 'Netflix']


// remove first company from companies
// companies.shift();
// console.log(companies);


// Remover uber add ola
// companies.splice(2,1, 'OLA')
// console.log(companies);


// add amazon at the end of companies
// companies.push('Amazon')
// console.log(companies);


