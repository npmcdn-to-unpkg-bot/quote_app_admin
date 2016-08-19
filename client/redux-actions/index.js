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

export const getQuotesByTitle = (title) => {
	return (dispatch) => {
		var myHeaders = new Headers()
		myHeaders.append('Content-Type', 'application/json')
		fetch('/api/quotesByTitle', {
			method: "POST",
			headers: myHeaders,
			body: JSON.stringify({
				title: title
			})
		})
		.then(res => res.json())
		.then(quotes => {
			dispatch({
				type: 'GET_QUOTES_SUCCESS',
				quotes,
				title
			})
			dispatch({
				type: "FILTER_BY_TITLE",
				title
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
			// auto get quotes for first title
			dispatch(getQuotesByTitle(titles[0]))
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

export const updateStatus = (quote, status) => {
	return (dispatch) => {
		fetch('/api/quote/' + quote._id + '/' + status, {
			method: 'POST'
		}).then(res => {
			dispatch({
				type: "QUOTE_STATUS_UPDATED",
				quote,
				status
			})
		})
	}
}