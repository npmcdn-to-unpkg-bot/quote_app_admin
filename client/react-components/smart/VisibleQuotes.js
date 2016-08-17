import QuoteList from '../dumb/QuoteList'
import { connect } from 'react-redux'
import { getQuotes } from '../../redux-actions'

const visibleQuotes = (quotes, filter) => {
	return quotes.filter(q => q.movie.title == filter)
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
	}
}

const VisibleQuotes = connect(mapStateProps, mapDispatchProps)(QuoteList)

export default VisibleQuotes
