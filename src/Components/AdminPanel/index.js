import React, { Component } from "react";
import {
  AttributeService,
  Events,
  EventService,
  NotificationService,
} from "../../Services";
import AttributeRow from "../AttributeRow";

export default class AdminPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      attributes: [],
    };

    EventService.Subscribe(Events.Admin_AttributeRemoved, (id) => {
      this.setState({
        attributes: this.state.attributes.filter((x) => x.id !== id),
      });
    });
  }

  componentDidMount() {
    AttributeService.getList().then((result) => {
      const attributes = result.data;
      this.setState({ attributes });
    });
  }

  addAttributeClick(e) {
    e.preventDefault();

    let attributeName = prompt("Podaj nazwę nowego atrybutu");
    if (attributeName !== null) {
      AttributeService.addAttribute(attributeName)
        .then(() => {
          NotificationService.success(`Dodano atrybut "${attributeName}"`);
        })
        .catch((e) => {
          NotificationService.apiError(e, "Nie udało się dodać atrybutu");
        });
    }
  }

  render() {
    return (
      <div>
        Logged in as Admin.
        {this.state.attributes.map((x) => (
          <AttributeRow key={x.id} data={x} />
        ))}
        <button onClick={(e) => this.addAttributeClick(e)}>
          Dodaj atrybut
        </button>
      </div>
    );
  }
}
