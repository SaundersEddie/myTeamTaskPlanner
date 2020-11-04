import React, { Component, useRef } from 'react';
import { Button, Form, FormGroup, KLabel, Input, Label } from 'reactstrap';
import './userComponent.css';

export default class LoginAccount extends Component {
    constructor(props) {
        super(props)
        this.state = {
            userName: '',
            password: ''
        };
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.state.userName, this.state.password);
    }

    render() {
        return (
            <form className="loginUserForm">
                <h1><span className="font-weight-bold text-center">LOGIN</span></h1><br />
                <FormGroup>
                    <Label>Username</Label>
                    <Input type="text"
                        name="userName"
                        value={this.state.userName}
                        onChange={this.handleChange} />
                </FormGroup>
                <FormGroup>
                    <Label>Password</Label>
                    <Input type="password"
                        name="password"
                        value={this.state.password}
                        onChange={this.handleChange} />
                </FormGroup>
                <Button className="btn-lag btn-dak btn-block" onClick={this.handleSubmit}>Login</Button>
            </form>
        )
    }
}
