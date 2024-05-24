import React, { useState } from "react";
import "../Css/Register.css";
import { Link } from "react-router-dom";


import axios from 'axios'
const Register = () => {
const ResigterUser=(adminName,password,roleType) =>{
  axios.post('http://localhost:8080/api/v1/hotelmanagment/register',{adminName:adminName,roleType:roleType,password:password})
}

  const [adminName, setAdminName] = useState("");
  const [roleType, setRoleType] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleRegister = () => {
    if (!adminName || !roleType || !email || !password || !confirmPassword) {
      setErrorMessage("All fields are required");
    } else if (password !== confirmPassword) {
      setErrorMessage("Passwords do not match");
    } else {
      setErrorMessage("");
      console.log("registered");
    }
  };

  return (
    
   <div className="register-container">
      <form className="register-form">
        <div>
          <input
            type="text"
            placeholder="Username"
            value={adminName}
            onChange={(e) => setAdminName(e.target.value)}
            className="register-input"
          />
        </div>
        <div>
          <input
            type="RoleType"
            placeholder="RoleType"
            value={roleType}
            onChange={(e) => setRoleType(e.target.value)}
            className="register-input"
          />
        </div>
        <div>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="register-input"
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="register-input"
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="register-input"
          />
        </div>
        <div className="register">
          Have an account? Click <Link to="/login">here</Link> to Login
        </div>
        <div>
          <button type="button" onClick= {()=>{handleRegister();ResigterUser(adminName,password,roleType)}} className="register-button">
            Register
          </button>
        </div>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
      </form>
    </div>
  );
};

export default Register;