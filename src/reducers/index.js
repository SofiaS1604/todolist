import {combineReducers} from "redux";
import tasks from './task';

const appReducer = combineReducers({tasks});

const rootReducer = (state, action) => appReducer(state, action);

export default rootReducer;