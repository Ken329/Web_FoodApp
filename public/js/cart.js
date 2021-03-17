var food = document.getElementById('cart_food')
var size = document.getElementById('cart_size')
var drink = document.getElementById('cart_drink')
var price = document.getElementById('cart_price')
var quan = document.getElementById('cart_quan')
var minus = document.getElementById('cart_minus')
var add = document.getElementById('cart_add')
var foodContainer = document.getElementById('food_container')
var checkoutContainenr = document.getElementById('checkout')

var noFood = document.getElementById('no_food')

var cItem = document.getElementById('checkout_item')
var cTotal = document.getElementById('checkout_total')
var cTax = document.getElementById('checkout_tax')
var cAmmout = document.getElementById('checkout_ammount')

var checkout = document.getElementById('checkout_btn')

var foodImage = ""

var total = 0
var quan = 0
var tax = 0
var amount = 0

document.addEventListener("DOMContentLoaded", function(){
    fetch('/getCartFood', {
        method: "GET"
    })
    .then(res => res.json())
    .then(data => putFoodData(data['data']))
})
function putFoodData(data){
    if(data.length === 0){
        noFood.style.display = "block"
        return
    }
    checkoutContainenr.style.display = 'flex'
    checkout.style.display = "block"
    let newTask = ""
    data.forEach(function({food, size, drink, price, quantity, id}){
        filterName(food)
        addPrice(quantity, price)
        newTask += `<div class="food-content-div">`
        newTask += `<img src="${foodImage}" alt="bagel">`
        newTask += `<div class="content-div">`
        newTask += `<p id="cart_food">Food: ${food}</p>`
        newTask += `<p id="cart_size">Size: ${size}</p>`
        newTask += `<p id="cart_drink">Drink: ${drink}</p>`
        newTask += `</div>`
        newTask += `<div class="content-div">`
        newTask += `<p id="cart_price">Price: ${price}</p>`
        newTask += `<div class="content-price">`
        newTask += `<p id="cart_quan">Quantity: ${quantity}</p>`
        newTask += `</div>`
        newTask += `</div>`
        newTask += `<div class="new-content-div">`
        newTask += `<i data-id="${id}" class="fas fa-trash-alt"></i>`
        newTask += `<i data-id="${id}" class="fas fa-edit"></i>`
        newTask += `</div>`
        newTask += `</div>`
    })
    foodContainer.innerHTML = newTask
    insertCheck()
}
document.getElementById('food_container').addEventListener('click', function(event){
    if(event.target.className === "fas fa-trash-alt"){
        deleteFood(event.target.dataset.id)
    }
    if(event.target.className === "fas fa-edit"){
        updateFood(event.target.dataset.id)
    }
})
checkout.addEventListener('click', function(){
    var number = Math.floor((Math.random() * 1000) + 1)
    fetch('/checkout?number='+number, {
        method: "POST"
    })
    .then(res => res.json())
    .then(data => {
        if(data.success){
            window.open('/success', "_self")
        }
    })
})
function insertCheck(){
    var newTotal = total.toFixed(2)
    cItem.innerHTML = quan.toString()
    cTotal.innerHTML = "RM"+newTotal.toString()
    cTax.innerHTML = "RM"+tax.toString()
    amount = parseFloat(newTotal) + parseFloat(tax)
    var newAmount = amount.toFixed(2)
    cAmmout.innerHTML = "RM"+newAmount.toString()
}
function addPrice(item, price){
    var itemPrice = parseFloat(price)
    total += itemPrice
    var itemQuantity = parseInt(item)
    quan += itemQuantity
    var itemTax = (total / 100) * 6
    tax = itemTax.toFixed(2)
}
function updateFood(id){
    fetch('/getFoodInfo?id='+id, {
        method: "POST"
    })
    .then(res => res.json())
    .then(data => {
        goAdding(data['data'])
    })
}
function goAdding(data){
    var addId = data[0].id
    var addFood = data[0].food
    var addSize = data[0].size
    var addDrink = data[0].drink
    window.open('/openAdding?food='+addFood+'&action=update'+'&size='+addSize+'&drink='+addDrink+'&id='+addId, "_self")
}
function deleteFood(id){
    fetch('/deleteFood?id='+id, {
        method: "POST"
    })
    .then(res => res.json())
    .then(data =>{
        if(data.success){
            window.location.reload()
        }
    })
}
function filterName(food){
    switch(food){
        case "Taco":
            foodImage = "image/icons8-taco-64.png"
            break;
        case "Beef Burger":
            foodImage = "image/icons8-beef-burger-64.png"
            break;
        case "Spring Roll":
            foodImage = "image/icons8-spring-roll-48.png"
            break;
        case "Hotdog":
            foodImage = "image/icons8-frankfurter-64.png"
            break;
        case "Japanese Bento":
            foodImage = "image/icons8-bento-48.png"
            break;
        case "Fish Set":
            foodImage = "image/icons8-fish-and-vegetables-50.png"
            break;
        case "Pizza":
            foodImage = "image/icons8-eights-64.png"
            break;
        case "Turkey":
            foodImage = "image/icons8-thanksgiving-turkey-64.png"
            break;
        case "Banana Split":
            foodImage = "image/icons8-banana-split-100.png"
            break;
        case "Cinnamon Roll":
            foodImage = "image/icons8-cinnamon-roll-48.png"
            break;
        case "Ice Cream":
            foodImage = "image/icons8-ice-pop-pink-100.png"
            break;
        case "Macaron":
            foodImage = "image/icons8-macaron-64.png"
            break;
        case "Bagel":
            foodImage = "image/icons8-bagel-48.png"
            break;
        case "French Fries":
            foodImage = "image/icons8-french-fries-48.png"
            break;
        case "Potato Chip":
            foodImage = "image/icons8-potato-chips-48.png"
            break;
        case "Coconut Cocktail":
            foodImage = "image/icons8-coconut-cocktail-48.png"
            break;
        case "Coffee":
            foodImage = "image/icons8-coffee-48.png"
            break;
        case "Special Coffee":
            foodImage = "image/icons8-kawaii-coffee-64.png"
            break;
        case "Lemonade":
            foodImage = "image/icons8-lemomnade-48.png"
            break;
        case "Milkshake":
            foodImage = "image/icons8-milkshake-48.png"
            break;
    }
}