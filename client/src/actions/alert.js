import { SET_ALERT, REMOVE_ALERT } from './types';
import uuid from 'uuid';

// Notes: An action
export const setAlert = (msg, alertType, timeout = 5000) => dispatch => {
  // Notes: Creates random universal ID
  const id = uuid.v4();

  dispatch({
    type: SET_ALERT,
    payload: { msg, alertType, id }
  });

  setTimeout(() => dispatch({ type: REMOVE_ALERT, payload: id }), timeout);
};
