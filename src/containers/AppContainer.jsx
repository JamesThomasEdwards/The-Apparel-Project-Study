//React
import ReactDOM from 'react-dom';
import React, { Component } from 'react';
//Router
import { BrowserRouter as Router, Route } from 'react-router-dom';
//Material UI
import { MuiThemeProvider } from '@material-ui/core';
//Files
import Login from '../components/Login.jsx'
import ShoppingPageContainer from './ShoppingPageContainer.jsx'
import Signup from '../components/Signup.jsx'

class AppContainer extends Component {

    render() {
        return (
            <Router>
                <MuiThemeProvider>
                    <Route exact path='/' component={ShoppingPageContainer} />
                    <Route path='/login' component={Login} />
                    <Route path='/signup' component={Signup} />
                </MuiThemeProvider>
            </Router>
        )
    }
};

export default AppContainer

