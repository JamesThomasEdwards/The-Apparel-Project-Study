//React
import ReactDOM from 'react-dom';
import React, { Component } from 'react';
//Material UI
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

export default class Filter extends Component {

    render() {
        return (
            <div>
                <Button
                    aria-owns={this.props.anchorEl ? 'simple-menu' : null}
                    aria-haspopup="true"
                    onClick={this.props.handleClick}
                >
                    Filter
        </Button>
                <Menu
                    id="simple-menu"
                    anchorEl={this.props.anchorEl}
                    open={Boolean(this.props.anchorEl)}
                    onClose={this.props.handleClose}
                >
                    {/* need to create actions to filter by itmes
                handleClose is a placeholder */}
                    <MenuItem onClick={this.props.filterSunglasses}>Sunglasses</MenuItem>
                    <MenuItem onClick={this.props.handleClose}>Shirts</MenuItem>
                    <MenuItem onClick={this.props.handleClose}>Shoes</MenuItem>
                    <MenuItem onClick={this.props.handleClose}>Pants</MenuItem>
                </Menu>
            </div>
        );
    }
}



