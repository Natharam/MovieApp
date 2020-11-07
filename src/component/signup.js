import React, { useState } from "react";
import "../assets/component/login.css";
// import formValidate from './formValidate';

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const payLoad = {
    name,
    email,
    password,
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    localStorage.setItem("userdata", JSON.stringify(payLoad));
    return true;
  };

  return (
    <div id="form_wrapper">
      <form id="form" onSubmit={handleSubmit}>
        <h1>Member Sign Up</h1>
        <div className="input_container">
          <i className="fas fa-envelope"></i>
          <input
            placeholder="Enter Full Name"
            type="text"
            name="fullname"
            value={name}
            id="field_name"
            className="input_field"
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="input_container">
          <i className="fas fa-envelope"></i>
          <input
            placeholder="Enter Email Address"
            type="email"
            name="Email"
            value={email}
            id="field_email"
            className="input_field"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="input_container">
          <i className="fas fa-lock"></i>
          <input
            placeholder="Enter Password"
            type="password"
            name="Password"
            value={password}
            id="field_password"
            className="input_field"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <input
          type="submit"
          value="signup"
          id="input_submit"
          className="input_field"
        />
        <span id="create_account">
          <a href="/login">Login ➡ </a>
        </span>
      </form>
    </div>
  );
};

export default SignUp;
