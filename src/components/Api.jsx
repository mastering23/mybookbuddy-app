import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const Api = () => {
  const [signedIn, setSignedIn] = useState(false);
  const [email, setEmail] = useState('');
  const [item, setItem] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const navigate = useNavigate();

  const checkSignedIn = async () => {
    const email = localStorage.getItem('email');
    if (email) {
      setEmail(email);
      setSignedIn(true);
    }
  }

  const handleLogout = () => {
    localStorage.clear();
    setSignedIn(false);
  }

  const showSignInOrUser = () => {
    if (signedIn) {
      return (
        <div>
          <p>Signed-in as <b>{email}</b></p>
          <button onClick={handleLogout}>Logout</button>
          <button onClick={() => navigate('/cart-list', { state: cartItems })}>Go to Cart</button> : {cartItems.length} items in cart
        </div>
      );
    } else {
      return (
        <div>
          <button onClick={() => navigate('/login')}>Sign in</button>
          <button onClick={() => navigate('/register')}>Register</button>
        </div>
      );
    }
  }

  const getApiData = async () => {
    const res = await fetch(`https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/books`);
    const data = await res.json();
    setItem(data.books);
    console.log(data.books);
  };

  const handleAddToCart = (singlebook) => {
    let item = cartItems.find(item => item.id === singlebook.id);
    if (item) {
      alert('Item is already in the cart');
    } else {
      const newCartItems = [...cartItems, { id: singlebook.id, name: singlebook.title, quantity: 1, price: 1.0 }];
      setCartItems(newCartItems);
    }
  }

  useEffect(() => {
    getApiData()
    checkSignedIn();
  }, []);

  return (
    <>
      {showSignInOrUser()}
      <center><h1>MyBook Buddy</h1></center>
      <h2> Books | Catalog</h2>
      <hr />
      <ol>
        {item.map((singlebook, index) => (
          <li key={index}>
            Name : {singlebook.title}
            <br />
            <br />
            <button onClick={() => navigate('/details', { state: singlebook })}>See more details</button>
            <button onClick={() => handleAddToCart(singlebook)} disabled={!signedIn}>Add to Cart</button>
            <hr />
          </li>
        ))}
      </ol>
    </>
  );
};
