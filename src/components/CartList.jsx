import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

export const CartList = () => {
  const location = useLocation();
  const [cartItems, setCartItems] = useState(location.state || []);

  const removeItem = (id) => {
    const updatedCart = cartItems.filter(item => item.id !== id);
    setCartItems(updatedCart);
  };

  return (
    <div>
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cartItems.map((item) => (
            <li key={item.id}>
              {item.name} - Quantity: {item.quantity}
              <button onClick={() => removeItem(item.id)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
