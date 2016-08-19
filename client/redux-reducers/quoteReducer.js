const quotes = (state = {
	all: {},
	visible: []
}, action) => {
  switch (action.type) {
  	case 'GET_QUOTES_SUCCESS': 
  		let newAll = Object.assign({}, state.all, {[action.title]: action.quotes})
  		return Object.assign({}, state, {all: newAll})
  	case 'FILTER_BY_TITLE': 
  		return Object.assign({}, state, {visible: state.all[action.title]})
  	case 'QUOTE_STATUS_UPDATED':
  		let idx = state.visible.indexOf(action.quote)
  		let newVisible = [].concat(state.visible)
  		newVisible[idx].status = action.status
  		let newState = Object.assign({}, state, {visible: newVisible})
  		return newState
    default:
      return state
  }
}

export default quotes