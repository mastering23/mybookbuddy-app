import './index.css'
import React from 'react';
import { Routes, Route } from 'react-router-dom'
import { Api } from './components/Api';
import { Details } from './components/Details';
import { Register } from './components/Register';
import { SignIn } from './components/SignIn';
import { CartList } from './components/CartList';
import { Checkout } from './components/Checkout';
import { Userlog } from './components/Userlog';



const App = () => {

  return (
    <>
      <Routes>
        <Route path="/api" element={<Api />} />
        <Route  path= {`/details/:id`} element={<Details />} />
        <Route  path ="/register" element={<Register />} />
        <Route  path ="/login" element={<SignIn />} />
        <Route  path ="/checkout" element={<Checkout />} /> 
        <Route  path ="/userlog" element={<Userlog />} /> 
      </Routes>
    </>
  )
}

export default App
