import React from 'react'

class Quote extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
    	let {movie, qoute} = this.props.data
        return (
        	<div>
        		{movie.title} : {qoute}
        	</div>
        )
    }
}

export default Quote