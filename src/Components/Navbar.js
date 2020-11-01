import React, { Component } from 'react';
import { Link } from "react-router-dom";
import AuthService from '../Services/AuthService'

export default class Navbar extends Component {

    logout() {
        localStorage.clear();

        alert("you logged out");
        this.forceUpdate();
    }

    render() {
        return (
            <div>
                <Link to="/">Home </Link>
                { !AuthService.checkIfLogged() && <Link to="/login">Login </Link>}
                <Link to="/test">Test </Link>
                { AuthService.checkIfLogged() && <Link to="/" onClick={() => this.logout()}>Logout</Link>}
            </div >
        );
    }
};
