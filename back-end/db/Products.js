const mongoose=require('mongoose')

const productSchma=mongoose.Schema({
     name:String,
     price:String,
     category:String,
     userId:String,
     company:String
})

module.exports=mongoose.model("products",productSchma)