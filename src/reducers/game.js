import { GAME_FETCHED, GAME_UPDATE_SUCCESS } from "../actions/games"

export default ( state = null, action = {} ) => {
  switch(action.type) {
    case GAME_FETCHED:
      return action.game
    case GAME_UPDATE_SUCCESS:
      return action.game
    default:
      return state
  }
}