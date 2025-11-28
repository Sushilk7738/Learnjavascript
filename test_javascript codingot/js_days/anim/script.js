// const title = document.getElementById("title")
// console.log(title);

// function demo (){
//     const title = document.getElementById("title")
//     // title.classList.add("demo")
//     // title.className = 'sush'
//     title.classList.remove("demo")
//     title.classList.add("sushil")
// }



function addEffect (effect) {
    const pic  = document.getElementById("picture")
    // pic.classList.add("animate__pulse")
    pic.className = effect
}

function removeEffect(){
    const pic = document.getElementById("picture")
    pic.className = ""
    
}