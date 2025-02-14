
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const Register = () => {
  
  const navigate = useNavigate();

  const [firstNameValue, setFirstNameValue] = useState('');
  const [lastNameValue, setLastNameValue] = useState('');
  const [emailValue, setEmailValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');

  const handleFirstNameChange = (event) => {
    setFirstNameValue(event.target.value);
  }
  const handleLastNameChange = (event) => {
    setLastNameValue(event.target.value);
  }
  const handleEmailChange = (event) => {
    setEmailValue(event.target.value);
  }
  const handlePasswordChange = (event) => {
    setPasswordValue(event.target.value);
  }

  const handleRegisterClick = async () => {
    const baseUrl = 'https://fsa-book-buddy-b6e748d1380d.herokuapp.com';
    const uri = '/api/users/register';

    try {
      const response = await fetch(`${baseUrl}${uri}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          firstName: firstNameValue, 
          lastName: lastNameValue, 
          email: emailValue, 
          password: passwordValue 
        })
      });
      const result = await response.json();
      console.log(result);


      if (response.ok) {
        navigate('/api');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };


  return (
    <div>
     
      <div class="my-form">
        <h2>BookBuddy | Registration</h2>
        <label>Firstname</label><input type="text" value={firstNameValue} onChange={handleFirstNameChange} /><br />
        <label>Lastname</label><input type="text" value={lastNameValue} onChange={handleLastNameChange} /><br />
        <label> Email</label> <input type="email" value={emailValue} onChange={handleEmailChange} /><br />
        <label>Password</label> <input type="password" value={passwordValue} onChange={handlePasswordChange} /><br />
        <button onClick={handleRegisterClick}>Register</button>
      </div>

      <center> <button class="back-button" onClick={()=> navigate(-1)}>Go Back</button> </center>
       {/*navigate(-1) means to go back in history*/}
    </div>
  );
};
