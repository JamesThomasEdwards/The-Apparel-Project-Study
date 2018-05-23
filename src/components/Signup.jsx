//React
import React from 'react';
//Material UI
import { MuiThemeProvider } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
//Files
import SignupButton from './SignupButton.jsx'


const Signup = () => {

    return (
        <div >
            <MuiThemeProvider>
                <TextField
                    label="Create username"
                    id="created-username"
                />
                <TextField
                    label="Create password"
                    id="created-password"
                />
            </MuiThemeProvider>
            <SignupButton />

        </div>
    );
}


export default Signup;