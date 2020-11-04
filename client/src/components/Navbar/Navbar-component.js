import React, { Component } from 'react';
import { Link } from 'react-router-dom';


export default class Navbar extends Component {
    render() {
        return (
            <nav className="container navbar navbar-dark bg-dark navbar-expand-lg">
                {/* <Link to="/" className="navbar-brand">Team Task</Link> */}
                <div className="navbar-collapse">
                    <ul className="navbar-nav mr-auto">
                        <li className="navbar-item">
                            {/* <Link to="/" className="nav-link">All Days</Link> */}
                        </li>
                        <li className="navbar-item">
                            <Link to="/loginaccount" className="nav-link">Login</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/createaccount" className="nav-link">Create Account</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/about" className="nav-link">About</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}
