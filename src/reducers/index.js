import { combineReducers } from 'redux';
import users from './user';
import menuReducer from '../reducers/menuReducer';

const rootReducer = combineReducers({
    users: users,
    menu: menuReducer
});

export default rootReducer;
