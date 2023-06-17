const mongoose = require("mongoose")

const schema = new mongoose.Schema({
    uid: String,
    username: String,
    email: String,
    password: String,
    first_name: String,
    last_name: String,
    created_at: Date,
    updated_at: Date

}) //schema is defined
 
const usersModel = mongoose.model("user", schema) //created model 

module.exports = usersModel