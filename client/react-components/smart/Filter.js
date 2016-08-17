import React from 'react';
import { connect } from 'react-redux'
import { getTitles, filterBy } from '../../redux-actions'

class Filter extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
    	this.props.getTitles()
    }

    render() {
        return (
        	<div>
        		<select onChange={(e) => {
        			this.props.filterBy(e.target.value)
        		}}>
        			{
        				this.props.titles.map(title => <option key={title}>{title}</option>)
        			}
        		</select>
        	</div>
        );
    }
}

const mapStateProps = (state) => {
	return {
		titles: state.titles
	}
}

const mapDispatchProps = (dispatch) => {
	return {
		filterBy: (title) => {
			dispatch(filterBy(title))
		},
		getTitles: () => {
			dispatch(getTitles())
		},

	}
}

export default connect(mapStateProps, mapDispatchProps)(Filter);
