//React
import ReactDOM from 'react-dom';
import React, { Component } from 'react';
//Redux
import { connect } from 'react-redux'
import { handleClick, handleClose, filterSunglasses } from '../actions';
//Material UI
import { MuiThemeProvider } from '@material-ui/core';
//Files
import NavBar from '../components/NavBar.jsx'
import Product from '../components/ProductGridList.jsx'

const mapStateToProps = (store) => {
    return {
        anchorEl: store.filterReducer.anchorEl,
        filterItems: store.filterReducer.filterItems
    }
}

const mapDispatchToProps = (dispatch) => ({
    handleClick: () => {
        dispatch(handleClick())
    },
    handleClose: () => {
        dispatch(handleClose());
    },
    filterSunglasses: () => {
        dispatch(filterSunglasses())
    }
})

class ShoppingPageContainer extends Component {
    render() {
        return (
            <main>
                <NavBar handleClick={this.props.handleClick} handleClose={this.props.handleClose} anchorEl={this.props.anchorEl} filterSunglasses={this.props.filterSunglasses} />
                <Product filterItems={this.props.filterItems} />
            </main>
        )
    }
}

// export default connect(mapStateToProps, mapDispatchToProps)(ShoppingPageContainer);
export default ShoppingPageContainer
