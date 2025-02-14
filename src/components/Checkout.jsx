import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './checkoutCss.css';

export const Checkout = () => {
  const location = useLocation();
  const cartItems = location.state || [];
  const navigate = useNavigate();

  const handleCheckout = async () => {
    const token = localStorage.getItem('token');

    if (!token) {
      alert('User is not authenticated. Please log in.');
      navigate('/login');
      return;
    }

    try {
      const checkoutLogs = JSON.parse(localStorage.getItem('checkoutLogs')) || [];

      for (let item of cartItems) {
        const response = await fetch(`https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/books/${item.id}`, {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            available: false,
          }),
        });

        if (!response.ok) {
          throw new Error(`Failed to check out book with ID: ${item.id}`);
        }

        const result = await response.json();
        console.log('Book checked out successfully:', result);


        const checkoutLog = {
          title: item.title,
          author: item.author,
          id: item.id,
          date: new Date().toLocaleDateString(),
          time: new Date().toLocaleTimeString(),

        };
        checkoutLogs.push(checkoutLog);
      }


      localStorage.setItem('checkoutLogs', JSON.stringify(checkoutLogs));

      alert('Books checked out successfully!');
      navigate('/userlog');

    } catch (error) {
      console.error('Error during checkout:', error);
      alert('Checkout failed. Please try again.');
    }
  };

  return (
    <div>
      <h2>Cart Items for Checkout</h2>
      {cartItems.length === 0 ? (
        <p>No items in the cart. Add some items to proceed.</p>
      ) : (
        <>
          <center>



            <table>
              <thead>
                <tr>
                  <th>Item Name</th>
                  <th>Quantity</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item) => (
                  <tr key={item.id}>
                    <td>{item.name}</td>
                    <td>{item.quantity}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <button onClick={handleCheckout}>Checkout</button>
            <button onClick={() => navigate('/api')}>Cancel</button>
          </center>
        </>
      )}
    </div>

  );
};
