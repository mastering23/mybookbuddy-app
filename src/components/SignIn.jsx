import { React, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const SignIn = () => {
  const navigate = useNavigate();

  const [usernameValue, setUsernameValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');

  const handleSignInClick = async () => {
    // console.log(`username : ${usernameValue}`);
    // console.log(`password : ${passwordValue}`);

    const baseUrl = 'https://fsa-book-buddy-b6e748d1380d.herokuapp.com';
    const uri = '/api/users/login';

    try {
      const response = await fetch(`${baseUrl}${uri}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({email: usernameValue, password: passwordValue}),
      });
      const result = await response.json();

      console.log(result.token);

      if(result.token) {
        localStorage.setItem('email', usernameValue);
        localStorage.setItem('token', result.token);
        navigate('/api');
      }
      else {
        alert('access denied');
      }
      
    } catch (error) {
      console.error('Error:', error);
    }
  }

  const handleUsernameChange = (event) => {
    setUsernameValue(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPasswordValue(event.target.value);
  };



  return (
    <div>
      <div class='my-form'>
      <h2>BookBuddy | Sign In</h2>
      Username: <input value={usernameValue} onChange={handleUsernameChange} type='text' /><br />
      Password: <input value={passwordValue} onChange={handlePasswordChange} type='password' /><br />
      <button onClick={handleSignInClick}>Sign In</button>
      <button onClick={() => navigate('/register')}>Register</button>
    </div>
    <center><button class="back-button" onClick={()=> navigate(-1)}>Go Back</button> </center>
       {/*navigate(-1) means to go back in history*/}
    </div>

  )
}
