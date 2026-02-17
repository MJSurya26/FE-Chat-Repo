import React from 'react';
import './App.css';
import { Login } from './Components/LoginPages/Login';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import ForgotPassword from './Components/LoginPages/ForgotPassword';
import SignUP from './Components/LoginPages/SignUP';

function App() {
  return (
    <BrowserRouter >
    <Routes>
      <Route path='/' element={<Login />}/>
      <Route path="/ForgotPassword" element={<ForgotPassword />}/>
      <Route path="/SignUP" element={<SignUP />} />
    </Routes>
    </BrowserRouter>
    // <div>
    //   <Login />
    // </div>
  )
}

export default App
