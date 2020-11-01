import React, { Component } from "react";
import AttributeRow from "../AttributeRow"
import AttributeService from "../../Services/AttributeService";

export default class AdminPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            attributes: [],
        };
    }

    componentDidMount() {
        AttributeService.getList()
            .then((result) => {
                const attributes = result.data;
                this.setState({ attributes });
            });
    }

    handleAddClick(e) {
        e.preventDefault();

        let attributeName = prompt("Podaj nazwę atrybutu");
        if (attributeName !== null) {
            AttributeService.addAttribute(attributeName)
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