import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, NavLink, Switch, Redirect } from 'react-router-dom';
import {SignIn} from './SignIn';
import {SignUp} from './SignUp';
import {Boards} from './Boards';
import { connect } from 'redux-zero/react';

const App = ({board, users}) => {
  return(
    <BrowserRouter>
      <Switch>
        <Route exact path="/" render={() => <SignIn />} />
        <Route exact path="/signIn" render={() => <SignIn />} />
        <Route exact path="/signUp" render={() => <SignUp />} />
        <Route exact path="/boards" render={() => <Boards users={users}/>} />
        <Route render={() => <Redirect to={"/"} />}/>
      </Switch>
    </BrowserRouter>
  )
}


const mapToProps = ({ board, users }) => ({ board, users });
export default connect(mapToProps)(App);
