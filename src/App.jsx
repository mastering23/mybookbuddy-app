import './index.css'
import React from 'react';
import { Routes, Route } from 'react-router-dom'
import { Api } from './components/Api';
import { Details } from './components/Details';

const App = () => {

  return (
    <>
      <Routes>
        <Route path="/api" element={<Api />} />
        <Route  path ="/details" element={<Details />} />
      </Routes>
    </>
  )
}

export default App
