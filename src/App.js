import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './Components/Home';
import Login from './Components/Login';
import Test from './Components/Test';
import Error from './Components/Error';
import Navbar from './Components/Navbar';

class App extends Component {
  render() {
    return (
      <main>
        <Navbar />
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/login" component={Login} />
          <Route path="/test" component={Test} />
          <Route component={Error} />
        </Switch>
      </main>
    )
  }
}

export default App;