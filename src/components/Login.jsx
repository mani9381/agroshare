import React from 'react'
import { Link ,useNavigate} from 'react-router-dom'
import { useState } from 'react'
import { useAuth } from './AuthContext'

export default function Login() {
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [loading,setLoading] = useState(false)


    const {login}  = useAuth()
    const navigate = useNavigate()

    const handleLogin  = (e)=>{
        e.preventDefault()
        setLoading(true)
        login(email,password)
        .then((res)=>{
            if(res.auth){
                setLoading(false)
                navigate('/dashboard')
            }
            else{
                setLoading(false)
                alert(res.ack)
            }
        }) 
    }

  return (
    <div className='login-container'>
        <div className='form-container'>
            <h2 style={{textAlign:"center"}}>Login | AgroShare</h2>
            <label htmlFor='email'>Email</label>
            <input type='email' id="email" placeholder='abc@example.com' value={email} onChange={e=>setEmail(e.target.value)}  />
            <label htmlFor='password'>Password</label>
            <input type='password' id="password" placeholder='password' value={password}  onChange={e=>setPassword(e.target.value)} />
            <button onClick={e=>handleLogin(e)} >{loading ? "Please wait...":"Login"}</button>
            <div>
                <p>Don't have account: <Link to='/register'>register</Link></p>
                <p>Don't remember password: <Link  to='#'>reset</Link></p>
            </div>
        </div>
      
    </div>
  )
}
