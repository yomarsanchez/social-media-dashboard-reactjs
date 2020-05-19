import React from 'react'
import './styles/header.css'

function Header({ children }) {
  return (
    <header className="header">
      <div className="wrapper">
        <div className="header-grid">
          <div className="header-content">
            <h1 className="header-title">Social Media Dashboard</h1>
            <p className="header-description">Total Followers: 23,004</p>
          </div>
          {children}
        </div>
      </div>
    </header>
  )
}

export default Header
