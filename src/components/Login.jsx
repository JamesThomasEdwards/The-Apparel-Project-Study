//React
import React from 'react';
//Router
import { Link } from "react-router-dom";
//Material UI
import { MuiThemeProvider } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
//Files
import LoginButton from './LoginButton.jsx';

const Login = () => {
    return (
        <div >
            <MuiThemeProvider >
                <TextField
                    label="Username"
                    id="username"
                />
                <TextField
                    label="Password"
                    id="password"
                />
            </MuiThemeProvider>
            <LoginButton />
            <p>Don't have an account?</p>
            <Link to='/signup'><p>Signup here</p></Link>
        </div>
    );
}


export default Login;
