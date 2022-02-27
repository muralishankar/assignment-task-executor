import { combineReducers } from "redux";
import taskListReducer from './taskListReducer';

const reducers = combineReducers({ taskList: taskListReducer });

export default reducers;

export type State = ReturnType<typeof reducers>;