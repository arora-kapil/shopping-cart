// src/App.js

import React, { useContext } from 'react';
import { CartContext } from './context/CartContext';
import './App.css';

const items = [
  { id: 1, name: 'Apple', price: 1 },
  { id: 2, name: 'Banana', price: 0.5 },
  { id: 3, name: 'Orange', price: 0.75 },
];

function App() {
  const { cart, addItem, removeItem, getTotalPrice } = useContext(CartContext);

  return (
    <div className="app container">
      <header className="app-header text-center my-5">
        <h1>Shopping Cart</h1>
        <div className="items row">
          {items.map((item) => (
            <div key={item.id} className="item col-md-4 mb-4">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">{item.name}</h5>
                  <p className="card-text">${item.price}</p>
                  <button className="btn btn-primary" onClick={() => addItem(item)}>
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="cart mt-5">
          <h2>Cart</h2>
          {cart.length === 0 ? (
            <p>Cart is empty</p>
          ) : (
            <div className="list-group">
              {cart.map((item) => (
                <div key={item.id} className="list-group-item d-flex justify-content-between align-items-center">
                  <span>{item.name} - ${item.price}</span>
                  <button className="btn btn-danger btn-sm" onClick={() => removeItem(item.id)}>
                    Remove
                  </button>
                </div>
              ))}
            </div>
          )}
          <h3 className="mt-4">Total: ${getTotalPrice().toFixed(2)}</h3>
        </div>
      </header>
    </div>
  );
}

export default App;
