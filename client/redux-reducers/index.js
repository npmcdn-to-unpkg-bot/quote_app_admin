import { combineReducers } from 'redux'
import quotes from './quoteReducer'
import filter from './filterReducer'
import titles from './titles'

const reducers = combineReducers({
	quotes,
	filter,
	titles
})

export default reducers