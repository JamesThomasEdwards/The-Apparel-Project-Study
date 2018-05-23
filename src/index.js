//React
import React from 'react';
import ReactDOM from 'react-dom';
//Router
import { BrowserRouter } from 'react-router-dom';
//Redux
import { Provider } from 'react-redux';
import store from './store.js';
//Files
import AppContainer from './containers/AppContainer.jsx'

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <AppContainer />
        </BrowserRouter>
    </Provider>, document.getElementById('root')
);