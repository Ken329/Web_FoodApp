document.getElementById('food_menu_fast').style.color = "#F01783"

document.getElementById('burger_div').addEventListener('click', function(){
    window.open('/openAdding?food='+'Beef Burger', "_self")
})
document.getElementById('taco_div').addEventListener('click', function(){
    window.open('/openAdding?food='+'Taco', "_self")
})
document.getElementById('spring_div').addEventListener('click', function(){
    window.open('/openAdding?food='+'Spring Roll', "_self")
})
document.getElementById('hotdog_div').addEventListener('click', function(){
    window.open('/openAdding?food='+'Hotdog', "_self")
})