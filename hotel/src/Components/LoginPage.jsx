import React, { useState } from "react";
import "../Css/Login.css";
import { Link, useNavigate } from "react-router-dom";
import Home1 from "../Components/Assests/images/Home1.jpg";
import axios from "axios";


const Login = () => {
  const [adminName, setAdminName] = useState("");
  const [password, setPassWord] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate=useNavigate();

  const fetchData = async (adminName, password) => {
    try {
      const response = await axios.post("http://localhost:8080/api/v1/hotelmanagment/login", {
        adminName:adminName,
        password:password,
      });
      
      if (response.data.message) {
        
        // console.log("Login successful");
        // alert('LogIn is Done');
        navigate("/Dashboard");
        setErrorMessage('');
      } else {
        
        setErrorMessage(response.data.error);
       
      }
    } catch (error) {
      console.error("Login unsuccessful:", error);
      setErrorMessage('Invalid email or password. Please try again.');
    }
    
  }

  // const handleLogin = () => {
  //   if (username === "admin" && password === "admin") {
  //     setErrorMessage("");
  //     onLogin(true);
  //   } else {
  //     setErrorMessage("Invalid credentials");
  //   }
  // };

  return (
    <div className="login-container">
      <img src={Home1} alt="Background" className="login-image" />
      <form className="login-form">
        <div>
          <input
            type="text"
            placeholder="Enter username"
            value={adminName}
            onChange={(e) => setAdminName(e.target.value)}
          />
        </div>
        <br />
        <div>
          <input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassWord(e.target.value)}
          />
        </div>
        <br />
        <div className="register">
          Click <Link to="/register">here</Link> to Register
        </div>
        <div>
          <button className="login-button" onClick={fetchData(adminName,password)}>
            Login
          </button>
          <div className="error">{errorMessage}</div>
        </div>
      </form>
    </div>
  );
};

export default Login;