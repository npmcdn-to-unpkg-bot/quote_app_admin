import React from 'react';
import { connect } from 'react-redux'
import { getTitles, filterByTitle, filterByStatus, getQuotesByTitle } from '../../redux-actions'
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton'
import { Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle } from 'material-ui/Toolbar'
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'
import DropDownMenu from 'material-ui/DropDownMenu'

class Filter extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
    	this.props.getTitles()
    }
    
    handleChangeTitle(event, index, value) {
        if( this.props.titles.fetched.indexOf(value) == -1 ){
            this.props.getQuotesByTitle(value)
        } else {
            this.props.filterByTitle(value)
        }
        
    }

    handleChangeStatus(event, index, value) {
        this.props.filterByStatus(value)
    }
    
    render() {
        return (
            <Toolbar className="filter">
                <ToolbarGroup>
                    <DropDownMenu value={this.props.filter.title} onChange={this.handleChangeTitle.bind(this)}>
                        {
                            this.props.titles.all.map((title, idx) => <MenuItem value={title} key={idx} primaryText={title} />)
                        }
                    </DropDownMenu>

                    <DropDownMenu value={this.props.filter.status} onChange={this.handleChangeStatus.bind(this)}>
                        <MenuItem value="all" primaryText="Show All" />
                        <MenuItem value="not-reviewed" primaryText="Show Not Reviewed" />
                        <MenuItem value="approved" primaryText="Show Approved" />
                        <MenuItem value="deleted" primaryText="Show Deleted" />
                    </DropDownMenu>
                </ToolbarGroup>
            </Toolbar>
        );
    }
}

const mapStateProps = (state) => {
	return {
		titles: state.titles,
        filter: state.filter,
	}
}

const mapDispatchProps = (dispatch) => {
	return {
		filterByTitle: (title) => {
			dispatch(filterByTitle(title))
		},
        getQuotesByTitle: (title) => {
            dispatch(getQuotesByTitle(title))
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
