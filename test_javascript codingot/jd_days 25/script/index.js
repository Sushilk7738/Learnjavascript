const login = (e)=>{
    //prevent page reload
    e.preventDefault()

    // select fields so that we capture inside data
    const emailInput = document.getElementById("email")
    const passwordInput = document.getElementById("password")
    
    //taking input values
    const email = emailInput.value
    const password = passwordInput.value
    
    // writing logic for login 
    if (email == "sushilkamble@gmail.com") {
        if(password == "sushil" || password == "Sushil"){
            alert("Login Success")
        }
        else {
            alert("Incorrect password")
        }
    }

    else{
        alert("User doesn't exist please signup first..")
    }
    
}