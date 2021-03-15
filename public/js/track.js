var box = document.getElementById('track_box')
var newData = []
var newDataDrink = []
let inner = ""
var count = 0
var foodImage = ""

document.addEventListener("DOMContentLoaded", function(){
    fetch('/getTrackId', {
        method: "GET"
    })
    .then(res => res.json())
    .then(data => filter(data['data']))
})
function filter(data){
    newData.push(data[0].track_id)
    var number = (data[0].track_id)
    for(var i = 1; i < data.length; i++){
        if(number !== data[i].track_id){
            newData.push(data[i].track_id)
            number = data[i].track_id
        }
    }
    getFood()
}
function getFood(){
    for(var i = 0; i < newData.length; i++){
        fetch('/getTrackFood?id='+newData[i], {
            method:"POST"
        })
        .then(res => res.json())
        .then(data => putFoodData(data['data']))
    }
}
function putFoodData(data){
    inner += `<div class="track-box">`
    inner += `<div class="track-title">`
    inner += `<p class="track-id">Tracking Number: ${newData[count]}</p>`
    inner += `<button id="track" class="track-button">Track Order</button>`
    inner += `<button id="recieve" class="track-button">Order Recieve</button>`
    inner += `</div>`
    inner += `<div id="track_body">`    
    count++
    data.forEach(function({food, size, drink, price, quantity, id, track_id}){
        filterName(food)
        inner += `<div class="track-body">`
        inner += `<img src="${foodImage}" alt="Bagel">`
        inner += `<div class="track-body-div">`
        inner += `<div class="body-div">`
        inner += `<div>Food: ${food}</div>`
        inner += `<div>Price: ${price}</div>`
        inner += `<div>Quantity: ${quantity}</div>`
        inner += `</div>`
        inner += `<div class="new-body-div">`
        inner += `<ul>`
        inner += `<li>Size: ${size}</li>`
        inner += `<li>Drink: ${drink}</li>`
        inner += `</ul>`
        inner += `</div>`
        inner += `</div>`
        inner += `</div>`
    })
    inner += `</div>`
    inner += `</div>`
    box.innerHTML = inner
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