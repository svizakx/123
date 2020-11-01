import React, { Component } from "react";
import AuthService from "../../Services/AuthService";
import "./index.css";
import { NotificationManager } from "react-notifications";
import { Redirect } from "react-router-dom";
import { EventService, Events } from "../../Services";

export default class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      redirectUrl: null,
    };
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();

    AuthService.login({
      emailAddress: this.state.email,
      password: this.state.password,
    }).catch((x) => {
      NotificationManager.error(x.message, "Couldn't log in");
    });
  }

  render() {
    if (AuthService.isLogged()) {
      return <Redirect to={this.state.redirectUrl} />;
    }

    return (
      <div className="login-form">
        <form onSubmit={e => this.handleSubmit(e)}>
          <h2 className="text-center">Panel logowania</h2>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              name="email"
              placeholder="e-mail"
              onChange={e => this.handleChange(e)}
            />
          </div>

          <div className="form-group">
            <input
              type="password"
              className="form-control"
              name="password"
              placeholder="hasło"
              onChange={e => this.handleChange(e)}
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
