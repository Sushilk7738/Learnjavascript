// console.log('sushil kamble');
// window.console.log(window);

// alert("Welcome to CodeWithSushil")

// console.dir(document.body.childNodes[0]);
// console.log(document.body);

// document.body.childNodes[1].innerText="Sushil"


// dom manipulation:-
// by id 
// let heading = document.getElementById('heading')
// console.dir(heading);


// by class
// let headings =document.getElementsByClassName("heading")
// console.dir(headings);
// console.log(headings);


// by tag

// let parahs = document.getElementsByTagName('p')
// console.dir(parahs)




// DOM query selector:-

// let element = document.querySelector("h1")    //returns first element.
// console.dir(element);

// for all element selector
// let all_element = document.querySelectorAll(".heading")
// console.dir(all_element);


// let firstel = document.querySelector("p")
// console.dir(firstel);


// console.dir(document.body.firstChild);


// let div = document.querySelector('div')
// console.dir(div);

// let heading = document.querySelector('h1')


// create a h2 heading element with text 'Hello javascript'. append 'from Code with sushil'
// to this text using js


// let h1 = document.querySelector('h1')
// console.dir(h1);

// h1.innerText = h1.innerText + " from Sushil kamble" //concatenate


// create 3 divs with common class name -box and access them and some unique text to each them

// let divs = document.querySelectorAll('.box')
// console.dir(divs);

// divs[0].innerText = "Sushil";
// divs[1].innerText = "Pooja";
// divs[2].innerText = "Sheetal";

// let idx = 1
// for (div of divs) {
//     div.innerText = `New unique value ${idx}`;
//     idx++;
// }



// let div = document.querySelector('div')
// console.log(div);

// let id = div.getAttribute('id')
// console.log(id);

// let name = div.getAttribute('name')
// console.log(name);

// let para = document.querySelector('p')
// console.log(para.setAttribute('class', 'newclass'));




// to access and modify css element through the javascript:-


// let div = document.querySelector('div');

// div.style.backgroundColor = "green";
// div.style.backgroundColor = "purple";
// div.style.visibility = "hidden";


// div.style.fontSize= "18px"

// div.innerText = "Sushil here"
// div.style.border= "3px solid black"




// to create css element through the javascript:-

// let newBtn = document.createElement("button");
// newBtn.innerText = "Click me!";

// console.log(newBtn);

// let div = document.querySelector('div');

// div.append(newBtn);
// div.prepend(newBtn);

// newBtn.style.borderRadius= "5px";
// newBtn.style.backgroundColor= "white";
// newBtn.style.color= "black";
// newBtn.style.border= "1px solid black"

// div.before(newBtn)
// div.after(newBtn)
// newBtn.style.margin = "10px"


// let's create heading before div component through javascript

let heading = document.createElement("h1");
heading.innerText = "Welcome to sushil's website"

// console.log(heading);

// let div = document.querySelector('div');

// div.before(heading);


// document.querySelector('body').prepend(heading);

// heading.style.fontFamily= "sans-seriff";
// heading.style.backgroundColor = 'yellow';


// let para = document.querySelector('p');
// para.remove();




// learn the concept of append child and remove child  H/W


// question 1:-

// let body = document.querySelector('body');

// let Btn = document.createElement('button');
// Btn.innerText = "Click me!";

// Btn.style.backgroundColor ="red";
// Btn.style.color = "white";

// body.prepend(Btn);




// question 2:-
// let para = document.querySelector('p');

// para.setAttribute('class', 'newClass')

// you noticed above how newclass overrides previous class we can solve this problem using classlist concept

// para.classList.add('newClass')
// para.classList.remove('newClass')


// function f1() {
//     alert("You've clicked a button")
// }


// let btn = document.getElementById('btn')

// btn.addEventListener('click', () => {
//     alert("You've clicked again do you have any query?")
// })




// let para = document.getElementById('para')

// para.addEventListener('mouseover', () => {
//     para.innerText = "This is first victory i have find my dreamjob!🔥"
// })

// para.addEventListener('mouseleave', ()=> {
//     para.innerText = "This is my comeback☠️"
// })



// let parent = document.getElementById('parent')
// console.log(parent.firstElementChild);

// console.log(parent.firstElementChild.nextElementSibling);

// console.log(parent.lastElementChild);







// getting and setting element in js

let myh1 = document.getElementById('head')

// console.log(myh1.getAttribute('id'));
// console.log(myh1.getAttribute('class'));
// console.log(myh1.getAttribute('src'));


function addcss() {
    myh1.setAttribute('class', 'sub');
}

function rmvcss() {
    myh1.removeAttribute('class')
}

// console.log(myh1.hasAttribute('class'));
// console.log(myh1.hasAttribute('id'));


// there are two ways to add css to attributes

let mydiv = document.getElementById('d1')
// first way
// mydiv.setAttribute('style', 'background-color: yellow; color:red; text-align:center')

// second way
// mydiv.style.cssText = 'color:orange; background-color:black; padding:10px; text-align:center;'



// focus and blurr
let inp = document.getElementById('txt')


// focus in js:-

// inp.addEventListener('focus' , () =>{
//     inp.style.cssText = "background-color: lightblue; color:blue; border:2px solid black"
// })

// // blur in js:-
// inp.addEventListener('blur', ()=> {
//     inp.style.cssText = 'background-color:white;'
// })

// inp.addEventListener('change' , (e) => {
//     console.log(e.target.value);
    
// })


// let select = document.getElementById('select');
// select.addEventListener('change',(event) => {
//     let color = event.target.value
//     document.body.style.cssText =  `background-color: ${color}`
// })



