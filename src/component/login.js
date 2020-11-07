import React, { useState } from "react";
import "../assets/component/login.css";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const data1 = localStorage.getItem("userdata");;
  const data = JSON.parse(data1);

  const validateUser = () => {
    let signedEmail = data.email;
    let signedPassword = data.password;
    if (signedEmail === email && signedPassword === password) {
      return true
    }
    return false
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    let valid = validateUser();
    if (valid) {
      localStorage.setItem('valid', JSON.stringify(valid))
      props.history.push('/')
    }
    console.log(data);
  };

  return (
    <div id="form_wrapper">
      <form id="form" onSubmit={handleSubmit}>
        <h1>Member Login</h1>
        <div className="input_container">
          <i className="fas fa-envelope"></i>
          <input
            placeholder="Enter Email Address"
            type="email"
            name="email"
            id="field_email"
            className="input_field"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="input_container">
          <i className="fas fa-lock"></i>
          <input
            placeholder="Enter Password"
            type="password"
            name="Password"
            id="field_password"
            className="input_field"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <input
          type="submit"
          value="login"
          id="input_submit"
          className="input_field"
        />
        <span>
          Forgot <a href="/forgotpass"> Username / Password ?</a>
        </span>
        <span id="create_account">
          <a href="/signup">Create your account ➡ </a>
        </span>
      </form>
    </div>
  );
};

export default Login;
