// src/components/AuthForm.jsx
import React, { useState } from 'react';
import { authenticateUser } from './AutheticationSettings';


export const AuthForm = ({ formType }) => {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    password: '',
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = formType === 'login'
      ? { email: formData.email, password: formData.password }
      : formData;
    const result = await authenticateUser(formType, data);
    console.log(result);
  };

  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <legend>{formType === 'login' ? 'Login' : 'Registration'}</legend>
        {formType !== 'login' && (
          <>
            <input
              type="text"
              name="firstname"
              placeholder="Firstname"
              value={formData.firstname}
              onChange={handleChange}
            /><br />
            <input
              type="text"
              name="lastname"
              placeholder="Lastname"
              value={formData.lastname}
              onChange={handleChange}
            /><br />
          </>
        )}
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        /><br />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
        /><br /><br />
        <button type="submit">{formType === 'login' ? 'Login' : 'Sign Up'}</button>
      </fieldset>
    </form>
  );
};
