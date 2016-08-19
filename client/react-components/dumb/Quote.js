import React from 'react'
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card'
import FlatButton from 'material-ui/FlatButton'

class Quote extends React.Component {
    constructor(props) {
        super(props)
    }

    delete(id) {
        alert(id)
    }

    approve(id) {
        alert(id)
    }

    render() {
    	let {status, movie, qoute, interested} = this.props.data
        let {how_many, out_of, percentage} = interested

        return (
        	<Card className="quote">
                <CardHeader
                    title={qoute}
                    subtitle={percentage?percentage.toFixed(1)+' '+how_many+"/"+out_of:''}
                    />  
                <CardActions>
                    {
                        status != 'deleted' ?
                            <FlatButton onClick={() => {
                                this.props.updateStatus(this.props.data, 'deleted')
                            }} label="Delete" />
                        :''
                    }{
                        status != 'approved' ?
                            <FlatButton onClick={() => {
                                this.props.updateStatus(this.props.data, 'approved')
                            }} label="Approve" />
                        :''
                    }
                </CardActions>
        	</Card>
        )
    }
}

export default Quote