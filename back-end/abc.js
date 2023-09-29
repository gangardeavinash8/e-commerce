const mongoose=require('mongoose')

const express=require('express')


const app=express()

const connectDB= async()=>{
    mongoose.connect('mongodb://127.0.0.1:27017/e-commerce')
    console.log("database connected successfully");
    const productSchma=new mongoose.Schema({})
    const product=mongoose.model('product',productSchma)
    const data=await product.find()
    console.log(data);
}

connectDB()

app.listen(4000,()=>{
    console.log("app running on port 40000");
})