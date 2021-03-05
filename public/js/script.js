// side menu
var sideMenuBtn = document.getElementById('index_side_menu_btn')
var sideMenu = document.getElementById('index_side_menu')
var sideLogin = document.getElementById("side_menu_login")
var sideOrder = document.getElementById("side_menu_track")
var sideHistory = document.getElementById("side_menu_history")
var sideAbout = document.getElementById("side_menu_about")
var sideMenuUser = document.getElementById('side_menu_user')
var check = true

// header menu bar
var welcomeMessage = document.getElementById('header_welcomeMessage')
var loginPop = document.getElementById('loginPop')
var orderPop = document.getElementById('orderPop')
var historyPop = document.getElementById('historyPop')
var aboutPop = document.getElementById('aboutPop')
var loginP = document.getElementById('loginP')
var orderP = document.getElementById('orderP')
var historyP = document.getElementById('historyP')
var aboutP = document.getElementById('aboutP')
var loginCheck = false;

// login/ sign up container
var blurEffect = document.getElementById('index_blur')
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

//error message
var errorBox = document.getElementById('error_box')
var errorUser = document.getElementById('error_user')
var errorPass = document.getElementById('error_pass')
var errorCon = document.getElementById('error_conPass')
var errorBirth = document.getElementById('error_birth')
var errorPhone = document.getElementById('error_phone')
var errorUserAppear = document.getElementById('error_userAppear')
var wrongUser = document.getElementById('wrong_user')
var errorNoLogin = document.getElementById('error_no_login')

var username = ""

sideMenuBtn.addEventListener('click', function(){
    if(check){
        sideMenu.style.display = "block"
        check = false
    }else{
        sideMenu.style.display = "none"
        check = true
    }
})

document.getElementById('login').addEventListener('mouseover', function(){
    loginPop.style.display = 'block'
    loginP.style.marginTop = "-3px"
})
document.getElementById('login').addEventListener('mouseleave', function(){
    loginPop.style.display = 'none'
    loginP.style.marginTop = "0"
})
document.getElementById('order').addEventListener('mouseover', function(){
    orderPop.style.display = 'block'
    orderP.style.marginTop = "-3px"
})
document.getElementById('order').addEventListener('mouseleave', function(){
    orderPop.style.display = 'none'
    orderP.style.marginTop = "0"
})
document.getElementById('history').addEventListener('mouseover', function(){
    historyPop.style.display = 'block'
    historyP.style.marginTop = "-3px"
})
document.getElementById('history').addEventListener('mouseleave', function(){
    historyPop.style.display = 'none'
    historyP.style.marginTop = "0"
})
document.getElementById('about').addEventListener('mouseover', function(){
    aboutPop.style.display = 'block'
    aboutP.style.marginTop = "-3px"
})
document.getElementById('about').addEventListener('mouseleave', function(){
    aboutPop.style.display = 'none'
    aboutP.style.marginTop = "0"
})

loginP.addEventListener('click', function(){
    if(!loginCheck){
        blurEffect.style.display = "block"
        loginContainer.style.display = "flex"
    }else{
        alert("Logout Successfully, Thank you for shopping with us")
        location.reload()
    }
})
sideLogin.addEventListener('click', function(){
    sideMenu.style.display = "none"
    check = true
    if(!loginCheck){
        blurEffect.style.display = "block"
        loginContainer.style.display = "flex"
    }else{
        alert("Logout Successfully, Thank you for shopping with us")
        location.reload()
    }
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
logincancel.addEventListener('click', function(){
    blurEffect.style.display = "none"
    loginContainer.style.display = "none"
})
function checkUser(user){
    if(user.length < 5){
        return false
    }
    return true
}
function checkPass(pass){
    if(pass.length < 6){
        return false
    }
    return true
}
function checkConPass(pass, conPass){
    if(pass === conPass){
        return true;
    }else{
        return false
    }
}
function checkBirth(birth){
    var dateValid = /^([0-9]{2})\/([0-9]{2})\/([0-9]{4})$/
    if(dateValid.test(birth)){
        return true
    }
    return false
}
function checkPhone(phone){
    if(phone.length === 10){
        return true
    }
    return false
}
function hideError(){
    errorBox.style.display = 'none'
}
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
                username = data.success
                blurEffect.style.display = "none"
                loginContainer.style.display = "none"
                loginP.innerHTML = '<i class="fas fa-sign-out-alt"></i>Logout'
                sideLogin.innerHTML = '<i class="fas fa-sign-out-alt"></i>Logout'
                sideMenuUser.innerHTML = username
                welcomeMessage.innerHTML = "Welcome back, "+username+""
                loginCheck = true
            }
        })
        setTimeout("hideError()", 3000)
    }
})
orderP.addEventListener('click', function(){
    if(!loginCheck){
        errorBox.style.display = "flex"
        errorNoLogin.style.display = "flex"
    }
    setTimeout("hideError()", 3000)
})
sideOrder.addEventListener('click', function(){
    if(!loginCheck){
        errorBox.style.display = "flex"
        errorNoLogin.style.display = "flex"
    }
    setTimeout("hideError()", 3000)
})
historyP.addEventListener('click', function(){
    if(!loginCheck){
        errorBox.style.display = "flex"
        errorNoLogin.style.display = "flex"
    }
    setTimeout("hideError()", 3000)
})
sideHistory.addEventListener('click', function(){
    if(!loginCheck){
        errorBox.style.display = "flex"
        errorNoLogin.style.display = "flex"
    }
    setTimeout("hideError()", 3000)
})
aboutP.addEventListener('click', function(){
    if(!loginCheck){
        errorBox.style.display = "flex"
        errorNoLogin.style.display = "flex"
    }
    setTimeout("hideError()", 3000)
})
sideAbout.addEventListener('click', function(){
    if(!loginCheck){
        errorBox.style.display = "flex"
        errorNoLogin.style.display = "flex"
    }
    setTimeout("hideError()", 3000)
})