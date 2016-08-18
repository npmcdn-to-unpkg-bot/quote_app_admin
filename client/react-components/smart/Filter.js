import React from 'react';
import { connect } from 'react-redux'
import { getTitles, filterByTitle, filterByStatus } from '../../redux-actions'

class Filter extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
    	this.props.getTitles()
    }

    statusFilterChanged(e) {
        this.props.filterByStatus(e.currentTarget.value)
    }

    render() {
        return (
        	<div>
        		<select onChange={(e) => {
        			this.props.filterByTitle(e.target.value)
        		}}>
        			{
        				this.props.titles.map(title => <option key={title}>{title}</option>)
        			}
        		</select>
        		<input type='radio' value='deleted' name="status" onChange={this.statusFilterChanged.bind(this)}/> Show Deleted
        		<input type='radio' value='approved' name="status" onChange={this.statusFilterChanged.bind(this)}/> Show Approved
        		<input type='radio' value='not-reviewed' name="status" onChange={this.statusFilterChanged.bind(this)}/> Show Not Reviewed
                <input type='radio' value='all' name="status" onChange={this.statusFilterChanged.bind(this)} defaultChecked/> Show All
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
		filterByTitle: (title) => {
			dispatch(filterByTitle(title))
		},
		getTitles: () => {
			dispatch(getTitles())
		},
        filterByStatus: (status) => {
            dispatch(filterByStatus(status))
        }
	}
}

export default connect(mapStateProps, mapDispatchProps)(Filter);
