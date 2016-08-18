import QuoteList from '../dumb/QuoteList'
import { connect } from 'react-redux'
import { getQuotes, updateStatus } from '../../redux-actions'

const visibleQuotes = (quotes, filter) => {
	const check = (q) => {
		if (q.movie.title != filter.title)
			return false
		if (filter.status == 'all')
			return true
		if (filter.status == 'deleted' || filter.status == 'approved')
			return filter.status == q.status
		if (filter.status == 'not-reviewed')
			return q.status != 'deleted' && q.status != 'approved'
	}
	return quotes.filter(q => check(q))
}

const mapStateProps = (state) => {
	return {
		quotes: visibleQuotes(state.quotes, state.filter)
	}
}

const mapDispatchProps = (dispatch) => {
	return {
		getQuotes: () => {
			dispatch(getQuotes())
		},
		updateStatus: (quote, status) => {
			dispatch(updateStatus(quote, status))
		}
	}
}

const VisibleQuotes = connect(mapStateProps, mapDispatchProps)(QuoteList)

export default VisibleQuotes
