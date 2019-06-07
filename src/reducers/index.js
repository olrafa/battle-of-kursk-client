import { combineReducers } from 'redux'
import currentUser from './currentUser'
import games from './games'
import game from './game'
import romans from './romans'
import roman from './roman'

export default combineReducers({
  currentUser, games, game, roman, romans
})