// src/components/Register.jsx
import React from 'react';
import { AuthForm } from './AuthForm';

export const Register = () => {
  return (
    <>
      <h1>Registration Component</h1>
      <hr />
      <AuthForm formType="register" />
    </>
  );
};
