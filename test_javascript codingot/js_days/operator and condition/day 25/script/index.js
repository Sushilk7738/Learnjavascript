const getColor = (e)=>{
    e.preventDefault()
    const colorInput = document.getElementById("color")
    const color = colorInput.value.toLowerCase()
    // const body = document.querySelector("body")
    // body.style.backgroundColor = color
    
    
    if (color === "red"){
        alert("Success")
    }
    else {
        alert(`You have choosed ${color}`)
        
    }
}