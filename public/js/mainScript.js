document.getElementById('food_menu_main').style.color = "#F01783"

document.getElementById('bento_div').addEventListener('click', function(){
    window.open('/openAdding?food='+'Japanese Bento', "_self")
})
document.getElementById('fish_div').addEventListener('click', function(){
    window.open('/openAdding?food='+'Fish Set', "_self")
})
document.getElementById('pizza_div').addEventListener('click', function(){
    window.open('/openAdding?food='+'Pizza', "_self")
})
document.getElementById('turkey_div').addEventListener('click', function(){
    window.open('/openAdding?food='+'Turkey', "_self")
})