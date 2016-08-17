const titles = (state = [], action) => {
  switch (action.type) {
  	case 'GET_TITLES_SUCCESS': 
  		return action.titles
    default:
      return state
  }
}

export default titles