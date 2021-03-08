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

//pop out
var popLogout = document.getElementById('login_pop_logout')
var popCheck = document.getElementById('login_pop_check')
var sideMenuCheck = document.getElementById('side_menu_check')
var sideMenuLogout = document.getElementById('side_menu_logout')

var username = ""
checkUserAuthorized()

// side menu
sideMenuBtn.addEventListener('click', function(){
    if(check){
        sideMenu.style.display = "block"
        check = false
    }else{
        sideMenu.style.display = "none"
        check = true
    }
})
sideLogin.addEventListener('click', function(){
    sideMenu.style.display = "none"
    check = true
    if(!loginCheck){
        blurEffect.style.display = "block"
        loginContainer.style.display = "flex"
    }
})
sideLogin.addEventListener('mouseover', function(){
    if(loginCheck){
        sideMenuCheck.style.display = "flex"
        sideMenuLogout.style.display = "flex"
    }
})
sideMenuLogout.addEventListener('click', function(){
    alert("Logout Successfully, Thank you for shopping with us")
    window.open('http://localhost:3000', "_self")
})
sideLogin.addEventListener('mouseleave', function(){
    if(loginCheck){
        sideMenuCheck.style.display = "none"
        sideMenuLogout.style.display = "none"
    }
})
sideMenuCheck.addEventListener('mouseover', function(){
    sideMenuCheck.style.display = "flex"
    sideMenuLogout.style.display = "flex"
})
sideMenuLogout.addEventListener('mouseover', function(){
    sideMenuCheck.style.display = "flex"
    sideMenuLogout.style.display = "flex"
})
sideMenuCheck.addEventListener('mouseleave', function(){
    sideMenuCheck.style.display = "none"
    sideMenuLogout.style.display = "none"
})
sideMenuLogout.addEventListener('mouseleave', function(){
    sideMenuCheck.style.display = "none"
    sideMenuLogout.style.display = "none"
})
sideOrder.addEventListener('click', function(){
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
sideAbout.addEventListener('click', function(){
    if(!loginCheck){
        errorBox.style.display = "flex"
        errorNoLogin.style.display = "flex"
    }
    setTimeout("hideError()", 3000)
})

// menu bar
document.getElementById('login').addEventListener('mouseover', function(){
    if(loginCheck){
        document.getElementById('login_pop').style.display = "block"
    }else{
        loginPop.style.display = 'block'
        loginP.style.marginTop = "-3px"
    }
})
document.getElementById('login').addEventListener('mouseleave', function(){
    if(loginCheck){
        document.getElementById('login_pop').style.display = "none"
    }else{
        loginPop.style.display = 'none'
        loginP.style.marginTop = "0"
    }
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
    }
})
popLogout.addEventListener('click', function(){
    alert("Logout Successfully, Thank you for shopping with us")
    window.open('http://localhost:3000', "_self")
})
orderP.addEventListener('click', function(){
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
aboutP.addEventListener('click', function(){
    if(!loginCheck){
        errorBox.style.display = "flex"
        errorNoLogin.style.display = "flex"
    }
    setTimeout("hideError()", 3000)
})

// function
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
function checkUserAuthorized(){
    fetch('/authorized', {
        method: "GET"
    })
    .then(res => res.json())
    .then(data => {
        loginCheck = data.user
    })
}