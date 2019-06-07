import { combineReducers } from 'redux'
import currentUser from './currentUser'

import games from './games'
import game from './game'
import romans from './romans'
import roman from './roman'
import user from './user'
import users from './users'

export default combineReducers({
  currentUser,
  games,
  game,
  user,
  users,
  roman,
  romans
})