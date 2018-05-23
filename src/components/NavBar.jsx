//React
import React from 'react';
//Router
import { Link } from "react-router-dom";
//Material UI
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
//Files
import Filter from './Filter.jsx'

const styles = {
    root: {
        flexGrow: 1,
    },
    flex: {
        flex: 1,
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
};

const NavBar = (props) => {
    const { classes } = props;
    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
                        {/* installing Redux, had to comment out until complete */}
                        {/* <Filter handleClick={this.props.handleClick} handleClose={this.props.handleClose} anchorEl={this.props.anchorEl} filterSunglasses={this.props.filterSunglasses} /> */}
                        <Filter />
                    </IconButton>
                    <Typography variant="title" color="inherit" className={classes.flex}>
                        Shop
          </Typography>
                    <Button color="inherit">View Cart</Button>
                    <Link to='/login'>
                        <Button color="inherit">Login</Button>
                    </Link>
                </Toolbar>
            </AppBar>
        </div >
    );
}
NavBar.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NavBar);
