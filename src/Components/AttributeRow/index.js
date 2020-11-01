import React, { Component } from "react";


export default class AttributeRow extends Component {

    render() {
        return (
            <div>
                {this.props.data.id}: {this.props.data.name}
            </div>
        );
    }
}

