import { combineReducers } from 'redux'
import currentUser from './currentUser'
import user from './user'
import users from './users'

export default combineReducers({
  currentUser,
  user,
  users
})