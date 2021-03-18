var container = document.getElementById('history_container')
var clear = document.getElementById('history_btn')
var noFood = document.getElementById('no_history')
var inner = ""
var foodImage = ""
var foodQuantity = 0
var foodPrice = 0
var foodTax = 0
var foodAmount = 0

document.addEventListener("DOMContentLoaded",function(){
    fetch('getHistoryData', {
        method: "GET"
    })
    .then(res => res.json())
    .then(data => putHistoryData(data['data']))
})
clear.addEventListener('click', function(){
    fetch('/clearHistory', {
        method: "GET"
    })
    .then(res => res.json())
    .then(data => {
        if(data.success){
            window.location.reload()
        }
    })
})
function putHistoryData(data){
    if(data.length === 0){
        noFood.style.display = "block"
        clear.style.display = "none"
        return
    }
    data.forEach(function({track_id, post_date}){
        fetch('/getFoodHistory?id='+track_id, {
            method: "GET"
        })
        .then(res => res.json())
        .then(data => putAllData(data['data'], post_date, track_id))
    })
}
function putAllData(data, date, id){
    foodQuantity = 0
    foodPrice = 0
    foodTax = 0
    foodAmount = 0
    inner += `<div class="history-content">`
    inner += `<div class="history-title">`
    inner += `<p>Tracking Number: ${id}</p>`
    inner += `<p>Delivered Date: ${date}</p>`
    inner += `</div>`
    data.forEach(function({food, size, drink, price, quantity}){
        filterName(food)
        calculateBill(quantity, price)
        inner += `<div class="history-div">`
        inner += `<img src="${foodImage}" alt="ham">`
        inner += `<div class="history-fDiv">`
        inner += `<p>${food}</p>`
        inner += `<p>It is ${size} size and comes with a ${drink}</p>`
        inner += `</div>`
        inner += `<div class="history-sDiv">`
        inner += `<p>Price: RM ${price}</p>`
        inner += `<p>Quantity: ${quantity}</p>`
        inner += `</div>`
        inner += `</div>`
    })
    getBill()
    inner += `<div class="history-bill">`
    inner += `<div class="history-bill-div">`
    inner += `<div>Quantity: ${foodQuantity}</div>`
    inner += `<div>Total: RM${foodPrice}</div>`
    inner += `<div>Tax 6%: RM${foodTax}</div>`
    inner += `<div>Total Amount: RM${foodAmount}</div>`
    inner += `</div>`
    inner += `</div>`
    inner += `</div>`
    container.innerHTML = inner
}
function calculateBill(quantity, price){
    foodQuantity += parseInt(quantity)
    foodPrice += parseFloat(price)
}
function getBill(){
    foodPrice = foodPrice.toFixed(2)
    var newTax = (foodPrice / 100) * 6
    foodTax = newTax.toFixed(2)
    foodAmount = parseFloat(foodPrice) + parseFloat(foodTax)
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