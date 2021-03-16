var container = document.getElementById('order_container')
var quantity = document.getElementById('track_qauntity')
var tTotal = document.getElementById('track_total')
var tTax = document.getElementById('track_tax')
var tAmount = document.getElementById('track_amount')
var foodImage
var count = 0
var total = 0
var tax = 0
var amount = 0

document.addEventListener('DOMContentLoaded', function(){
    var id = document.getElementById('track_id').innerText
    fetch('/getTrackingData?id='+id, {
        method: "POST"
    })
    .then(res => res.json())
    .then(data => addData(data['data']))
})
function addData(data){
    let inner = ""
    data.forEach(function({food, size, drink, price, quantity, id, track_id}){
        filterName(food)
        addPrice(price)
        count += parseInt(quantity)
        inner += `<div class="order-div">`
        inner += `<img src="${foodImage}" alt="Bagel">`
        inner += `<div>`
        inner += `<p>Food: ${food}</p>`
        inner += `<p>Size: ${size}</p>`
        inner += `<p>Drink: ${drink}</p>`
        inner += `</div>`
        inner += `<div>`
        inner += `<p>Quantity: ${quantity}</p>`
        inner += `</div>`
        inner += `<div>`
        inner += `<p>Price: ${price}</p>`
        inner += `</div>`
        inner += `</div>`
    })
    container.innerHTML = inner
    quantity.innerHTML = count.toString()
    tTotal.innerHTML = total.toFixed(2).toString()
    tTax.innerHTML = tax.toString()
    amount = parseFloat(total) + parseFloat(tax)
    tAmount.innerHTML = amount.toFixed(2).toString()
}
function addPrice(price){
    var itemPrice = parseFloat(price)
    total += itemPrice
    var itemTax = (total / 100) * 6
    tax = itemTax.toFixed(2)
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