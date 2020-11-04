import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';
import './userComponent.css';


console.log("Inside New User Component");

export default class CreateAccount extends Component {

    constructor(props) {
        super(props)
        this.state = {
            userName: '',
            email: '',
            firstName: '',
            lastName: '',
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
        console.log(this.state.userName, this.state.email, this.state.firstName, this.state.lastName, this.state.password);
    }

    render() {
        return (
            <div>
                <form className="newUserForm" onSubmit={this.handleSubmit}>
                    <h1><span className="font-weight-bold text-center">NEW ACCOUNT</span></h1><br />
                    <FormGroup>
                        <Label>Username</Label>
                        <Input type="text"
                            name="userName"
                            value={this.state.userName}
                            onChange={this.handleChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label>Email</Label>
                        <Input type="text"
                            name="email"
                            value={this.state.email}
                            onChange={this.handleChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label>Firstname</Label>
                        <Input type="text"
                            name="firstName"
                            value={this.state.firstName}
                            onChange={this.handleChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label>Lastname</Label>
                        <Input type="text"
                            name="lastName"
                            value={this.state.lastName}
                            onChange={this.handleChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label>Password</Label>
                        <Input type="password"
                            name="password"
                            value={this.state.password}
                            onChange={this.handleChange} />
                    </FormGroup>
                    <Button className="btn-lag btn-dak btn-block" onClick={this.handleSubmit}>Create Account</Button>
                </form>
            </div>
        )
    }
}
