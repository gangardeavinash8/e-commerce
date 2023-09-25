import React from 'react'
import { useState } from 'react'

function Signup() {
    const [name,setName]=useState('')
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')

    function collectData(){

        console.log(name,email,password);

    }
  return (
    <div className='register' >
        <h1>Register</h1>
        <input className='inputBox' type="text" placeholder='Enter name'value={name} onChange={(e)=>setName(e.target.value)} />

        <input className='inputBox'  type="email" placeholder='Enter email' value={email} onChange={(e)=>setEmail(e.target.value)}/>

        <input className='inputBox'  type="password" placeholder='Enter password' value={password} onChange={(e)=>setPassword(e.target.value)} />

        <button onClick={collectData} className='appbutton' type='button'>Sign Up</button>
    </div>
  )
}

export default Signup