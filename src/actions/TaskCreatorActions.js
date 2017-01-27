import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import {
  TASK_ONCHANGE,
  TASK_CREATE,
  TASKS_FETCH_SUCCESS,
  TASK_SAVE_SUCCESS,
  TASK_DELETE_SUCCESS
} from './types';

export const taskOnChange = ({ prop, value }) => {
  return {
    type: TASK_ONCHANGE,
    payload: { prop, value }
  };
};

export const taskCreate = ({ task, description, dueDate, subtasks, dateCreated }) => {
  const { currentUser } = firebase.auth();
  const dueDateStr = dueDate.toString();
  const dateCreatedStr = dateCreated.toString();

  return (dispatch) => {
  firebase.database().ref(`/users/${currentUser.uid}/tasks`)
    .push({ task, description, dueDate: dueDateStr, subtasks, dateCreated: dateCreatedStr })
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

export const taskSave = ({ task, description, dueDate, subtasks, dateCreated, uid }) => {
  const { currentUser } = firebase.auth();
  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/tasks/${uid}`)
      .set({
        task,
        description,
        dueDate: dueDate.toString(),
        subtasks,
        dateCreated: dateCreated.toString()
      })
      .then(() => {
        dispatch({ type: TASK_SAVE_SUCCESS });
        Actions.taskList({ type: 'reset' });
      });
  };
};

export const taskDelete = ({ uid }) => {
  const { currentUser } = firebase.auth();

  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/tasks/${uid}`)
      .remove()
      .then(() => {
        dispatch({ type: TASK_DELETE_SUCCESS });
        Actions.taskList({ type: 'reset' });
      });
  };
};
