import { ROMAN_FETCHED, ROMAN_UPDATE_SUCCESS } from "../actions/romans"

export default ( state = null, action = {} ) => {
  switch(action.type) {
    case ROMAN_FETCHED:
      return action.roman
    case ROMAN_UPDATE_SUCCESS:
      return action.roman
    default:
      return state
  }
}