import React, { Component } from "react";
import AuthService from "../../Services/AuthService";
import "./index.css";

export default class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

  componentDidMount() {
    if (AuthService.isLogged()) {
      window.location = "/";
    }
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();

    AuthService.login({
      emailAddress: this.state.email,
      password: this.state.password,
    });
  }

  render() {
    return (
      <div className="login-form">
        <form onSubmit={() => this.handleSubmit}>
          <h2 className="text-center">Panel logowania</h2>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              name="email"
              placeholder="e-mail"
              onChange={() => this.handleChange}
            />
          </div>

          <div className="form-group">
            <input
              type="password"
              className="form-control"
              name="password"
              placeholder="hasło"
              onChange={() => this.handleChange}
            />
          </div>

          <div className="form-group">
            <button type="submit" className="btn btn-primary btn-block">
              Zaloguj się
            </button>
          </div>
        </form>
      </div>
    );
  }
}
