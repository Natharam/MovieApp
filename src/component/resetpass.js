import React, { useState } from "react";
import "../assets/component/login.css";

function ResetPassword(props) {
  const [password, setPassword] = useState("");

  const data1 = localStorage.getItem("userdata");
  const data = JSON.parse(data1);

  const handleSubmit = () => {
    let datasend = {
    name: data.name,
    email: data.email,
    password,
    }
    localStorage.setItem("userdata", JSON.stringify(datasend));
    props.history.push("/login");
    
    alert('Password Updated');
  };

  return (
    <form style={{  width:600, margin:'auto' }} id="form" onSubmit={handleSubmit}>
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
        value="submit"
        id="input_submit"
        className="input_field"
      />
    </form>
  );
}

export default ResetPassword;
