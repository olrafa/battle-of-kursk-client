import { combineReducers } from 'redux'
import currentUser from './currentUser'

import games from './games'
import game from './game'
import user from './user'

export default combineReducers({
  currentUser,
  games,
  game,
  user
})