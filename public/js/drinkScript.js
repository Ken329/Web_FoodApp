document.getElementById('food_menu_drink').style.color = "#F01783"

document.getElementById('coconut_div').addEventListener('click', function(){
    fetch('/addDrinkCart?drink='+'coconut'+'&price='+'RM 19.99',{
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
    fetch('/addDrinkCart?drink='+'coffee'+'&price='+'RM 6.99',{
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
    fetch('/addDrinkCart?drink='+'special'+'&price='+'RM 13.99',{
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
    fetch('/addDrinkCart?drink='+'lemonade'+'&price='+'RM 8.99',{
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
    fetch('/addDrinkCart?drink='+'milk'+'&price='+'RM 13.99',{
        method: "POST"
    })
    .then(res => res.json())
    .then(data => {
        if(data.success){
            window.open('/user_site', "_self")
        }
    })
})