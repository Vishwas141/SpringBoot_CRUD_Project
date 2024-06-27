import React, { useState } from 'react';
import './App.css';
import axios from "axios"
import Homepage from './Component/Homepage';
import Dashboard from './Component/Dashoboard';
import { Routes,Route } from 'react-router-dom';

function App() {
  
  return (
    <>
        <Routes>
            <Route path='/' element={<Homepage/>}/>
            <Route path='/home' element={<Dashboard/>}/>
        </Routes>
    </>
  )
}
export default App;
