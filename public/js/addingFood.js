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

var price = 0
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
    size = "Small"
    selected()
})
medium.addEventListener('click', function(){
    small.style.backgroundColor = ""
    medium.style.backgroundColor = "#F462C6"
    big.style.backgroundColor = ""
    size = "Medium"
    selected()
})
big.addEventListener('click', function(){
    small.style.backgroundColor = ""
    medium.style.backgroundColor = ""
    big.style.backgroundColor = "#F462C6"
    size = "Big"
    selected()
})
coffee.addEventListener('click', function(){
    coffee.style.backgroundColor = "#F462C6"
    special.style.backgroundColor = ""
    lemonade.style.backgroundColor = ""
    milk.style.backgroundColor = ""
    cocktail.style.backgroundColor = ""
    drink = "Coffee"
    selected()
})
special.addEventListener('click', function(){
    coffee.style.backgroundColor = ""
    special.style.backgroundColor = "#F462C6"
    lemonade.style.backgroundColor = ""
    milk.style.backgroundColor = ""
    cocktail.style.backgroundColor = ""
    drink = "Special Coffee"
    selected()
})
lemonade.addEventListener('click', function(){
    coffee.style.backgroundColor = ""
    special.style.backgroundColor = ""
    lemonade.style.backgroundColor = "#F462C6"
    milk.style.backgroundColor = ""
    cocktail.style.backgroundColor = ""
    drink = "Lemonade"
    selected()
})
milk.addEventListener('click', function(){
    coffee.style.backgroundColor = ""
    special.style.backgroundColor = ""
    lemonade.style.backgroundColor = ""
    milk.style.backgroundColor = "#F462C6"
    cocktail.style.backgroundColor = ""
    drink = "Milkshake"
    selected()
})
cocktail.addEventListener('click', function(){
    coffee.style.backgroundColor = ""
    special.style.backgroundColor = ""
    lemonade.style.backgroundColor = ""
    milk.style.backgroundColor = ""
    cocktail.style.backgroundColor = "#F462C6"
    drink = "Coconut Cocktail"
    selected()
})
add.addEventListener('click', function(){
    getDrinkPrice(drink)
    getSizePrice(size)
    var total = price.toFixed(2)
    var sTotal = total.toString()
    fetch('/addMealCart?food='+foodName+"&size="+size+"&drink="+drink+"&price="+sTotal, {
        method: "POST"
    })
    .then(res => res.json())
    .then(data => {
        if(data.success){
            window.open('/user_site', "_self")
        }
    })
})
function getDrinkPrice(drink){
    switch(drink){
        case "coffee":
            price += 2.10
            break
        case "special":
            price += 2.70
            break
        case "lemenade":
            price += 1.10
            break
        case "milk":
            price += 3.50
            break
        case "cocktail":
            price += 5.20
            break
    }
}
function getSizePrice(size){
    switch(size){
        case "small":
            price -= 2
            break
        case "big":
            price += 2
            break
        default:
            break
    }
}
function check(food){
    switch(food){
        case "Beef Burger":
            addImg.src = "image/icons8-beef-burger-64.png"
            addDesc.innerHTML = "Original recepi comes with burger, drinks and fries"
            addFood.innerHTML = "Burger"
            sizeImg1.src = "image/icons8-beef-burger-64.png"
            sizeImg2.src = "image/icons8-beef-burger-64.png"
            sizeImg3.src = "image/icons8-beef-burger-64.png"
            price = 19.99
            break
        case "Taco":
            addImg.src = "image/icons8-taco-64.png"
            addDesc.innerHTML = "Original recepi comes with taco, drinks and fries"
            addFood.innerHTML = "Taco"
            sizeImg1.src = "image/icons8-taco-64.png"
            sizeImg2.src = "image/icons8-taco-64.png"
            sizeImg3.src = "image/icons8-taco-64.png"
            price = 23.99
            break
        case "Spring":
            addImg.src = "image/icons8-spring-roll-48.png"
            addDesc.innerHTML = "Original recepi comes with spring roll, drinks and fries"
            addFood.innerHTML = "Spring"
            sizeImg1.src = "image/icons8-spring-roll-48.png"
            sizeImg2.src = "image/icons8-spring-roll-48.png"
            sizeImg3.src = "image/icons8-spring-roll-48.png"
            price = 14.99
            break
        case "Hotdog":
            addImg.src = "image/icons8-frankfurter-64.png"
            addDesc.innerHTML = "Original recepi comes with hotdog, drinks and fries"
            addFood.innerHTML = "Hotdog"
            sizeImg1.src = "image/icons8-frankfurter-64.png"
            sizeImg2.src = "image/icons8-frankfurter-64.png"
            sizeImg3.src = "image/icons8-frankfurter-64.png"
            price = 19.99
            break
        case "Japanese Bento":
            addImg.src = "image/icons8-bento-48.png"
            addDesc.innerHTML = "Original recepi comes with japanese bento, vegetables and drinks"
            addFood.innerHTML = "Japanese Bento"
            sizeImg1.src = "image/icons8-bento-48.png"
            sizeImg2.src = "image/icons8-bento-48.png"
            sizeImg3.src = "image/icons8-bento-48.png"
            price = 29.99
            break
        case "Fish Set":
            addImg.src = "image/icons8-fish-and-vegetables-50.png"
            addDesc.innerHTML = "Original recepi comes with fish set, vegetables and drinks"
            addFood.innerHTML = "Fish Set"
            sizeImg1.src = "image/icons8-fish-and-vegetables-50.png"
            sizeImg2.src = "image/icons8-fish-and-vegetables-50.png"
            sizeImg3.src = "image/icons8-fish-and-vegetables-50.png"
            price = 39.99
            break
        case "Pizza":
            addImg.src = "image/icons8-eights-64.png"
            addDesc.innerHTML = "Original recepi comes with pizza, vegetables and drinks"
            addFood.innerHTML = "Pizza"
            sizeImg1.src = "image/icons8-eights-64.png"
            sizeImg2.src = "image/icons8-eights-64.png"
            sizeImg3.src = "image/icons8-eights-64.png"
            price = 20.99
            break
        case "Turkey":
            addImg.src = "image/icons8-thanksgiving-turkey-64.png"
            addDesc.innerHTML = "Original recepi comes with trukey, vegetables and drinks"
            addFood.innerHTML = "Turkey"
            sizeImg1.src = "image/icons8-thanksgiving-turkey-64.png"
            sizeImg2.src = "image/icons8-thanksgiving-turkey-64.png"
            sizeImg3.src = "image/icons8-thanksgiving-turkey-64.png"
            price = 29.99
            break
        case "Banana Split":
            addImg.src = "image/icons8-banana-split-100.png"
            addDesc.innerHTML = "Original recepi comes with banana split and drinks"
            addFood.innerHTML = "Banana Split"
            sizeImg1.src = "image/icons8-banana-split-100.png"
            sizeImg2.src = "image/icons8-banana-split-100.png"
            sizeImg3.src = "image/icons8-banana-split-100.png"
            price = 13.99
            break
        case "Cinnamon Roll":
            addImg.src = "image/icons8-cinnamon-roll-48.png"
            addDesc.innerHTML = "Original recepi comes with cinnamon roll and drinks"
            addFood.innerHTML = "Cinnamon Roll"
            sizeImg1.src = "image/icons8-cinnamon-roll-48.png"
            sizeImg2.src = "image/icons8-cinnamon-roll-48.png"
            sizeImg3.src = "image/icons8-cinnamon-roll-48.png"
            price = 9.99
            break
        case "Ice Cream":
            addImg.src = "image/icons8-ice-pop-pink-100.png"
            addDesc.innerHTML = "Original recepi comes with ice cream and drinks"
            addFood.innerHTML = "Ice Cream"
            sizeImg1.src = "image/icons8-ice-pop-pink-100.png"
            sizeImg2.src = "image/icons8-ice-pop-pink-100.png"
            sizeImg3.src = "image/icons8-ice-pop-pink-100.png"
            price = 9.99
            break
        case "Macaron":
            addImg.src = "image/icons8-macaron-64.png"
            addDesc.innerHTML = "Original recepi comes with macaron and drinks"
            addFood.innerHTML = "Macaron"
            sizeImg1.src = "image/icons8-macaron-64.png"
            sizeImg2.src = "image/icons8-macaron-64.png"
            sizeImg3.src = "image/icons8-macaron-64.png"
            price = 4.99
            break
        case "Bagel":
            addImg.src = "image/icons8-bagel-48.png"
            addDesc.innerHTML = "Original recepi comes with begel and drinks"
            addFood.innerHTML = "Begel"
            sizeImg1.src = "image/icons8-bagel-48.png"
            sizeImg2.src = "image/icons8-bagel-48.png"
            sizeImg3.src = "image/icons8-bagel-48.png"
            price = 12.99
            break
        case "French Fries":
            addImg.src = "image/icons8-french-fries-48.png"
            addDesc.innerHTML = "Original recepi comes with french fries and drinks"
            addFood.innerHTML = "French Fries"
            sizeImg1.src = "image/icons8-french-fries-48.png"
            sizeImg2.src = "image/icons8-french-fries-48.png"
            sizeImg3.src = "image/icons8-french-fries-48.png"
            price = 6.99
            break
        case "Potato Chip":
            addImg.src = "image/icons8-potato-chips-48.png"
            addDesc.innerHTML = "Original recepi comes with potato chip and drinks"
            addFood.innerHTML = "Potato Chip"
            sizeImg1.src = "image/icons8-potato-chips-48.png"
            sizeImg2.src = "image/icons8-potato-chips-48.png"
            sizeImg3.src = "image/icons8-potato-chips-48.png"
            price = 7.99
            break
    }
}
function selected(){
    if(size !== "" && drink !== ""){
        add.style.display = "block"
    }
}