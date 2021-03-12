document.getElementById('food_menu_drink').style.color = "#F01783"

document.getElementById('coconut_div').addEventListener('click', function(){
    fetch('/addDrinkCart?drink='+'Coconut Cocktail'+'&price='+'19.99',{
        method: "POST"
    })
    .then(res => res.json())
    .then(data => {
        if(data.success){
            window.open('/user_site', "_self")
        }
    })
})
document.getElementById('coffee_div').addEventListener('click', function(){
    fetch('/addDrinkCart?drink='+'Coffee'+'&price='+'6.99',{
        method: "POST"
    })
    .then(res => res.json())
    .then(data => {
        if(data.success){
            window.open('/user_site', "_self")
        }
    })
})
document.getElementById('special_div').addEventListener('click', function(){
    fetch('/addDrinkCart?drink='+'Special Coffee'+'&price='+'13.99',{
        method: "POST"
    })
    .then(res => res.json())
    .then(data => {
        if(data.success){
            window.open('/user_site', "_self")
        }
    })
})
document.getElementById('lemonade_div').addEventListener('click', function(){
    fetch('/addDrinkCart?drink='+'Lemonade'+'&price='+'8.99',{
        method: "POST"
    })
    .then(res => res.json())
    .then(data => {
        if(data.success){
            window.open('/user_site', "_self")
        }
    })
})
document.getElementById('milk_div').addEventListener('click', function(){
    fetch('/addDrinkCart?drink='+'Milkshake'+'&price='+'13.99',{
        method: "POST"
    })
    .then(res => res.json())
    .then(data => {
        if(data.success){
            window.open('/user_site', "_self")
        }
    })
})