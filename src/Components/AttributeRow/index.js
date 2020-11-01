import React, { Component } from "react";
import APIService from "../../Services/APIService";

export default class AttributeRow extends Component {
    constructor(props) {
        super(props);

        this.handleEditClick = this.handleEditClick.bind(this);
        this.handleDeleteClick = this.handleDeleteClick.bind(this);
    }

    handleEditClick(e) {
        e.preventDefault();

        let attributeName = prompt("Podaj nową nazwę atrybutu " + this.props.data.name + ".");
        if (attributeName !== null) {
            APIService.put('Attribute/', this.props.data.id, { "name": attributeName })
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

        APIService.delete('Attribute/', this.props.data.id)
            .then(res => {
                alert("Usunięto atrybut o id " + this.props.data.id + ".");
                window.location.reload(false);
            })
    }

    render() {
        return (
            <div>
                {this.props.data.id}: {this.props.data.name}
                <button onClick={this.handleEditClick}>Edytuj</button>
                <button onClick={this.handleDeleteClick}>Usuń</button>
            </div>
        );
    }
}

