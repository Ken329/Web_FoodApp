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
                const query = "INSERT INTO `food`(`username`, `food`, `size`, `drink`, `price`, `quantity`, `id`, `position`, `track_id`) VALUES (?,?,?,?,?,?,?,?,?)"
                connection.query(query, [user, food, size, drink, price, quantity, null, "cart", 0], (err, result)=>{
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
    async getCartFood(user){
        try{
            const response = await new Promise((resolve, reject)=>{
                const query = "select * from food where username = '"+user+"' and position = 'cart'"
                connection.query(query, (err, result)=>{
                    if(err) throw err
                    resolve(result)
                })
            })
            return response
        }catch(err){
            console.log(err)
        }
    }
    async deleteFood(id){
        try{
            const response = await new Promise((resolve, reject)=>{
                const query = "delete from `food` where id = '"+id+"'"
                connection.query(query, (err, result)=>{
                    if (err) throw err
                    resolve(result)
                })
            })
            return response
        }catch(err){
            console.log(err)
        }
    }
    async checkoutFood(user, number){
        try{
            const response = await new Promise((resolve, reject)=>{
                const query = "UPDATE `food` SET `position`= 'checkout', track_id = ? WHERE username = ? and position = ?"
                connection.query(query, [number, user, "cart"], (err, result)=>{
                    if(err)throw err
                    resolve(result)
                })
            })
            return response
        }catch(err){
            console.log(err)
        }
    }
    async getTrackId(user){
        try{
            const response = await new Promise((resolve, reject)=>{
                const query = "select track_id from food where username = ? and position = ?"
                connection.query(query, [user, "checkout"], (err, result)=>{
                    if (err) throw err
                    resolve(result)
                })
            })
            return response
        }catch(err){
            console.log(err)
        }
    }
    async getTrackFood(id, user){
        try{
            const response = await new Promise((resolve, reject)=>{
                const query = "select * from food where username = ? and position = ? and track_id = ?"
                connection.query(query, [user, "checkout", id], (err, result)=>{
                    if (err) throw err
                    resolve(result)
                })
            })
            return response
        }catch(err){
            console.log(err)
        }
    }
    async getTrackingData(id, user){
        try{
            const response = await new Promise((resolve, reject)=>{
                const query = "select * from food where username = ? and track_id = ?"
                connection.query(query, [user, id], (err, result)=>{
                    if(err)throw err
                    resolve(result)
                })
            })
            return response
        }catch(err){
            console.log(err)
        }
    }
    async getFoodInfo(id){
        try{
            const response = await new Promise((resolve, reject)=>{
                const query = "select * from food where id = ?"
                connection.query(query, [id], (err, result)=>{
                    if(err)throw err
                    resolve(result)
                })
            })
            return response
        }catch(err){
            console.log(err)
        }
    }
    async updateFoodInfo(id, size, drink, price){
        try{
            const response = await new Promise((resolve, reject)=>{
                const query = "UPDATE `food` SET size = ?, drink = ?, price = ? WHERE id = ?"
                connection.query(query, [size, drink, price, id], (err, result)=>{
                    if(err)throw err
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