import QuoteList from '../dumb/QuoteList'
import { connect } from 'react-redux'
import { getQuotes, updateStatus } from '../../redux-actions'

const filterByStatus = (quotes, status) => {
	const check = (q) => {
		if (status == 'all')
			return true
		if (status == 'deleted' || status == 'approved')
			return status == q.status
		if (status == 'not-reviewed')
			return q.status != 'deleted' && q.status != 'approved'
	}
	return quotes.filter(q => check(q))
}

const mapStateProps = (state) => {
	return {
		quotes: filterByStatus(state.quotes.visible, state.filter.status)
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
