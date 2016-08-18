import React from 'react'

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
                <button onClick={() => {
                    this.props.updateStatus(this.props.data, 'deleted')
                }}>Delete</button>
                <button onClick={() => {
                    this.props.updateStatus(this.props.data, 'approved')
                }}>Approve</button>
        	</p>
        )
    }
}

export default Quote