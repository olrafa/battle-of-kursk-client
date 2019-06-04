import { createStore, applyMiddleware, compose } from 'redux'
import reducer from './reducers'
import ReduxThunk from 'redux-thunk'
import socketset from 'socketset'

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ 
? window.__REDUX_DEVTOOLS_EXTENSION__() 
: f => f
const socket = socketset('localhost:4000')
const enhancer = compose(
  applyMiddleware(socket, ReduxThunk),
  devTools
)
const store = createStore(reducer, enhancer)
store.dispatch({ type: 'SOCKETSET_CONNECT' })

export default store