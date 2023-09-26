import React, { useEffect, useState } from 'react'
import {  useNavigate } from 'react-router-dom';

function Login() {
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const navigate=useNavigate();

    useEffect(()=>{
        const auth=localStorage.getItem('user');
        if(auth){
            navigate('/')
        }
    })

    async function handleLogin(){
        console.log(email,password);
        let result=await fetch('http://localhost:5000/login',{
            method:'post',
            body:JSON.stringify({email,password}),
            headers:{
                'Content-Type':'application/json'
              },
        })
        result =await result.json()
        console.log(result);
        if(result.name){
         localStorage.setItem('user',JSON.stringify(result))
         navigate('/')
        }
        else{
            alert("please enter correct details");
        }
    }
  return (
    <div className='login'>
        <h1>Login</h1>
        <input className='inputBox' type="text" placeholder='Enter Email' value={email} onChange={(e)=>setEmail(e.target.value)} />
        <input className='inputBox' type="password" placeholder='Enter Password' value={password} onChange={(e)=>setPassword(e.target.value)} />
        <button onClick={handleLogin} className='appbutton' type='button'>Login</button>
    </div>
  )
}

export default Login