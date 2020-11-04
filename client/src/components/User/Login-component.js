import React, { Component } from 'react';
import { Button, Form, FormGroup, KLabel, Input, Label } from 'reactstrap';
import './newUser.css';

export default class LoginAccount extends Component {
    render() {
        return (
            <form className="loginUserForm">
                <h1><span className="font-weight-bold text-center">Login</span></h1><br />
                <FormGroup>
                    <Label>Username</Label>
                    <Input type="text" placeholder="EXS" />
                </FormGroup>
                <FormGroup>
                    <Label>Password</Label>
                    <Input type="password" placeholder="Password" />
                </FormGroup>
                <Button className="btn-lag btn-dak btn-block">Login</Button>
            </form>
        )
    }
}
