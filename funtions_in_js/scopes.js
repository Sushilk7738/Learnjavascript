let a = 7;   //global level can be accessible outside as well as inside block of if

if (true) {
    let a = 10;   //block level can be accessible only inside block of if.
    const b = "Sushil";
    var c = 20;  //even declaring inside if scope it still accesable from outside of if scope
    // console.log('inner block: ', a);
    
}

// console.log(a);
// console.log(name);
// console.log(c);


// Nested scope:-

function one() {
    const userName = "Sushil"

    function two() {
        const website = "www.google.com"
        console.log(userName);
    }

    // console.log(website);
    two()
}

// one()

if (true) {
    const userName = "Sushil"
    if (userName ==="Sushil") {
        const website = " youtube"
        // console.log(userName + website);
    }
    // console.log(website);
    
}
// console.log(userName);



// ======================================scope level hoisting ================================


// console.log(addOne(5))
// function addOne(num) {
//     return num + 1;
// }



// addTwo(5)
// const addTwo = function(num) {
//     return num + 2;
// }


