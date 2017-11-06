import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, NavLink, Switch, Redirect } from 'react-router-dom';
import {SignIn} from './SignIn';
import {SignUp} from './SignUp';
import { connect } from 'redux-zero/react';

const App = ({board}) => {
  return(
    <BrowserRouter>
      <Switch>
        <Route exact path="/" render={() => <SignIn />} />
        <Route exact path="/signIn" render={() => <SignIn />} />
        <Route exact path="/signUp" render={() => <SignUp />} />
      </Switch>
    </BrowserRouter>
  )
}


const mapToProps = ({ board }) => ({ board });
export default connect(mapToProps)(App);
