import React, { Component } from "react";
import APIService from "../../Services/APIService";

export default class AttributeRow extends Component {
    constructor(props) {
        super(props);

        this.handleDeleteClick = this.handleDeleteClick.bind(this);
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
                <button onClick={this.handleDeleteClick}>Usuń</button>
            </div>
        );
    }
}

