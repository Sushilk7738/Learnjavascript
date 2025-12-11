const runApp = (e)=>{
    e.preventDefault()     
    const input = document.getElementById("letter")
    const letter = input.value.toLowerCase()
    const title = document.getElementById("title")
    const picture = document.getElementById("picture")
    
    if (letter === "a"){
        title.innerText = "Apple"
        picture.src = './images/a.png'
    }

    else if (letter == "b"){
        title.innerHTML = "Ball"
        picture.src = "./images/b.jpg"
    }
    
    else if (letter == "c"){
        title.innerHTML = "Cat"
        picture.src = "./images/ca.jpg"
    }

    else if (letter == "e"){
        title.innerHTML = "Elephant"
        picture.src = "./images/e.webp"
    }

    else if (letter == "f"){
        title.innerHTML = "Fish"
        picture.src = "./images/f.png"
    }

    else if (letter == "g"){
        title.innerHTML = "Goat"
        picture.src = "./images/g.png"
    }

    else if (letter == "h"){
        title.innerHTML = "Helicopter"
        picture.src = "./images/h.png"
    }

    else if (letter == "i"){
        title.innerHTML = "Icecream"
        picture.src = "./images/i.png"
    }

    else if (letter == "j"){
        title.innerHTML = "Joker"
        picture.src = "./images/j.jpg"
    }

    else if (letter == "k"){
        title.innerHTML = "Katrina"
        picture.src = "./images/kat.png"
    }
    
    else{
        title.innerHTML = "Option not found!"
        picture.src = "./images/notFound.avif"
    }
}