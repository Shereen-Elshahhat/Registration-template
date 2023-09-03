let username =document.querySelector(".input1")
let gmail =document.querySelector("#register-gmail")
let password =document.querySelector("#register-pass")
let registerBtn =document.querySelector(".btn3")


registerBtn.addEventListener("click", function(e){
    e.preventDefault()
    if(username.value ==="" || gmail.value ==="" || password.value ==="" ){
        alert("Please enter your data!")
    }else{
        localStorage.setItem("username",username.value)
        localStorage.setItem("gmail",gmail.value)
        localStorage.setItem("password",password.value)

        setTimeout ( () =>{
            window.location="login.html"
        } , 1500)
    }
})


