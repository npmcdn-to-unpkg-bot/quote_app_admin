const filter = (state = {status: 'all'}, action) => {
  switch (action.type) {
  	case 'FILTER_BY_TITLE':
  		return Object.assign({}, state, {title: action.title}) 
  	case 'FILTER_BY_STATUS':
  		return Object.assign({}, state, {status: action.status})
  	case 'GET_QUOTES_SUCCESS':
  		return Object.assign({}, state, {title: action.quotes[0].movie.title}) 
    default:
      return state
  }
}

export default filter