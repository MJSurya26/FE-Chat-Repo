import React, { useState } from "react";
import "../../App.css";
import { Link } from "react-router-dom";
const ForgotPassword = () => {
  const [email, SetEmail] = useState("");
  const [validation, setValidation] = useState(false);
  const submitHandler = (e) => {
    e.preventDefault();
    const isNumber = /^[0-9]{10}$/.test(email);
    const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    if (!isNumber && !isEmail) {
      setValidation(true);
      return;
    }
    setValidation(false);

    console.log("Valid input:", email);
  };
  return (
    <div className="fgt-container">
      <div className="Card">
        <h2>Reset Password</h2>
        <form onSubmit={submitHandler}>
          <label>Email id or Mobile Number</label> <br />
          <input
            type="text"
            value={email}
            onChange={(e) => SetEmail(e.target.value)}
          />
          <p className={validation ? "showerror" : "hideError"}>
            Enter valid email or mobile
          </p>
          <button className="lgn-btn" type="submit">
            Send OTP
          </button>
        </form>
        <div className="signUP">
          <p>
            Go back to <Link to="/"> Login page</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
