// create an element through function

// function add_lang(lang) {
//     const li = document.createElement('li')
//     li.innerHTML = `${lang}`

//     document.querySelector('.language').appendChild(li)
// }

// add_lang('Python')
// add_lang('Typescript')


// function add_opti_lang(lang) {
//     const li = document.createElement('li');
//     li.appendChild(document.createTextNode(lang))


//     document.querySelector('.language').appendChild(li);
// }

// add_opti_lang("golang")


// edit an element

// const third_lang = document.querySelector('li:nth-child(3)')

// third_lang.innerHTML = "Mojo"
// const newli = document.createElement('li')
// newli.textContent = "Mojo"

// third_lang.replaceWith(newli)

// const firstLang = document.querySelector('li:first-child')

// firstLang.outerHTML = "<li>Java</li>"


// remove an element
// const third_lang = document.querySelector('li:nth-child(3)')
// third_lang.remove()



let myh = document.getElementById('head')

myh.style.cssText = 'color:orange; padding:15px;margin-left:auto'

setInterval(() => {
    let d = new Date();

    myh.innerHTML = `${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`
    
}, 1000)
















