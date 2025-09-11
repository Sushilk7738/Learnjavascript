// to target attribute we use getElementById using this we can target id and class attribute


const title =  document.getElementById('title')

// by targetting attribute we gonna style 

title.style.backgroundColor = 'red'

title.style.color = 'white'

title.style.border = '2px solid yellow'

title.style.padding = '10px'

title.style.textAlign = 'center'

title.style.borderRadius = '15px'


// we can access attribute content by using textcontent and innerhtml, innertext

// console.log(title.textContent)

// console.log(title.innerHTML);

// console.log(title.innerText);


// the difference between textContent and innerText is they both show same values but textContent
// shows hidden all tags or content , attribute more explicitly


// console.log(title.textContent); // it shows all content more explicitly

// console.log(title.innerText);  // it shows only neccessary front end view pov

// console.log(title.innerHTML); // it shows all the html tag with content



// we are now explore more about getElementByClassName

// console.log(document.getElementsByClassName('heading'))  //it returns an html collections



// querselector in javascript

// console.log(document.querySelector('h1'));
//this above queryselector only targets first h1 tag 

// we can select id and class also by querySelector just like css for id use '#' and for class use '.'

// console.log(document.querySelector('#id'));

// console.log(document.querySelector('.heading'));

// console.log(document.querySelector('input[type = "password"]'));



// const myul = document.querySelector('ul')

// const myli = document.querySelector('li')

// myli.style.color = 'black'

// myli.style.backgroundColor = 'green'
// myli.style.padding = '10px'

// myli.innerText = "bokachoda"




// querySelectorAll in js:-
// querySelectorAll returns nodelist and that has some prototypes same as array but not completely array we can perform foreach action

// const templi = document.querySelectorAll('li')

// templi.forEach(function (l) {
//     l.style.color = 'red'
//     l.style.backgroundColor = 'yellow'
// })



// getElementByclassname in js:-

const tempClassli = document.getElementsByClassName('list-item')

// tempClassli.forEach(function (li)  {
//     console.log(li);
    
// });

// in above example this returns error because in htmllist we cannot perform foreach loop
// Yes but we can convert that htmllist into an array okay then we can perform loops 
const Newclassli =Array.from(tempClassli)
console.log(Newclassli);

Newclassli.forEach(function (li) {
    console.log(li);
    li.style.color = "orange"

})
