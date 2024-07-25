import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div>
        <div className='home-conatiner'>
            <div className='nav-container'>
                <div className="logo">
                    <h1>AgroShare</h1>
                </div>
                <div className="nav-links">
                    <Link className='link'  to="/register">Register</Link>
                    <Link  className='link' to="/login"> Login</Link>
                </div>
            </div>
            <div className='home-body'>
                isuhriuhyiuh
            </div>

        </div>
    </div>
  )
}
