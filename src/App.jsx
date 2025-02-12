import './index.css'
import React from 'react';
import { Routes, Route } from 'react-router-dom'
import { Api } from './components/Api';
import { Details } from './components/Details';
import { Register } from './components/Register';
import { Login } from './components/Login';

const App = () => {

  return (
    <>
      <Routes>
        <Route path="/api" element={<Api />} />
        <Route  path ="/details" element={<Details />} />
        <Route  path ="/register" element={<Register />} />
        <Route  path ="/login" element={<Login />} />
      </Routes>
    </>
  )
}

export default App
