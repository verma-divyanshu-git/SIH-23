const Mongoose = require('mongoose');
const userSchema =  new Mongoose.Schema({
    firstName:String,
    lastName:String,
    password:String,
    organization:String,
    emailAddress:String,
    contactNumber:String
});
const User = Mongoose.model('User',userSchema)
module.exports =User;