import { combineReducers } from 'redux'

function placeholder(state = {}, action) {
  return state
}

const rootReducer = combineReducers({
  placeholder,
})

export default rootReducer
