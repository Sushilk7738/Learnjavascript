const toggle = ()=>{
    const img = document.getElementById("image")
    const button = document.getElementById("button")
    const display = img.style.display

    if (display == "block"){
        img.style.display = "none"
        button.innerHTML = "Show"
    }
    else{
        img.style.display = "block"
        button.innerHTML = "Hide"
    }
}