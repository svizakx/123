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


    render() {
        return (
            <div>
                Logged in as Admin.
                {this.state.attributes.map((x) => <AttributeRow data={x} key={x.id} />)}
            </div>
        );
    }
}