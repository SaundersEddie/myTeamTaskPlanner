import React, { Component } from 'react';

export default class About extends Component {
    render() {
        return (
            <div className="card mx-auto container" style={{ width: 35 + "rem" }}>
                <div className="card-header">
                    About
            </div>
                <div className="card-body">
                    <h5 className="card-title">Team Task</h5>
                    <p className="card-text">This is a simople app with user authentication that will allow users to review and edit tasks.</p>
                    <a href="https://github.com/" className="btn btn-primary">gitHhub</a>
                </div>
            </div>
        )
    }
}