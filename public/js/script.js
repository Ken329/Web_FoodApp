var sideMenuBtn = document.getElementById('index_side_menu_btn')
var sideMenu = document.getElementById('index_side_menu')
var check = true

var loginPop = document.getElementById('loginPop')
var orderPop = document.getElementById('orderPop')
var historyPop = document.getElementById('historyPop')
var aboutPop = document.getElementById('aboutPop')
var loginP = document.getElementById('loginP')
var orderP = document.getElementById('orderP')
var historyP = document.getElementById('historyP')
var aboutP = document.getElementById('aboutP')

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
