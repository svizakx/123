import React, { Component } from "react";
import AttributeService from "../../Services/AttributeService";

export default class AttributeRow extends Component {

    handleEditClick(e) {
        e.preventDefault();

        let attributeName = prompt("Podaj nową nazwę atrybutu.", this.props.data.name);
        if (attributeName !== null) {
            let id = this.props.data.id;
            AttributeService.editAttribute(id, attributeName)
                .then(() => {
                    alert("Zmieniono nazwę atrybutu na " + attributeName + ".");
                    window.location.reload(false);
                })
                .catch(e => {
                    if (e.response.status === 400) {
                        alert(e.response.data.message)
                        console.log()
                    } else throw e;
                })
        }
    }

    handleDeleteClick(e) {
        e.preventDefault();

        let id = this.props.data.id;
        AttributeService.deleteAttribute(id)
            .then(res => {
                alert("Usunięto atrybut o id " + id + ".");
                window.location.reload(false);
            })
    }

    render() {
        return (
            <div>
                {this.props.data.id}: {this.props.data.name}
                <button onClick={e => this.handleEditClick(e)}>Edytuj</button>
                <button onClick={e => this.handleDeleteClick(e)}>Usuń</button>
            </div>
        );
    }
}

