import React, { Component } from "react";
import AttributeRow from "../AttributeRow"
import APIService from "../../Services/APIService";

export default class AdminPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            attributes: [],
        };
    }

    componentDidMount() {
        APIService.get("Attribute/list").then((result) => {
            const attributes = result.data;
            this.setState({ attributes });
        });
    }

    handleAddClick(e) {
        e.preventDefault();

        let attributeName = prompt("Podaj nazwę atrybutu");
        if (attributeName !== null) {
            APIService.post('Attribute/', { "name": attributeName })
                .then(() => {
                    alert("Dodano atrybut o nazwie " + attributeName + ".");
                    window.location.reload(false);
                })
                .catch(e => {
                    if (e.response.status === 400) {
                        alert(e.response.data.message)
                    } else throw e;
                })
        }
    }

    render() {
        return (
            <div>
                Logged in as Admin.
                {this.state.attributes.map((x) => <AttributeRow key={x.id} data={x} />)}
                <button onClick={e => this.handleAddClick(e)}>Dodaj atrybut</button>
            </div>
        );
    }
}