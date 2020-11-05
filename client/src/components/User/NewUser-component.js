import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';
import API from '../../utils/API';
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
        // Here we will call the create account
        event.preventDefault();
        // Send our data to the API call to addUser
        // console.log (`this.state.username: ${this.state.userName}`)
        let ourUser = ({
            userName: this.state.userName, 
            email: this.state.email, 
            firstName: this.state.firstName, 
            lastName: this.state.lastName, 
            password: this.state.password
        });

        console.log (`ourUser is`, ourUser);
        API.addUser (ourUser);
    }

    render() {
        return (
            <div>
                <form className="newUserForm" onSubmit={this.handleSubmit}>
                    <h1><span className="text-center">NEW ACCOUNT</span></h1><br />
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
