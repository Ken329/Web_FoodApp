document.getElementById('food_menu_main').style.color = "#F01783"

document.getElementById('bento_div').addEventListener('click', function(){
    window.open('/openAdding?food='+'Japanese Bento'+'&action=add', "_self")
})
document.getElementById('fish_div').addEventListener('click', function(){
    window.open('/openAdding?food='+'Fish Set'+'&action=add', "_self")
})
document.getElementById('pizza_div').addEventListener('click', function(){
    window.open('/openAdding?food='+'Pizza'+'&action=add', "_self")
})
document.getElementById('turkey_div').addEventListener('click', function(){
    window.open('/openAdding?food='+'Turkey'+'&action=add', "_self")
})