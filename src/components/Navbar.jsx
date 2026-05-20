import React, { useState } from 'react'
import './Navbar.css'

function Navbar() {
  const [cartCount, setCartCount] = useState(0)

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo">
          <h1>🛒 ShopHub</h1>
        </div>
        
        <ul className="nav-links">
          <li><a href="#home" className="nav-item">Home</a></li>
          <li><a href="#products" className="nav-item">Products</a></li>
          <li><a href="#about" className="nav-item">About</a></li>
        </ul>

        <div className="nav-actions">
          <button className="search-btn">🔍</button>
          <button className="cart-btn">
            🛍️
            {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
