import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from './Pages/HomePage/HomePage';
import LoginPage from './Pages/LoginPage/LoginPage';
import TestPage from './Pages/TestPage/TestPage';
import ErrorPage from './Pages/ErrorPage/ErrorPage';
import Navbar from './Components/Navbar/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

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
    )
  }
}

export default App;