import React, { Component } from "react";
import Header from "./header";
import Footer from "./footer";
import "../assets/component/home.css";
import { Link } from "react-router-dom";

class Home extends Component {
  render() {
    return (
      <div className="home">
        <Header heading="Home Page">
          <ul className="home-links">
            <li>
              <Link to="/series">
                SERIES
              </Link>
            </li>

            <li>
              <Link to="/movies">
                MOVIES
              </Link>
            </li>
          </ul>
        </Header>
        <div className="home-bg"/>
        <Footer />
      </div>
    );
  }
}

export default Home;
