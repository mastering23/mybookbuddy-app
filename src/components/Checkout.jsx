import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export const Checkout = () => {
  const location = useLocation();
  const cartItems = location.state || [];
  const navigate = useNavigate();

  const handleCheckout = () => {
    alert('Checkout successful!');
    navigate('/api');
  };

  return (
    <div>
      <h2>Cart Items for Checkout</h2>
      {cartItems.length === 0 ? (
        <p>No items in the cart.</p>
      ) : (
        <>
          <ul>
            {cartItems.map((item) => (
              <li key={item.id}>
                {item.name} - Quantity: {item.quantity}
              </li>
            ))}
          </ul>
          <button onClick={handleCheckout}>Checkout</button>
        </>
      )}
    </div>
  );
};
