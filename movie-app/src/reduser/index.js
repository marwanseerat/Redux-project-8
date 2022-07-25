import {combineReducers} from 'redux';
import loginReducer from "./Login";



const AllReducers=combineReducers({
    login: loginReducer,
});

export default AllReducers;
