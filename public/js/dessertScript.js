document.getElementById('food_menu_dessert').style.color = "#F01783"

document.getElementById('banana_div').addEventListener('click', function(){
    window.open('/openAdding?food='+'Banana Split'+'&action=add', "_self")
})
document.getElementById('cinnamon_div').addEventListener('click', function(){
    window.open('/openAdding?food='+'Cinnamon Roll'+'&action=add', "_self")
})
document.getElementById('ice_div').addEventListener('click', function(){
    window.open('/openAdding?food='+'Ice Cream'+'&action=add', "_self")
})
document.getElementById('macaron_div').addEventListener('click', function(){
    window.open('/openAdding?food='+'Macaron'+'&action=add', "_self")
})