import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BookImage } from './BookImage';


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
  };

  const handleLogout = () => {
    localStorage.clear();
    setSignedIn(false);
  };

  const showSignInOrUser = () => {
    if (signedIn) {
      return (
        <div>
          <div id="loggers">
            <p>Signed-in as <b>{email}</b></p>
            <button onClick={handleLogout}>Logout</button>
            <button onClick={() => navigate('/userlog')}>User Log</button>
            <div id="cart">
              {cartItems.length} items in cart  🛒<button onClick={() => navigate('/checkout', { state: cartItems })}>
                Go to Cart</button>
              <br />
            </div>
          </div>


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
  };

  const getApiData = async () => {
    const res = await fetch(`https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/books`);
    const data = await res.json();
    setItem(data.books);
    console.log(data.books);
  };

  const handleAddToCart = (singlebook) => {
    if (singlebook.available === true) {
      const itemIndex = cartItems.findIndex(item => item.id === singlebook.id);
      if (itemIndex >= 0) {
        const updatedCart = cartItems.map((item, index) =>
          index === itemIndex ? { ...item, quantity: item.quantity + 1 } : item
        );
        setCartItems(updatedCart);
      } else {
        const newCartItems = [...cartItems,
        { id: singlebook.id, name: singlebook.title, quantity: 1 }];
        setCartItems(newCartItems);
      }

    } else {
      alert("Book Not Available 🟥");
    }
  };



  const handleRemoveFromCart = (singlebook) => {
    const itemIndex = cartItems.findIndex(item => item.id === singlebook.id);
    if (itemIndex >= 0) {
      const updatedCart = cartItems.map((item, index) =>
        index === itemIndex ? { ...item, quantity: item.quantity - 1 } : item
      ).filter(item => item.quantity > 0);
      setCartItems(updatedCart);
    }
  };

  useEffect(() => {
    getApiData();
    checkSignedIn();
  }, []);

  return (
    <>

      <div id="main-list">
        {showSignInOrUser()}
        <center><h1 id="mainTitle">Library Online</h1></center>
        <h2><h1>MyBook Buddy</h1>Books | Catalog</h2>
        <hr />

        <ol>
          {item.map((singlebook, index) => (
            <li key={index}>
              {console.log(singlebook)}
              <BookImage src={singlebook.coverimage} alt="book image" width="200" height="300" />
              <br /> <br />
              <strong>Title : {singlebook.title}</strong>
              <br />

              🛒<button onClick={() => handleAddToCart(singlebook)} disabled={!signedIn}> + </button>
              <button onClick={() => handleRemoveFromCart(singlebook)} disabled={!signedIn}> - </button>
              <button onClick={() => navigate(`/details/${singlebook.id}`, { state: singlebook })}>See more details</button> <br />
              <h3>{singlebook.available ? 'Book Available 🟩' : 'Book Not Available 🟥'}</h3>


              <hr />
            </li>
          ))}
        </ol>
      </div>
    </>
  );
};
