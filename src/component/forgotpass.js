import React, { useState } from "react";
import "../assets/component/login.css";

const ForgotPass = (props) => {
  const [email, setEmail] = useState("");

  const data1 = localStorage.getItem("userdata");;
  const data = JSON.parse(data1);

  const validateUser = () => {
    let signedEmail = data.email;
    if (signedEmail === email) {
      return true
    }
    return false
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    let valid = validateUser();
    if (valid) {
      props.history.push('/resetpassword')
    }
    else {
      alert('Given Email Address is not Registered')
    }
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
