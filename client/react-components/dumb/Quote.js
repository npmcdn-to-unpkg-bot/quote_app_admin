import React from 'react'

class Quote extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
    	let {movie, qoute, interested} = this.props.data
        let {how_many, out_of, percentage} = interested
        return (
        	<p>
        		{movie.title} : {qoute}
                <br/>
                {
                    percentage?percentage.toFixed(1)+' '+how_many+"/"+out_of:''
                }
                <br/>
                <span>Delete</span>
                <span>Approve</span>
        	</p>
        )
    }
}

export default Quote