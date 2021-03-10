var fast = document.getElementById('food_menu_fast')
var main = document.getElementById('food_menu_main')
var dessert = document.getElementById('food_menu_dessert')
var appertizer = document.getElementById('food_menu_appertizer')
var drink = document.getElementById('food_menu_drink')

fast.addEventListener('click', function(){
    window.open('/fastFood', "_self")
})
main.addEventListener('click', function(){
    window.open('/mainFood', "_self")
})
dessert.addEventListener('click', function(){
    window.open('/dessertFood', "_self")
})
appertizer.addEventListener('click', function(){
    window.open('/appertizerFood', "_self")
})
drink.addEventListener('click', function(){
    window.open('/drinkFood', "_self")
})