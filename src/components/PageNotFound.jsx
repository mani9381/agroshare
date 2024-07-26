import React from 'react'
import { Link } from 'react-router-dom'

export default function PageNotFound() {
  return (
    <div className='login-container'>
      <div className='form-container'>
            <h2 style={{textAlign:"center"}}>Resource Not Found</h2>
            <Link className='link' style={{textAlign:"center"}} to="/">Home</Link>
      </div>
    </div>
  )
}
