import React from "react";
import "../assets/component/header.css";

const Header = (props) => {
  console.log(props);
  return (
    <div className="nav">
      <nav className="nav1">
        <label className="logo">Demo Streaming</label>
        <ul>
          <li>
            <a href="/login">Login</a>
          </li>
          <li>
            <a className="anchor" href="/">
              start free trail
            </a>
          </li>
        </ul>
      </nav>

      <br />

      <nav className="nav2">
        <label className="logo2">{props.heading}</label>
        {props.children}
      </nav>
    </div>
  );
};

export default Header;
