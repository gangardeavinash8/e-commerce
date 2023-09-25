const express=require('express')
const mongoose = require('mongoose')
const app=express()
const connectDB=async ()=>{
    try{
    mongoose.connect('mongodb://127.0.0.1:27017/e-comm',{useNewUrlParser:true})
    const productSchema=new mongoose.Schema({})
    const product = mongoose.model('products',productSchema)
    const data=await product.find()
    console.warn(data)
    }
    catch(e){
        console.log("error occured",e);
    }
}
connectDB()

app.listen(5000)