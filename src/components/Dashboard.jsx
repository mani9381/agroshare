import React from 'react'
import { useAuth } from './AuthContext'
import { Link, Outlet } from 'react-router-dom'
export default function Dashboard() {
  const { logout } = useAuth()
  const handleLogout = (e) => {
    e.preventDefault()
    logout()
  }
  return (
    <div>
      <div className='nav-container'>
        <div className="logo">
          <h1>AgroShare</h1>
        </div>
        <div className="nav-links">
          <Link className='link' to="">Home</Link>
          <Link className='link' to="products">Products</Link>
          <Link className='link' to="requests">Requests</Link>
          <Link className='link' to="cart">Cart</Link>
          <Link className='link' to="profile">Profile</Link>
          <button style={{border:"none",fontSize:"20px",background:"none"}} onClick={e => handleLogout(e)}> Logout</button>
        </div>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  )
}
