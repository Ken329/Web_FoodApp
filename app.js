const express = require('express')
const app = express()
const port = 3000
const parser = require('body-parser')
const { check, validateResult } = require('express-validator')
const dbService = require('./public/js/dbService')
var username

const urlEncoded = parser.urlencoded({extended : false})

app.use(express.static('public'))
app.use('/css', express.static(__dirname + 'public/css'));
app.use('/js', express.static(__dirname + 'public/js'));
app.use('/image', express.static(__dirname + 'public/image'));

app.set('views', './views')
app.set('view engine', 'ejs')

app.get('', (req, res)=>{
    res.render('index')
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