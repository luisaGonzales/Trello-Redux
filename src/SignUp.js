import React, {Component} from 'react';
import './SignUp.css';
import {NavLink} from 'react-router-dom';
import {Form, FormGroup, FormControl, Col, Button, ControlLabel} from 'react-bootstrap';

export const SignUp = ({}) => {
    return (
        <div className="background text-center">
            <Form horizontal>
                <img src="https://phoenix-trello.herokuapp.com/images/logo-11ecccd65d1c7977997eb6f0bc0002ad.png?vsn=d" alt="logo" className="brandSU"/>
                <FormGroup controlId="formHorizontalEmail">
                    <Col smOffset={4} sm={4}>
                        <FormControl className="inputSI" type="text" placeholder="First name"/>
                    </Col>
                </FormGroup>

                <FormGroup controlId="formHorizontalPassword">
                    <Col smOffset={4} sm={4}>
                        <FormControl className="inputSI" type="text" placeholder="Last name"/>
                    </Col>
                </FormGroup>

                <FormGroup controlId="formHorizontalPassword">
                    <Col smOffset={4} sm={4}>
                        <FormControl className="inputSI" type="email" placeholder="E-mail"/>
                    </Col>
                </FormGroup>

                <FormGroup controlId="formHorizontalPassword">
                    <Col smOffset={4} sm={4}>
                        <FormControl className="inputSI" type="password" placeholder="Password"/>
                    </Col>
                </FormGroup>

                <FormGroup controlId="formHorizontalPassword">
                    <Col smOffset={4} sm={4}>
                        <FormControl className="inputSI" type="password" placeholder="Password"/>
                    </Col>
                </FormGroup>

                <FormGroup>
                    <Col smOffset={4} sm={4}>
                        <Button type="submit" className="btnSubmit">
                            Sign up
                        </Button>
                    </Col>
                </FormGroup>
                <NavLink className="navlinkSI" to="/signIn">Sign In</NavLink>
            </Form>
        </div>
    );
}