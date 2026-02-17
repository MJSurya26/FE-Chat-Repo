import React from 'react';
import logo from "../../assets/undraw_ai-research-assistant_cxx0.svg";
import "../../App.css";
import LoginForm from './LoginForm';

export const Login = () => {
  return (
        <div className='mainDiv'>
          <div className='loginImg'>
          <img src={logo}/>
         </div>
         <div >
                <LoginForm />
         </div>
        </div>
  )
}
