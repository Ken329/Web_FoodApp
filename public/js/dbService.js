const mysql = require('mysql')
const {response} = require('express')
let instance = null;

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'food app'
})

connection.connect((err)=>{
    if(err){
        console.log(err.message)
    }else{
        console.log('Database ' + connection.state)
    }
})

class dbService{
    static getdbInstance(){
        return instance ? instance : new dbService()
    }
    async signUpUser(user, pass, birth, phone){
        try{
            const response = await new Promise((resolve, reject)=>{
                const query = "INSERT INTO `user`(`user_id`, `user_username`, `user_password`, `user_birth`, `user_phone`) VALUES (?,?,?,?,?)"
                connection.query(query, [null, user, pass, birth, phone], (err, result)=>{
                    if(err)throw err
                    resolve(result)
                })
            })
            return response
        }catch(err){
            console.log(err)
        }
    }
    async getUsername(user){
        try{
            const response = await new Promise((resolve, reject)=>{
                const query = "SELECT * FROM `user` WHERE user_username = '"+user+"'"
                connection.query(query, (err, result)=>{
                    if(err)throw err
                    resolve(result)
                })
            })
            return response
        }catch(err){
            console.log(err)
        }
    }
    async loginUser(user, pass){
        try{
            const response = await new Promise((resolve, reject)=>{
                const query = "SELECT user_username, user_password FROM `user` WHERE user_username = '"+user+"' and user_password = '"+pass+"'"
                connection.query(query, (err, result)=>{
                    if(err)throw err
                    resolve(result)
                })
            })
            return response
        }catch(err){
            console.log(err)
        }
    }
    async addFood(user, food, size, drink, price, quantity){
        try{
            const response = await new Promise((resolve, reject)=>{
                const query = "INSERT INTO `food`(`username`, `food`, `size`, `drink`, `price`, `quantity`) VALUES (?,?,?,?,?,?)"
                connection.query(query, [user, food, size, drink, price, quantity], (err, result)=>{
                    if(err) throw err
                    resolve(result)
                })
            })
            return response
        }catch(err){
            console.log(err)
        }
    }
    async updateFood(user, food, size, drink, price, quantity){
        try{
            const response = await new Promise((resolve, reject)=>{
                const query = "UPDATE `food` SET `quantity`= ? , `price` = ? WHERE username = ? and food = ? and size = ? and drink = ?"
                connection.query(query, [quantity, price, user, food, size, drink], (err, result)=>{
                    if(err) throw err
                    resolve(result)
                })
            })
            return response
        }catch(err){
            console.log(err)
        }
    }
    async searchFoodCart(user, food, size, drink){
        try{
            const response = await new Promise((resolve, reject)=>{
                const query = "SELECT * FROM `food` WHERE username = ? and food = ? and size = ? and drink = ?"
                connection.query(query, [user, food, size, drink], (err, result)=>{
                    if(err) throw err
                    resolve(result)
                })
            })
            return response
        }catch(err){
            console.log(err)
        }
    }
    async addDrink(user, drink, price, quantity){
        try{
            const response = await new Promise((resolve, reject)=>{
                const query = "INSERT INTO `drink`(`username`, `drink`, `price`, `quantity`) VALUES (?,?,?,?)"
                connection.query(query, [user, drink, price, quantity], (err, result)=>{
                    if (err) throw err
                    resolve(result)
                })
            })
            return response
        }catch(err){
            console.log(err)
        }
    }
    async searchDrink(user, drink){
        try{
            const response = await new Promise((resolve, reject)=>{
                const query = "SELECT * FROM `drink` WHERE username = ?and drink = ?"
                connection.query(query, [user, drink], (err, result)=>{
                    if(err) throw err
                    resolve(result)
                })
            })
            return response
        }catch(err){
            console.log(err)
        }
    }
    async updateDrink(user, drink, price, quantity){
        try{
            const response = await new Promise((resolve, reject)=>{
                const query = "UPDATE `drink` SET `quantity`= ? , `price` = ? WHERE username = ? and drink = ?"
                connection.query(query, [quantity, price, user, drink], (err, result)=>{
                    if(err) throw err
                    resolve(result)
                })
            })
            return response
        }catch(err){
            console.log(err)
        }
    }
}
module.exports = dbService