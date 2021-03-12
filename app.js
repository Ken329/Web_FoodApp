const express = require('express')
const app = express()
const expressLayout = require('express-ejs-layouts')
const port = 3000
const parser = require('body-parser')
const { check, validateResult } = require('express-validator')
const dbService = require('./public/js/dbService')
var username
var checkUser = false
var food

const urlEncoded = parser.urlencoded({extended : false})

app.use(express.static('public'))
app.use('/css', express.static(__dirname + 'public/css'));
app.use('/js', express.static(__dirname + 'public/js'));
app.use('/image', express.static(__dirname + 'public/image'));

app.use(expressLayout)
app.set('views', './views')
app.set('view engine', 'ejs')

app.get('', (req, res)=>{
    checkUser = false
    res.render('index', {text: 'Login/Sign Up'})
})
app.get('/user_site', (req, res)=>{
    checkUser = true
    res.render('index', {text: username})
})
app.get('/authorized', (req, res)=>{
    res.json({user : checkUser})
})
app.get('/fastFood', (req, res)=>{
    res.render('fastFood', {text: username})
})
app.get('/mainFood', (req, res)=>{
    res.render('mainFood', {text: username})
})
app.get('/dessertFood', (req, res)=>{
    res.render('dessertFood', {text: username})
})
app.get('/appertizerFood', (req, res)=>{
    res.render('appertizerFood', {text: username})
})
app.get('/drinkFood', (req, res)=>{
    res.render('drinkFood', {text: username})
})
app.get('/openAdding', (req, res)=>{
    res.render('addingFood', {text: username})
})
app.get('/cart', (req, res)=>{
    res.render('cart', {text : username})
})
app.get('/getUsername', urlEncoded, (req, res)=>{
    const user = req.query.user

    const db = dbService.getdbInstance()
    const result = db.getUsername(user)
    result
    .then(data => {
        if(data.length === 0){
            res.json({success : true})
        }else{
            res.json({success : false})
        }
    })
    .then(err => console.log(err))
})
app.get('/getCartFood', (req, res)=>{
    const db = dbService.getdbInstance()
    const result = db.getCartFood(username)
    result
    .then(data => res.json({data : data}))
    .then(err => console.log(err))
})

app.get('/getCartDrink', (req, res)=>{
    const db = dbService.getdbInstance()
    const result = db.getCartDrink(username)
    result
    .then(data => res.json({data : data}))
    .then(err => console.log(err))
})
app.post('/addMealCart', urlEncoded, (req, res)=>{
    const meal = req.query.food
    const size = req.query.size
    const drink = req.query.drink
    const price = req.query.price

    const db = dbService.getdbInstance()
    const result = db.searchFoodCart(username, meal, size, drink)
    result
    .then(data => {
        if(data.length > 0){
            var quantity = parseInt(data[0].quantity)
            var newPrice = parseFloat(data[0].price)
            var singlePrice = newPrice / quantity
            quantity += 1
            singlePrice *= quantity
            var total = singlePrice.toFixed(2)
            var sTotal = total.toString()
            var sQuantity = quantity.toString()
            const result = db.updateFood(username, meal, size, drink, sTotal, sQuantity)
            result
            .then(data => res.json({success : true}))
            .then(err => console.log(err))
        }else{
            const result = db.addFood(username, meal, size, drink, price, "1")
            result
            .then(data => res.json({success : true}))
            .then(err => console.log(err))
        }
    })
    .then(err => console.log(err))
})
app.post('/addDrinkCart', urlEncoded, (req, res)=>{
    const drink = req.query.drink
    const price = req.query.price
    const db = dbService.getdbInstance()
    const result = db.searchDrink(username, drink)
    result
    .then(data => {
        if(data.length > 0){
            var newQuantity = parseInt(data[0].quantity)
            var newPrice = parseFloat(data[0].price) 
            var getSingle = newPrice / newQuantity
            newQuantity += 1
            getSingle *= newQuantity
            
            var sQuantity = newQuantity.toString()
            var sPrice = getSingle.toString()
            const result = db.updateDrink(username, drink, sPrice, sQuantity)
            result
            .then(data => res.json({success : true}))
            .then(err => console.log(err))
        }else{
            const result = db.addDrink(username, drink, price, "1")
            result
            .then(data => res.json({success : true}))
            .then(err => console.log(err))
        }
    })
})
app.post('/deleteFood', urlEncoded, (req, res)=>{
    const id = req.query.id

    const db = dbService.getdbInstance()
    const result = db.deleteFood(id)
    result
    .then(data => res.json({success : true}))
    .then(err => console.log(err))
})
app.post('/deleteDrink', urlEncoded, (req, res)=>{
    const id = req.query.id

    const db = dbService.getdbInstance()
    const result = db.deleteDrink(id)
    result
    .then(data => res.json({success : true}))
    .then(err => console.log(err))
})
app.post('/signUp', urlEncoded, (req, res)=>{
    const user = req.query.user
    const pass = req.query.pass
    const birth = req.query.birth
    const phone = req.query.phone
    
    const db = dbService.getdbInstance()
    const result = db.signUpUser(user, pass, birth, phone)
    result
    .then(data => res.json({success : true}))
    .then(err => console.log(err))
})
app.get('/login', urlEncoded, (req, res)=>{
    const user = req.query.user
    const pass = req.query.pass
    const db = dbService.getdbInstance()
    const result = db.loginUser(user, pass)
    result
    .then(data => {
        if(data.length === 0){
            res.json({success : false})
        }else{
            username = data[0].user_username
            res.json({success : username})
        }
    })
    .then(err => console.log(err))
})
app.listen(port, () => console.info(`Listening to port ${port}`))