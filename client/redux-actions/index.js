import fetch from 'isomorphic-fetch'

export const getQuotes = () => {
	return (dispatch) => {
		fetch('/api/quotes/all')
		.then(res => res.json())
		.then(quotes => {
			dispatch({
				type: 'GET_QUOTES_SUCCESS',
				quotes
			})
		})
	}
}

export const getTitles = () => {
	return (dispatch) => {
		fetch('/api/titles')
		.then(res => res.json())
		.then(titles => {
			dispatch({
				type: 'GET_TITLES_SUCCESS',
				titles
			})
		})
	}
}

export const filterByTitle = (title) => {
	return {
		type: "FILTER_BY_TITLE",
		title
	}
}

export const filterByStatus = (status) => {
	return {
		type: 'FILTER_BY_STATUS',
		status
	}
}