import { combineReducers } from 'redux';
import filterReducer from './filterReducer';

const reducers = combineReducers({
    filterReducer: filterReducer,
});

export default reducers