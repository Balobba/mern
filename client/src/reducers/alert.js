import { SET_ALERT, REMOVE_ALERT } from '../actions/types';

const initialState = [];

export default function(state = initialState, action) {
  // Notes: Destuctures type and payload from action (no need to write 'action.type'. Only 'type')
  const { type, payload } = action;

  // Notes: Use '...state' because their may be other states in that array
  switch (type) {
    case SET_ALERT:
      return [...state, payload];
    case REMOVE_ALERT:
      return state.filter(alert => alert.id !== payload);
    default:
      return state;
  }
}
