import React from "react";
import "../assets/component/footer.css";
import google from "../assets/images/google.png";
import apple from "../assets/images/apple.jpg";
import microsoft from "../assets/images/microsoft.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-links">
        <a href="/">Home</a> &nbsp; | &nbsp;
        <a href="/">Terms and Condition</a> &nbsp; | &nbsp;
        <a href="/">Privacy Policy</a> &nbsp; | &nbsp;
        <a href="/">Collection Statement</a> &nbsp; | &nbsp;
        <a href="/">Help</a> &nbsp; | &nbsp;
        <a href="/">Manage Account</a>
        <br />
        <p className="para">
          Copyright © 2016 DEMO Streaming.&nbsp;All Rights Reserved.
        </p>
      </div>

      <div className="footer-container">
        <div className="social-container">
          <a className="fb" href="/">
            <span className="fab fa-facebook-f" />
          </a>

          <a className="twitter" href="/">
            <span className="fab fa-twitter" />
          </a>

          <a className="instagram" href="/">
            <span className="fab fa-instagram" />
          </a>
        </div>

        <div className="app-container">
          <img className="google" alt="App Store" src={google} />
          <img className="apple" alt="App Store" src={apple} />
          <img className="microsoft" alt="App Store" src={microsoft} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
