var indexFast = document.getElementById('index-fast-box')
var indexMain = document.getElementById('index-main-box')
var indexAppertizer = document.getElementById('index-appertizer-box')
var indexDessert = document.getElementById('index-dessert-box')

var loginContainer = document.getElementById('index_login')
var login = document.getElementById('login_btn')
var signup = document.getElementById('signup_btn')
var toggle = document.getElementById('login_toggle')
var username = document.getElementById('login_user')
var password = document.getElementById('login_pass')
var conPass = document.getElementById('login_conPass')
var birth = document.getElementById('login_birth')
var phone = document.getElementById('login_phone')
var loginForm = document.getElementById('login_form')
var loginEnter = document.getElementById('login_enter')
var logincancel = document.getElementById('login_cancel')


indexFast.addEventListener('click', function(){
    if(!loginCheck){
        errorBox.style.display = "flex"
        errorNoLogin.style.display = "flex"
    }else{
        window.open('/fastFood', "_self")
    }
    setTimeout("hideError()", 3000)
})
indexMain.addEventListener('click', function(){
    if(!loginCheck){
        errorBox.style.display = "flex"
        errorNoLogin.style.display = "flex"
    }else{
        window.open('/mainFood', "_self")
    }
    setTimeout("hideError()", 3000)
})
indexAppertizer.addEventListener('click', function(){
    if(!loginCheck){
        errorBox.style.display = "flex"
        errorNoLogin.style.display = "flex"
    }else{
        window.open('/appertizerFood', "_self")
    }
    setTimeout("hideError()", 3000)
})
indexDessert.addEventListener('click', function(){
    if(!loginCheck){
        errorBox.style.display = "flex"
        errorNoLogin.style.display = "flex"
    }else{
        window.open('/dessertFood', "_self")
    }
    setTimeout("hideError()", 3000)
})

login.addEventListener('click', function(){
    toggle.style.left = "0"
    loginContainer.style.height = "300px"
    loginContainer.style.marginTop = "5%"
    loginForm.style.height = "70%"
    conPass.style.display = "none"
    birth.style.display = "none"
    phone.style.display = "none"
    loginEnter.innerHTML = "Login"
    username.value = ""
    password.value = ""
    conPass.value = ""
    birth.value = ""
    phone.value = ""
})
signup.addEventListener('click', function(){
    toggle.style.left = "125px"
    loginContainer.style.height = "500px"
    loginContainer.style.marginTop = "2%"
    conPass.style.display = "flex"
    birth.style.display = "flex"
    phone.style.display = "flex"
    loginForm.style.height = "80%"
    loginEnter.innerHTML = "Sign Up"
    username.value = ""
    password.value = ""
    conPass.value = ""
    birth.value = ""
    phone.value = ""
})
loginEnter.addEventListener('click', function(){
    var myUser = document.getElementById('login_user').value
    var myPass = document.getElementById('login_pass').value
    var myConpass = document.getElementById('login_conPass').value
    var myBirth = document.getElementById('login_birth').value
    var myPhone = document.getElementById('login_phone').value
    if(myConpass !== ''){
        if(checkUser(myUser) && checkPass(myPass) && checkConPass(myPass, myConpass) && checkBirth(myBirth) && checkPhone(myPhone)){
            fetch('http://localhost:3000/getUsername?user='+myUser, {
                method: "GET"
            })
            .then(res => res.json())
            .then(data => {
                if(data.success){
                    fetch('http://localhost:3000/signUp?user='+myUser+'&pass='+myPass+'&birth='+myBirth+'&phone='+myPhone,  {
                        method: "POST"
                    })
                    .then(res => res.json())
                    .then(data => {
                        if(data.success){
                            blurEffect.style.display = "none"
                            loginContainer.style.display = "none"
                        }
                    })
                }else{
                    errorBox.style.display = "flex"
                    errorUserAppear.style.display = "flex"
                }
            })
        }else{
            errorBox.style.display = "flex"
            if(!checkUser(myUser)){
                errorUser.style.display = "flex"
            }else{
                errorUser.style.display = "none"
            }
            if(!checkPass(myPass)){
                errorPass.style.display = "flex"
            }else{
                errorPass.style.display = "none"
            }
            if(!checkConPass(myPass, myConpass)){
                errorCon.style.display = "flex"
            }else{
                errorCon.style.display = "none"
            }
            if(!checkBirth(myBirth)){
                errorBirth.style.display = "flex"
            }else{
                errorBirth.style.display = "none"
            }
            if(!checkPhone(myPhone)){
                errorPhone.style.display = 'flex'
            }else{
                errorPhone.style.display = 'none'
            }
        }
        setTimeout("hideError()", 3000)
    }else{
        var myUser = document.getElementById('login_user').value
        var myPass = document.getElementById('login_pass').value
        fetch('http://localhost:3000/login?user='+myUser+"&pass="+myPass, {
            method: "GET"
        })
        .then(res => res.json())
        .then(data => {
            if(!data.success){
                errorBox.style.display = "flex"
                wrongUser.style.display = "flex"
            }else{
                alert("Login Successful")
                blurEffect.style.display = "none"
                loginContainer.style.display = "none"
                window.open('user_site', "_self")
            }
        })
        setTimeout("hideError()", 3000)
    }
})
logincancel.addEventListener('click', function(){
    blurEffect.style.display = "none"
    loginContainer.style.display = "none"
})