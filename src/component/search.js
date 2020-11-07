import React, { Component } from "react";

class Content extends Component {
  constructor() {
    super();
    console.log(this.props.content);
    this.state = {
      data: this.props.content,
      series: [],
      movies: [],
    };
  }

  componentDidMount() {
    let predata = this.state.data;

    var seriesdata = predata.filter((res) => {
      return res.programType === "series";
    });

    var moviesdata = predata.filter((res) => {
      return res.programType === "movies";
    });

    this.setState({
      series: seriesdata,
      movies: moviesdata,
    });
  }

  render() {
    let { series } = this.state;
    console.log(this.state);

    return (
      <div className="search">
        {series.map((filteredData) => {
          return <li>{filteredData.title}</li>;
        })}
      </div>
    );
  }
}

export default Content;
