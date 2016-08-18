const quotes = (state = [], action) => {
  switch (action.type) {
  	case 'GET_QUOTES_SUCCESS': 
  		return action.quotes
  	case 'QUOTE_STATUS_UPDATED':
  		let idx = state.indexOf(action.quote)
  		let newState = [].concat(state)
  		state[idx].status = action.status
  		return newState
    default:
      return state
  }
}

export default quotes