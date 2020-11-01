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

    EventService.Subscribe(Events.Login, () => {
      const params = new URLSearchParams(window.location.search);
      const requestedURL = params.get(this.config.redirectParam);

      console.log(this.state);

      this.setUrl(requestedURL || "/");
      NotificationManager.success("Zalogowano");
    });

    EventService.Subscribe(Events.Logout, () => {
      this.setUrl("/");
      NotificationManager.success("Wylogowano");
    });

    EventService.Subscribe(Events.Unauthorized, () => {
      NotificationManager.info(
        "Zaloguj się aby zobaczyć żądaną stronę.",
        "Wymagane logowanie."
      );

      let { search, pathname } = window.location;

      const url = `${this.config.loginPage}?${this.config.redirectParam}=${
        pathname + search
      }`;
      this.setUrl(url);
    });
  }

  render() {
    const redirect = this.state.redirectUrl;
    return <>{redirect && <Redirect to={redirect} />}</>;
  }

  setUrl(url) {
    this.setState({ redirectUrl: "" }, () => {
      this.setState({ redirectUrl: url });
    }); // hack to force reload
  }
}
