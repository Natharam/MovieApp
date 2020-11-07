import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./component/home";
import Series from "./component/series";
import Movies from "./component/movies";
import Login from "./component/login";
import SignUp from "./component/signup";
import ForgotPass from "./component/forgotpass";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
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
  }
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/series" exact component={Series} />
          <Route path="/movies" exact component={Movies} />
          <Route path="/login" exact component={Login} />
          <Route path="/signup" exact component={SignUp} />
          <Route path="/forgotpass" exact component={ForgotPass} />
        </Switch>
      </Router>
    );
  }
}

export default App;
