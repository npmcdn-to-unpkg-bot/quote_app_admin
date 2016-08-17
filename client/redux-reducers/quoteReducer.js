const quotes = (state = [], action) => {
  switch (action.type) {
  	case 'GET_QUOTES_SUCCESS': 
  		return action.quotes
    default:
      return state
  }
}

export default quotes