const URL = "https://api.thecatapi.com/v1/images/search";

const catImage = document.querySelector('#cat-image')

const catBtn = document.querySelector('#cat-btn')


// const getFacts = async ()=>{
//     console.log('getting data...');
    
//     let response = await fetch(URL)
//     console.log(response);
//     let data = await response.json()
//     catImage.src = data[0].url;
// }

// catBtn.addEventListener('click', getFacts);

// getFacts()


// Using promise chain:-
function getFacts() {
    fetch(URL).then((response)=>{
        return response.json();

    }).then((data)=>{
        catImage.src = data[0].url;
    })
}

catBtn.addEventListener('click', getFacts)