import React from 'react'
import { Link } from 'react-router-dom'
export default function Register() {
  return (
    <div className='login-container'>
        <div className='form-container'>
            <h2> Register | AgroShare</h2>
            <label htmlFor='email'>Email</label>
            <input type='email' id="email"  />
            <label htmlFor='name'>Full Name</label>
            <input type='text' id="name"  />
            <label htmlFor='password'>Password</label>
            <input type='password' id="password"  />
            <button>Login</button>
            <p>Already have account: <Link  to='/login'>Login</Link></p>

        </div>
      
    </div>
  )
}
