var addFood = document.getElementById('food')
var addDesc = document.getElementById('describe')
var addImg = document.getElementById('image')
var sizeImg1 = document.getElementById('size_img1')
var sizeImg2 = document.getElementById('size_img2')
var sizeImg3 = document.getElementById('size_img3')

var btnSize = document.getElementById('btn_size') 
var btnDrink = document.getElementById('btn_drink') 
var conSize = document.getElementById('size')
var conDrink = document.getElementById('drink')
var toggle = document.getElementById('btn_toggle')

var small = document.getElementById('div_small')
var medium = document.getElementById('div_medium')
var big = document.getElementById('div_big')
var coffee = document.getElementById('div_coffee')
var special = document.getElementById('div_special')
var lemonade = document.getElementById('div_lemonade')
var milk = document.getElementById('div_milk')
var cocktail = document.getElementById('div_cocktail')
var add = document.getElementById('add')

var urlString = window.location.href
var url = new URL(urlString);
var foodName = url.searchParams.get("food")

var size = ""
var drink = ""

check(foodName)

btnSize.addEventListener('click', function(){
    toggle.style.left = "0"
    conSize.style.display = "flex"
    conDrink.style.display = "none"
})
btnDrink.addEventListener('click', function(){
    toggle.style.left = "50%"
    conDrink.style.display = "flex"
    conSize.style.display = "none"
})
small.addEventListener('click', function(){
    small.style.backgroundColor = "#F462C6"
    medium.style.backgroundColor = ""
    big.style.backgroundColor = ""
    size = "small"
    selected()
})
medium.addEventListener('click', function(){
    small.style.backgroundColor = ""
    medium.style.backgroundColor = "#F462C6"
    big.style.backgroundColor = ""
    size = "medium"
    selected()
})
big.addEventListener('click', function(){
    small.style.backgroundColor = ""
    medium.style.backgroundColor = ""
    big.style.backgroundColor = "#F462C6"
    size = "big"
    selected()
})
coffee.addEventListener('click', function(){
    coffee.style.backgroundColor = "#F462C6"
    special.style.backgroundColor = ""
    lemonade.style.backgroundColor = ""
    milk.style.backgroundColor = ""
    cocktail.style.backgroundColor = ""
    drink = "coffee"
    selected()
})
special.addEventListener('click', function(){
    coffee.style.backgroundColor = ""
    special.style.backgroundColor = "#F462C6"
    lemonade.style.backgroundColor = ""
    milk.style.backgroundColor = ""
    cocktail.style.backgroundColor = ""
    drink = "special"
    selected()
})
lemonade.addEventListener('click', function(){
    coffee.style.backgroundColor = ""
    special.style.backgroundColor = ""
    lemonade.style.backgroundColor = "#F462C6"
    milk.style.backgroundColor = ""
    cocktail.style.backgroundColor = ""
    drink = "lemonade"
    selected()
})
milk.addEventListener('click', function(){
    coffee.style.backgroundColor = ""
    special.style.backgroundColor = ""
    lemonade.style.backgroundColor = ""
    milk.style.backgroundColor = "#F462C6"
    cocktail.style.backgroundColor = ""
    drink = "milk"
    selected()
})
cocktail.addEventListener('click', function(){
    coffee.style.backgroundColor = ""
    special.style.backgroundColor = ""
    lemonade.style.backgroundColor = ""
    milk.style.backgroundColor = ""
    cocktail.style.backgroundColor = "#F462C6"
    drink = "cocktail"
    selected()
})
add.addEventListener('click', function(){
    console.log(size , drink)
})

function check(food){
    switch(food){
        case "Burger":
            addImg.src = "image/icons8-beef-burger-64.png"
            addDesc.innerHTML = "Original recepi comes with burger, drinks and fries"
            addFood.innerHTML = "Burger"
            sizeImg1.src = "image/icons8-beef-burger-64.png"
            sizeImg2.src = "image/icons8-beef-burger-64.png"
            sizeImg3.src = "image/icons8-beef-burger-64.png"
            break
        case "Taco":
            addImg.src = "image/icons8-taco-64.png"
            addDesc.innerHTML = "Original recepi comes with taco, drinks and fries"
            addFood.innerHTML = "Taco"
            sizeImg1.src = "image/icons8-taco-64.png"
            sizeImg2.src = "image/icons8-taco-64.png"
            sizeImg3.src = "image/icons8-taco-64.png"
            break
        case "Spring":
            addImg.src = "image/icons8-spring-roll-48.png"
            addDesc.innerHTML = "Original recepi comes with spring roll, drinks and fries"
            addFood.innerHTML = "Burger"
            sizeImg1.src = "image/icons8-spring-roll-48.png"
            sizeImg2.src = "image/icons8-spring-roll-48.png"
            sizeImg3.src = "image/icons8-spring-roll-48.png"
            break
        case "Hotdog":
            addImg.src = "image/icons8-frankfurter-64.png"
            addDesc.innerHTML = "Original recepi comes with hotdog, drinks and fries"
            addFood.innerHTML = "Burger"
            sizeImg1.src = "image/icons8-frankfurter-64.png"
            sizeImg2.src = "image/icons8-frankfurter-64.png"
            sizeImg3.src = "image/icons8-frankfurter-64.png"
            break
    }
}
function selected(){
    if(size !== "" && drink !== ""){
        add.style.display = "block"
    }
}