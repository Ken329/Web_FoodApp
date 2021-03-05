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
}
module.exports = dbService