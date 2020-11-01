import React, { Component } from 'react';
import { Link } from "react-router-dom";
import AuthService from '../../Services/AuthService'
import './index.css';

export default class Navbar extends Component {

    render() {
        return (
            <nav class="navbar navbar-expand-sm bg-light">
                <ul class="navbar-nav">
                    <li class="nav-item"><Link to="/" class="nav-link">Home </Link></li>
                    {!AuthService.checkIfLogged() && (<li class="nav-item"><Link to="/login" class="nav-link">Login </Link></li>)}
                    <li class="nav-item"><Link to="/test" class="nav-link">Test </Link></li>
                    {AuthService.checkIfLogged() && (<li class="nav-item"><Link to="/" class="nav-link" onClick={() => this.logout()}>Logout </Link></li>)}
                </ul>
            </nav>
        );
    }
};
