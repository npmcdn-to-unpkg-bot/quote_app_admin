import React from 'react'
import VisibleQuotes from '../smart/VisibleQuotes'
import Filter from '../smart/Filter'

class App extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
        	<div>
        		<Filter/>
        		<VisibleQuotes/>
        	</div>
        );
    }
}

export default App
