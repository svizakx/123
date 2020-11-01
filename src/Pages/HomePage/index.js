import React, { Component } from "react";
import UserPanel from "../../Components/UserPanel/index";
import AdminPanel from "../../Components/AdminPanel/index";
const roleToken = "role_token";

export default class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      role: ""
    };
  }

  componentDidMount() {
    this.setState({ role: window.localStorage.getItem(roleToken) })
  }
  render() {
    return (
      <div>
        <h1>Home</h1>
        {this.state.role === "User" && <UserPanel />}
        {this.state.role === "Admin" && <AdminPanel />}
      </div>
    );
  }
}