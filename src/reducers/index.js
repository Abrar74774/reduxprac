import counter from './counter';
import loggedReducer from './isLogged';
import { combineReducers } from 'redux';

const allReds = combineReducers({
    counter: counter,
    isLogged: loggedReducer
});

export default allReds;  