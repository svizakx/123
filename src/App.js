import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Navbar from "./Components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import { NotificationContainer } from "react-notifications";
import "react-notifications/lib/notifications.css";
import Redirector from "./Redirector";
import { Dashboard, ErrorPage, HomePage, LoginPage, TestPage } from "./Pages";

class App extends Component {
  render() {
    return (
      <main>
        <Navbar />
        <Switch>
          <Route path="/" component={HomePage} exact />
          <Route path="/login" component={LoginPage} />
          <Route path="/test" component={TestPage} />
          <Route path="/dashboard" component={Dashboard} />
          <Route component={ErrorPage} />
        </Switch>
        <NotificationContainer />
        <Redirector />
      </main>
    );
  }
}

export default App;
