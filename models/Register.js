
const mongoose = require('mongoose')

// here using register schema for main input fields we want
const registerSchema = new mongoose.Schema({

    name:{
        type:String,
        required:true
    },
    phone:{
        type:Number,
        required:true
    },
    email:{
        type:String,
        required:true
    },

    password:{
        type:String,
        default:false
    },
    confirmPassword:{
        type:String,
        required:true
    }
})

module.exports = mongoose.model('Register',registerSchema)