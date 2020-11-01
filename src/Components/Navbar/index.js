import React, { Component } from "react";
import { Link } from "react-router-dom";
import AuthService from "../../Services/AuthService";
import "./index.css";

export default class Navbar extends Component {
  render() {
    const isLogged = AuthService.isLogged();
    return (
      <nav className="navbar navbar-expand-sm bg-light">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/test" className="nav-link">
              Test
            </Link>
          </li>
          {isLogged ? (
            <li className="nav-item">
              <Link to="/#" className="nav-link" onClick={() => AuthService.logout()}>
                Logout
              </Link>
            </li>
          ) : (
              <li className="nav-item">
                <Link to="/login" className="nav-link">
                  Login
              </Link>
              </li>
            )}
        </ul>
      </nav>
    );
  }
}
