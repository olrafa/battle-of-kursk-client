import { USER_CREATE_SUCCESS } from '../actions/createUser'

const initialState = null

export default function reducer(state = initialState, action) {
  switch (action.type) {
    // case USER_FETCHED:
    //   return action.events;
    case USER_CREATE_SUCCESS:
      return [
        ...state,
        action.event
      ];
    default:
      return state
  }
}