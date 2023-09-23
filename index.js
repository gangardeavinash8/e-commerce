const express=require('express')

const app= express()

app.get('/user',(req,res)=>{
    console.log("hello");
    res.send({
        name:'avinash',
        id:3167
    })
})

app.listen(4000,()=>{
    console.log("listning on port 4000")
})