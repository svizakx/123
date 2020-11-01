import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./Pages/HomePage/index";
import LoginPage from "./Pages/LoginPage/index";
import TestPage from "./Pages/TestPage/index";
import ErrorPage from "./Pages/ErrorPage/index";
import Navbar from "./Components/Navbar/index";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  render() {
    return (
      <main>
        <Navbar />
        <Switch>
          <Route path="/" component={HomePage} exact />
          <Route path="/login" component={LoginPage} />
          <Route path="/test" component={TestPage} />
          <Route component={ErrorPage} />
        </Switch>
      </main>
    );
  }
}

export default App;
