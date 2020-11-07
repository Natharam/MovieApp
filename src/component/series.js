import React, { Component } from "react";
import Header from "./header";
import Footer from "./footer";
import "../assets/component/series.css";
import { Link } from "react-router-dom";

class Series extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      series: [],
      loading: true,
    };
  }

  async componentDidMount() {
    await fetch(
      "https://raw.githubusercontent.com/StreamCo/react-coding-challenge/master/feed/sample.json"
    )
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          loading: false,
          data: json.entries,
        });
      });

    var seriesdata = this.state.data.filter((res) => {
      return res.programType === "series";
    });

    this.setState({
      series: seriesdata,
    });
  }

  render() {
    if (this.state.loading === true) {
      return (
        <div>
          <Header heading="Series Page" />
          loading...
          <div className="space"></div>
          <Footer />
        </div>
      );
    } else {
      return (
        <>
          <Header heading="Series Page">
            <div className="home-link">
              <Link to="/">Home</Link>
            </div>
          </Header>
          <div className="grid-container series-container">
            {this.state.series.map((filteredData, index) => {
              return (
                <div className="series" key={index}>
                  <p className="title">{filteredData.title}</p>
                  <img
                    className="image"
                    src={filteredData.images["Poster Art"].url}
                    alt="series"
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

export default Series;
