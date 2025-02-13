import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';

export const CartList = () => {
  const location = useLocation();

  // Sample initial cart items
  const [cartItems, setCartItems] = useState([]);


  useEffect(()=> {
    setCartItems(location.state);
  },[]);

  // Function to remove item from the cart
  const removeItem = (id) => {
    const updatedCart = cartDB.filter(item => item.id !== id);
    setCartItems(updatedCart);
  };

  // Calculate total price
  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  return (
    <div className="cart-container">
      <h2>Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul className="cart-list">
          {cartItems.map(item => (
            <li key={item.id} className="cart-item">
              <div>
                <strong>{item.name}</strong> - ${item.price} x {item.quantity}
              </div>
              <button onClick={() => removeItem(item.id)} className="remove-button">
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}

      <div className="cart-total">
        <strong>Total Price: ${getTotalPrice()}</strong>
      </div>
    </div>
  );
};

