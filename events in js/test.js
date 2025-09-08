// let btn = document.querySelector('#btn');
// btn.onclick = (evt) => {
//     console.log(evt);
//     console.log(evt.type);
//     console.log(evt.target);
//     console.log(evt.clientX, evt.clientY);
// }

// let box = document.querySelector('div')
// box.onmouseover = (evt) => {
//     console.log(evt);
//     console.log(evt.type);
//     console.log(evt.target);
//     console.log(evt.clientX, evt.clientY);


//     console.log('Hey, Developer');
//     alert("Congrats Sushil for getting job as an Python Developer🎉🔥")
// }



// eventlistner in js 

// btn.addEventListener('click', () => {
//     console.log('Button is clicked!1');
// });
// btn.addEventListener('click', () => {
//     console.log('Button is clicked!2');
// });

// const handler3 = () => {
//     console.log('Button is clicked! 3');
// };
// btn.addEventListener('click', handler3)

// btn.removeEventListener('click', handler3)



// Q. Create a toggle button that changes the screen do dark mode when clicked and light mode on clicked again


let modeBtn = document.querySelector("#btn");
let currMode = 'light';
let body =  document.querySelector('body');

modeBtn.addEventListener('click', () => {
    if (currMode === 'light') {
        currMode = 'dark';
        // document.querySelector('body').style.backgroundColor = 'black'
        body.classList.add('dark')
        body.classList.remove('light')
    } else {
        currMode = 'light';
        // document.querySelector('body').style.backgroundColor = 'white'
        body.classList.add('light')
        body.classList.remove('dark')
    }
    console.log(currMode);
})