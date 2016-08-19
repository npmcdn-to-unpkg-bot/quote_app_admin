const titles = (state = {
	all: [], 
	fetched: []
}, action) => {
  switch (action.type) {
  	case 'GET_TITLES_SUCCESS': 
  		return Object.assign({}, state, {all: action.titles})
  	case 'GET_QUOTES_SUCCESS':
  		return Object.assign({}, state, {fetched: state.fetched.concat(action.title)})
    default:
      return state
  }
}

export default titles