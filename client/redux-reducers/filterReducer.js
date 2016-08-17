const filter = (state = {}, action) => {
  switch (action.type) {
  	case 'FILTER_BY_TITLE':
  		return action.title
    default:
      return state
  }
}

export default filter