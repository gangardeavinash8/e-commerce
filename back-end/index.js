const express=require('express')
const cors=require('cors')
//const mongoose = require('mongoose')
require('./db/config')
const User=require('./db/User')
const app=express()
app.use(express.json())
app.use(cors())
app.post('/register',async (req,resp)=>{
    const user=new User(req.body);
    const result= await user.save()
    resp.send(result)
})
// const connectDB=async ()=>{
//     try{
//     mongoose.connect('mongodb://127.0.0.1:27017/e-comm',{useNewUrlParser:true})
//     const productSchema=new mongoose.Schema({})
//     const product = mongoose.model('products',productSchema)
//     const data=await product.find()
//     console.warn(data)
//     }
//     catch(e){
//         console.log("error occured",e);
//     }
// }
// connectDB()

app.listen(5000,()=>{
    console.log("running on port 5000");
})