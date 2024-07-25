import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
export default function Login() {
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const handleLogin  = (e)=>{
        e.preventDefault()
        if(email && password){
            alert(`Hello ${email} your password ${password}`)
            setEmail('')
            setPassword('')
        }
        else
            alert('please enter email and password')
            
        
    }
  return (
    <div className='login-container'>
        <div className='form-container'>
            <h2>Login | AgroShare</h2>
            <label htmlFor='email'>Email</label>
            <input type='email' id="email" value={email} onChange={e=>setEmail(e.target.value)}  />
            <label htmlFor='password'>Password</label>
            <input type='password' id="password" value={password}  onChange={e=>setPassword(e.target.value)} />
            <button onClick={e=>handleLogin(e)}>Login</button>
            <div>
                <p>Don't have account: <Link to='/register'>register</Link></p>
                <p>Don't remember password: <Link  to='#'>reset</Link></p>
            </div>
        </div>
      
    </div>
  )
}
