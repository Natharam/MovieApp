import React, { Component } from "react";
import Header from "./header";
import Footer from "./footer";
import "../assets/component/movies.css";
import { Link } from "react-router-dom";

class Movies extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      movies: [],
      loading: false,
    };
  }

  async componentDidMount() {
    await fetch(
      "https://raw.githubusercontent.com/StreamCo/react-coding-challenge/master/feed/sample.json"
    )
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          loading: true,
          data: json.entries,
        });
      });

    var moviesdata = this.state.data.filter((res) => {
      return res.programType === "movie";
    });

    this.setState({
      movies: moviesdata,
    });
  }

  render() {
    if (this.state.loading === false) {
      return (
        <div>
          <Header heading="Movies Page" />
          loading...
          <div className="space"></div>
          <Footer />
        </div>
      );
    } else {
      return (
        <>
          <Header heading="Movies Page">
            <div className="home-link">
              <Link to="/" className="link">Home</Link>
            </div>
          </Header>
          <div className="movies-container">
            {this.state.movies.map((filteredData, index) => {
              return (
                <div key={index} className="movies">
                  <p className="title">{filteredData.title}</p>
                  <img
                    className="image"
                    src={filteredData.images["Poster Art"].url}
                    alt="movie"
                  />
                  <p className="releaseyear">{filteredData.releaseYear}</p>
                </div>
              );
            })}
          </div>

          <Footer />
        </>
      );
    }
  }
}

export default Movies;
