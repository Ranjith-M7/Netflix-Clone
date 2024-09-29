import React from "react";
import "./Login.css";
import logo from "../../assets/logo.png";

const Login = () => {
  return (
    <div className="login">
      <img src={logo} alt="" className="logo"/>
      <div className="login-form">
        <h1>Sign Up</h1>
        <form>
          <input type="text" placeholder="Your name" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button>Sign Up</button>
          <div className="form-help">
            <input type="checkbox" id="remember" />
            <label htmlFor="remember">Remember Me</label>
          </div>
          <p>Need Help?</p>
        </form>
      </div>
    </div>
  );
};

export default Login;
