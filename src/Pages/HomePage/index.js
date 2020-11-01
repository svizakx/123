import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class HomePage extends Component {
  render() {
    return (
      <div>
        <h1>home</h1>
        <p>logo tutaj</p>
        <Link to="/dashboard">przejdź do programu</Link>
        <p>info o programie</p>
      </div>
    );
  }
}
