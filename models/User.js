const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    first_name: String,
    last_Name:  String,
    email:      String,
    picture:    String
})


module.exports = mongoose.model("User", UserSchema)
