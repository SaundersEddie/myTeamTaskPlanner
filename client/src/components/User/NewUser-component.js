import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import { Button, Form, FormGroup, KLabel, Input, Label } from 'reactstrap';
import './newUser.css';


export default class CreateAccount extends Component {
    render() {
        return (
            <div>
                <form className="newUserForm">
                    <h1><span className="font-weight-bold text-center">New Account</span></h1><br />
                    <FormGroup>
                        <Label>Username</Label>
                        <Input type="text" placeholder="EXS" />
                    </FormGroup>
                    <FormGroup>
                        <Label>Email</Label>
                        <Input type="text" placeholder="saunders.eddie@gmail.com" />
                    </FormGroup>
                    <FormGroup>
                        <Label>Firstname</Label>
                        <Input type="text" placeholder="Eddie" />
                    </FormGroup>
                    <FormGroup>
                        <Label>Lastname</Label>
                        <Input type="text" placeholder="Saunders" />
                    </FormGroup>
                    <FormGroup>
                        <Label>Password</Label>
                        <Input type="password" placeholder="Password" />
                    </FormGroup>
                    <Button className="btn-lag btn-dak btn-block">Create Account</Button>
                </form>

            </div>






            // <div className="card mx-auto container" style={{ width: 35 + "rem" }}>
            //     <div className="card-header">Create New Account</div>
            //     <div className="card-body">
            //         <h5 className="card-title">Create Account</h5>
            //         <p className="card-text">Please Fill In The Form to Create an Account</p>
            //         <a href="https://github.com/" className="btn btn-info">Help</a>
            //     </div>
            // </div>
        )
    }
}
