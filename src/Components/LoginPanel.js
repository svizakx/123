import React, { Component } from 'react';
import AuthService from '../Services/AuthService'

export default class LoginPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        if (AuthService.checkIfLogged()) {
            window.location = "/"
        }
    }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault();

        AuthService.login(
            {
                "emailAddress": this.state.email,
                "password": this.state.password
            }
        )

        console.log(this.state.email);
        console.log(this.state.password);
    }


    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Email:
                        <input
                            type="text"
                            name="email"
                            onChange={this.handleChange} />
                    </label>
                    <br />
                    <label>
                        Hasło:
                        <input
                            type="password"
                            name="password"
                            onChange={this.handleChange} />
                    </label>
                    <br />
                    <input
                        type="submit"
                        value="Wyślij" />
                </form>
            </div >
        )
    }
}


