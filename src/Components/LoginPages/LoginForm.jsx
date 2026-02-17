import React, { useState } from "react";
import "../../App.css";
import { Link } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const LoginForm = () => {
  const [name, setName] = useState("");
  const [pwd, setPwd] = useState("");
  const [showpwd, setShowpwd] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("name", name);
  };

  return (
    <div className="form-container">
      <h2>Welcome</h2>
      <p className="description">Log in to your account</p>
      <form onSubmit={submitHandler}>
        <label>Email Id or Mobile number :</label>
        <br />
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <br />
        <div className="pwd-wrapper">
          <label>Password</label>
          <br />
          <input
            type={showpwd ? "text" : "password"}
            value={pwd}
            onChange={(e) => setPwd(e.target.value)}
          />
          {showpwd ? (
            <FaEye onClick={() => setShowpwd(!showpwd)} className="eye" />
          ) : (
            <FaEyeSlash onClick={() => setShowpwd(!showpwd)} className="eye" />
          )}
        </div>
        <div className="fgt-pwd"><Link to="/ForgotPassword">Forgot Password?</Link></div>
        <button className="lgn-btn" type="submit">
          Login
        </button>
        <div className="signUP">
          Don't have an account? <Link to="/SignUP">Create an account</Link>
        </div>
      </form>
    </div>
  );
};
export default LoginForm;
