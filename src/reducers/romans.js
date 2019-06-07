import { ROMANS_FETCHED, ROMAN_CREATE_SUCCESS } from "../actions/romans"

export default ( state = null, action = {} ) => {
  switch(action.type) {
    case ROMANS_FETCHED:
      return action.romans
    case ROMAN_CREATE_SUCCESS:
      return [...state, action.roman]
    default:
      return state
  }
}