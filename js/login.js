let username =document.querySelector(".input1")
let password =document.querySelector(".input2")
let loginBtn =document.querySelector(".btn2")

let getusername = localStorage.getItem("username")
let getpassword = localStorage.getItem("password")

loginBtn.addEventListener("click" ,function(e){
    e.preventDefault
    if(username.value==="" || password.value===""){
        alert("please enter your data!")
    }else{
        if(getusername && getusername.trim() === username.value && getpassword && getpassword.trim()===password.value){

            setTimeout ( () =>{
                window.location="index.html"
            } , 1500)
        }else{
            alert("username or password ia wrong !")
        }

    }
})