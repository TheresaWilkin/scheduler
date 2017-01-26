import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import TaskCreatorReducer from './TaskCreatorReducer';
import TasksReducer from './TasksReducer';

export default combineReducers({
  auth: AuthReducer,
  taskCreatorForm: TaskCreatorReducer,
  tasks: TasksReducer
});
