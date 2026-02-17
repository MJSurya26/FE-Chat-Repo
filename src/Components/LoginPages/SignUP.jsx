import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../App.css";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const SingUP = () => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [showpwd, setShowpwd] = useState(false);
  const [confirmshowpwd, setConfirmshowpwd] = useState(false);

  const [errors, setErrors] = useState({});

  const submitHandler = (e) => {
    e.preventDefault();

    let newErrors = {};

    const isName = /^[A-Za-z ]{2,}$/.test(name);
    const isNumber = /^[0-9]{10}$/.test(number);
    const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const isValidPassword =
      /^(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%!^&*])[A-Za-z0-9@#$%!^&*]{8,}$/.test(
        password
      );
    const isConfirmPwd = password === confirmPassword;

    if (!isName) {
      newErrors.name = "Enter valid name";
    }
    if (!isNumber) {
      newErrors.number = "Enter valid mobile";
    } 
    if (!isEmail) {
      newErrors.email = "Enter valid email";
    }
    if (!isValidPassword){
      newErrors.password ="Password must be 8+ chars with capital, number & special char";
    }
    if (!isConfirmPwd) newErrors.confirmPassword = "Passwords not matching";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      console.log("Name",name);
      console.log("Number",number);
      console.log("email",email);
      console.log("password",password);
      console.log("Signup success");
    }
  };

  return (
    <div className="signUP-container">
      <div className="signUP-Card">
        <h1>Sign UP</h1>
        <p className="description">SignUp your account</p>

        <form onSubmit={submitHandler}>
          <label>Your Name</label>
          <input value={name} onChange={(e) => setName(e.target.value)} />
          {errors.name && <p className="showerror">{errors.name}</p>}

          <label>Enter Mobile Number</label>
          <input value={number} onChange={(e) => setNumber(e.target.value)} />
          {errors.number && <p className="showerror">{errors.number}</p>}

          <label>Enter Email ID</label>
          <input value={email} onChange={(e) => setEmail(e.target.value)} />
          {errors.email && <p className="showerror">{errors.email}</p>}

          <div className="pwd-wrapper">
            <label>Enter Password</label>
            <input
              type={showpwd ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            {showpwd ? (
              <FaEye onClick={() => setShowpwd(false)} className="eye" />
            ) : (
              <FaEyeSlash onClick={() => setShowpwd(true)} className="eye" />
            )}
          </div>
          {errors.password && <p className="showerror">{errors.password}</p>}
          

          <div className="pwd-wrapper">
            <label>Confirm Password</label>
            <input
              type={confirmshowpwd ? "text" : "password"}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />

            {confirmshowpwd ? (
              <FaEye onClick={() => setConfirmshowpwd(false)} className="eye" />
            ) : (
              <FaEyeSlash
                onClick={() => setConfirmshowpwd(true)}
                className="eye"
              />
            )}
          </div>
          {errors.confirmPassword && (
            <p className="showerror">{errors.confirmPassword}</p>
          )}

          <button className="lgn-btn" >Submit</button>

          <div className="signUP">
            Already have An Account <Link to="/">Sign In</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SingUP;
