import './index.css'
import React from 'react';
import { Routes, Route } from 'react-router-dom'
import { Api } from './components/Api';

const App = () => {

  return (
    <>
      <Routes>
        <Route path="/api" element={<Api />} />
      </Routes>
    </>
  )
}

export default App
