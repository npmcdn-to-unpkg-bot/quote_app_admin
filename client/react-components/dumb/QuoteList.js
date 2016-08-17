import React from 'react';
import Quote from '../dumb/Quote'

class QuoteList extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
    	this.props.getQuotes()
    }

    render() {
        return (
        	<div>
        		{
        			this.props.quotes.map(quote => <Quote key={quote.id} data={quote}/>)
        		}
        	</div>
        )
    }
}

export default QuoteList