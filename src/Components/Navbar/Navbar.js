import React, { Component } from 'react';
import { Link } from "react-router-dom";
import AuthService from '../../Services/AuthService'
import './Navbar.css';

export default class Navbar extends Component {

    logout() {
        localStorage.clear();

        alert("you logged out");
        this.forceUpdate();
    }

    render() {
        return (
            <nav class="navbar navbar-expand-sm bg-light">
                <ul class="navbar-nav">
                    <li class="nav-item"><Link to="/"><a class="nav-link">Home </a></Link></li>
                    <li class="nav-item">{ !AuthService.checkIfLogged() && <Link to="/login"><a class="nav-link">Login </a></Link>}</li>
                    <li class="nav-item"><Link to="/test"><a class="nav-link">Test </a></Link></li>
                    <li class="nav-item">{ AuthService.checkIfLogged() && <Link to="/" onClick={() => this.logout()}><a class="nav-link">Logout </a></Link>}</li>
                </ul>
            </nav>
        );
    }
};
