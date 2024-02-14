//import mongoose

const mongoose=require('mongoose')

//create userSchema

const userSchema=new mongoose.Schema({
    username:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,

    },
    password:{
        type:String,
        required:true
    },
    github:{
        type:String,
    },
    link:{
        type:String, 
    },
    profile:{
        type:String,
    }

})

//create model          -users(model name)-mongodb collection

const users=mongoose.model("users",userSchema)

module.exports=users
