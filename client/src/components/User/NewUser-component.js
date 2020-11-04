import React, { Component } from 'react';
// import { Link } from 'react-router-dom';

export default class CreateAccount extends Component {
    render() {
        return (
            <div className="card mx-auto container" style={{ width: 35 + "rem" }}>
                <div className="card-header">Create New Account</div>
                <div className="card-body">
                    <h5 className="card-title">Create Account</h5>
                    <p className="card-text">Please Fill In The Form to Create an Account</p>
                    <a href="https://github.com/" className="btn btn-info">Help</a>
                </div>
            </div>
        )
    }
}
