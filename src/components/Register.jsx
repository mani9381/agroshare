import React ,{useState}from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

export default function Register() {

  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const [name, setName] = useState("")
  const [loading,setLoading] = useState(false)
   
  const handleRegister = (e)=>{
    e.preventDefault()
    setLoading(true)
    axios.post('http://localhost:5000/api/v1/users/register',{email:email,name:name,password:password})
    .then((res)=>{
      setEmail("")
      setName("")
      setPassword("")
      console.log(res)
      setLoading(false)
    }).catch((err)=>{
      setLoading(false)
      console.log(err)
    })
  }
  return (
    <div className='login-container'>
        <div className='form-container'>
            <h2 style={{textAlign:"center"}}> Register | AgroShare</h2>
            <label htmlFor='email'>Email</label>
            <input type='email' placeholder='abc@example.com' id="email" value={email} onChange={e=>setEmail(e.target.value)}  />
            <label htmlFor='name'>Full Name</label>
            <input type='text' placeholder='John Doe' id="name" value={name}  onChange={e=>setName(e.target.value)} />
            <label htmlFor='password'>Password</label>
            <input type='password' placeholder='password' value={password} id="password" onChange={e=>setPassword(e.target.value)}  />
            <button onClick={e=>handleRegister(e)}>{loading ? "Please wait..." : "Register"}</button>
            <p>Already have account: <Link  to='/login'>Login</Link></p>

        </div>
      
    </div>
  )
}
