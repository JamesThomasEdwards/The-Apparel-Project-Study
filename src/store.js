//Redux
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
//Files
import reducers from './reducers/combinedReducers';


//the store, with thunk middleware to allow for async action.
const store = createStore(
    reducers,
    composeWithDevTools(
        applyMiddleware(thunk)
    )
);


