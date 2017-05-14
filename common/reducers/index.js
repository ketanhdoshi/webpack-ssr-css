import { combineReducers } from 'redux'
import counter from './counter'
import matches from './matches'
import posts from './posts'

const rootReducer = combineReducers({
  counter,
  matches,
  posts
})

export default rootReducer
