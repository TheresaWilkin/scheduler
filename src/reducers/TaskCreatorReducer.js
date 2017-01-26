import {
  TASK_ONCHANGE,
  TASK_CREATE,
  TASK_SAVE_SUCCESS
} from '../actions/types';

const INITIAL_STATE = {
  task: '',
  description: '',
  dueDate: new Date()
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TASK_ONCHANGE:
      return { ...state, [action.payload.prop]: action.payload.value };
    case TASK_CREATE:
      return INITIAL_STATE;
    case TASK_SAVE_SUCCESS:
      return INITIAL_STATE;
    default:
      return state;
  }
};
