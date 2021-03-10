document.getElementById('food_menu_appertizer').style.color = "#F01783"

document.getElementById('bagel_div').addEventListener('click', function(){
    window.open('/openAdding?food='+'Bagel', "_self")
})
document.getElementById('fries_div').addEventListener('click', function(){
    window.open('/openAdding?food='+'French Fries', "_self")
})
document.getElementById('potato_div').addEventListener('click', function(){
    window.open('/openAdding?food='+'Potato Chip', "_self")
})