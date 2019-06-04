import { GAMES_FETCHED, GAME_CREATE_SUCCESS } from "../actions/games"

export default ( state = null, action = {} ) => {
  switch(action.type) {
    case GAMES_FETCHED:
      return action.games
    case GAME_CREATE_SUCCESS:
      return [...state, action.game]
    default:
      return state
  }
}