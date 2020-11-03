import React, { Component } from "react";
import { Events, EventService, NotificationService } from "../../Services";
import AttributeService from "../../Services/AttributeService";

export default class AttributeRow extends Component {
  handleEditClick(e) {
    e.preventDefault();

    const { name, id } = this.props.data;

    let newAttributeName = prompt("Podaj nową nazwę atrybutu.", name);

    if (newAttributeName !== null) {
      AttributeService.editAttribute(id, newAttributeName)
        .then(() => {
          NotificationService.success(
            `Pomyślnie zmieniono nazwę atrybutu`,
            `${name} → ${newAttributeName}`
          );
        })
        .catch((e) => {
          NotificationService.apiError(e, "Nie udało się edytować atrybutu");
        });
    }
  }

  handleDeleteClick(e) {
    e.preventDefault();
    let id = this.props.data.id;
    AttributeService.deleteAttribute(id).then((res) => {
      NotificationService.info(`Usunięto atrybut ${this.props.data.name}`);
      EventService.Emit(Events.Admin_AttributeRemoved, id);
    });
  }

  render() {
    const { name, id } = this.props.data;
    return (
      <div>
        {id}&gt; {name}
        <button onClick={(e) => this.handleEditClick(e)}>Edytuj</button>
        <button onClick={(e) => this.handleDeleteClick(e)}>Usuń</button>
      </div>
    );
  }
}
