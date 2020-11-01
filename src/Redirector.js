import React, { Component } from "react";
import { NotificationManager } from "react-notifications";
import { Redirect } from "react-router-dom";
import { EventService } from "./Services";
import Events from "./Services/Events";

export default class Redirector extends Component {
  constructor(props) {
    super(props);

    this.state = {
      redirectUrl: "",
    };

    this.config = {
      redirectParam: "requested_url",
      loginPage: "/login",
    };

    EventService.Subscribe(Events.Login, () => this._handleLogin());
    EventService.Subscribe(Events.Logout, () => this._handleLogout());
    EventService.Subscribe(Events.Unauthorized, () =>
      this._handleUnauthorized()
    );
  }

  render() {
    const redirect = this.state.redirectUrl;
    return <>{redirect && <Redirect to={redirect} />}</>;
  }

  _handleLogin() {
    const params = new URLSearchParams(window.location.search);
    const requestedURL = params.get(this.config.redirectParam);
    this._setUrl(requestedURL || "/");
    NotificationManager.success("Zalogowano");
  }

  _handleLogout() {
    this._setUrl("/");
    NotificationManager.success("Wylogowano");
  }

  _handleUnauthorized() {
    const { search, pathname } = window.location;
    const link = pathname + search;
    const url = `${this.config.loginPage}?${this.config.redirectParam}=${link}`;
    this._setUrl(url);

    NotificationManager.info(
      "Zaloguj się aby zobaczyć żądaną stronę.",
      "Wymagane logowanie.",
      2500
    );
  }

  _setUrl(url) {
    this.setState({ redirectUrl: "" }, () => {
      this.setState({ redirectUrl: url });
    }); // hack to force reload
  }
}
