import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

function placeholder(state = {}, action) {
  return state
}

const rootReducer = combineReducers({
  placeholder,
  routing: routerReducer
})

export default rootReducer
