import React, { useState } from 'react'
import './ProductGrid.css'

function ProductGrid() {
  const [products] = useState([
    { id: 1, name: 'Wireless Headphones', price: 79.99, image: '🎧', rating: 4.5 },
    { id: 2, name: 'Smart Watch', price: 199.99, image: '⌚', rating: 4.8 },
    { id: 3, name: 'USB-C Cable', price: 12.99, image: '🔌', rating: 4.2 },
    { id: 4, name: 'Phone Case', price: 24.99, image: '📱', rating: 4.6 },
    { id: 5, name: 'Portable Charger', price: 49.99, image: '🔋', rating: 4.7 },
    { id: 6, name: 'Screen Protector', price: 9.99, image: '🛡️', rating: 4.3 },
    { id: 7, name: 'Keyboard', price: 89.99, image: '⌨️', rating: 4.4 },
    { id: 8, name: 'Mouse', price: 39.99, image: '🖱️', rating: 4.5 },
  ])

  return (
    <section className="products-section">
      <div className="container">
        <h2 className="section-title">Featured Products</h2>
        <div className="products-grid">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              <div className="product-image">{product.image}</div>
              <div className="product-info">
                <h3>{product.name}</h3>
                <div className="rating">
                  {'⭐'.repeat(Math.floor(product.rating))} <span>{product.rating}</span>
                </div>
                <div className="product-footer">
                  <span className="price">${product.price}</span>
                  <button className="add-to-cart">Add to Cart</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProductGrid
