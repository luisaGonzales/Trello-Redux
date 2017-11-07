import React, {Component} from 'react';
import './Boards.css';
import {NavLink} from 'react-router-dom';
import {Col} from 'react-bootstrap';

const Header = ({userName, userLastName}) => {
    return(
        <header className="header">
            <nav>
                <Col sm={1}>
                    <i className="fa fa-columns"></i>
                    <span>Boards</span>
                </Col>
                <Col sm={8}>
                    <img src="https://phoenix-trello.herokuapp.com/images/logo-11ecccd65d1c7977997eb6f0bc0002ad.png?vsn=d" alt="logo" className="brandBoard"/>
                </Col>
                <Col sm={2}>
                    <span>{userName} {userLastName}</span>
                </Col>
                <Col sm={1}>
                    <NavLink to="/signIn">Sign Out</NavLink>
                </Col>
            </nav>
        </header>
    );
}

export const Boards = ({users}) => {
    return (
        <div className="boards">
            <Header userName={users[0].firstName} userLastName={users[0].lastName}/>
        </div>
        
    );
}

