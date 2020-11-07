import React, { useState, useEffect } from "react";
import "../assets/component/login.css";

const ForgotPass = () => {
  const [email, setEmail] = useState("");
  const [data, setData] = useState("");

  const data1 = localStorage.getItem("userdata");
  setData(JSON.parse(data1));

  // const validate = () => {

  // }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(JSON.parse(data1));
  };

  return (
    <div id="form_wrapper">
      <form id="form" onSubmit={handleSubmit}>
        <h1>Reset Password / UserName</h1>
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
        <input
          type="submit"
          value="submit"
          id="input_submit"
          className="input_field"
        />
      </form>
    </div>
  );
};

export default ForgotPass;
