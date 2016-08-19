import React from 'react';
import { connect } from 'react-redux'
import { getTitles, filterByTitle, filterByStatus } from '../../redux-actions'
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton'
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar'
import DropDownMenu from 'material-ui/DropDownMenu'

class Filter extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
    	this.props.getTitles()
    }
    
    handleChangeTitle(event, index, value) {
        this.props.filterByTitle(value)
    }

    handleChangeStatus(event, index, value) {
        this.props.filterByStatus(value)
    }
    
    render() {
        const items = this.props.titles.map((title) => {
            return {
                text: title,
            }
        })
        return (
            <Toolbar className="filter">
                <ToolbarGroup>
                    <DropDownMenu value={this.props.value} onChange={this.handleChangeTitle.bind(this)}>
                        {
                            this.props.titles.map(title => <MenuItem value={title} primaryText={title} />)
                        }
                    </DropDownMenu>

                    <DropDownMenu value={this.props.status} onChange={this.handleChangeStatus.bind(this)}>
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
        value: state.filter.title,
        status: state.filter.status
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
