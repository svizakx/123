import React, { Component } from 'react';
import APIService from '../Services/APIService';

export default class TestPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            attributes: []
        };
    }

    componentDidMount() {
        APIService.get('attributes')
            .then(result => {
                const attributes = result;
                this.setState({ attributes });
            })

    }

    render() {
        return (
            <div>
                <h1>Test</h1>
                <ul>
                    {this.state.attributes.map(att => <li>{att.id}: {att.name}</li>)}
                </ul>
            </div>
        )
    }
};