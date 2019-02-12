import { combineReducers } from 'redux';
import userprofile from './userprofile';

const rootReducer = combineReducers({
    userprofile: userprofile,
});

export default rootReducer;
