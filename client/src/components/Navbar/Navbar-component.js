import React, { Component } from 'react';
import { Link } from 'react-router-dom';


export default class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
                {/* <Link to="/" className="navbar-brand">Team Task</Link> */}
                <div className="navbar-collapse">
                    <ul className="navbar-nav mr-auto">
                        <li className="navbar-item">
                            {/* <Link to="/" className="nav-link">All Days</Link> */}
                        </li>
                        <li className="navbar-item">
                            {/* <Link to="/create" className="nav-link">Create Day</Link> */}
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
