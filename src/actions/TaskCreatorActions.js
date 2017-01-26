import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import {
  TASK_ONCHANGE,
  TASK_CREATE,
  TASKS_FETCH_SUCCESS,
  TASK_SAVE_SUCCESS
} from './types';

export const taskOnChange = ({ prop, value }) => {
  return {
    type: TASK_ONCHANGE,
    payload: { prop, value }
  };
};

export const taskCreate = ({ task, description, dueDate }) => {
  console.log(task, description, dueDate);
  const { currentUser } = firebase.auth();
  const dueDateStr = dueDate.toString();
  return (dispatch) => {
  firebase.database().ref(`/users/${currentUser.uid}/tasks`)
    .push({ task, description, dueDate: dueDateStr })
    .then(() => {
      dispatch({ type: TASK_CREATE });
      Actions.taskList({ type: 'reset' });
    });
  };
};

export const tasksFetch = () => {
  const { currentUser } = firebase.auth();

  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/tasks`)
      .on('value', snapshot => {
        dispatch({ type: TASKS_FETCH_SUCCESS, payload: snapshot.val() });
      });
  };
};

export const taskSave = ({ task, description, dueDate, uid }) => {
  const { currentUser } = firebase.auth();
  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/tasks/${uid}`)
      .set({ task, description, dueDate: dueDate.toString() })
      .then(() => {
        dispatch({ type: TASK_SAVE_SUCCESS });
        Actions.taskList({ type: 'reset' });
      });
  };
};

export const taskDelete = ({ uid }) => {
  const { currentUser } = firebase.auth();

  return () => {
    firebase.database().ref(`/users/${currentUser.uid}/tasks/${uid}`)
      .remove()
      .then(() => {
        Actions.taskList({ type: 'reset' });
      });
  };
};
