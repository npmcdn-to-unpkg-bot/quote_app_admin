import 'babel-polyfill'
import React from 'react'
import thunk from 'redux-thunk'
//import createLogger from 'redux-logger'
import ReactDOM from 'react-dom';
import App from './react-components/dumb/App'
import { createStore, applyMiddleware  } from 'redux'
import { Provider } from 'react-redux'
import reducers from './redux-reducers'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

 
//const logger = createLogger()
let store = createStore(
	reducers,
	applyMiddleware(thunk)
)

ReactDOM.render(
	
	  <Provider store={store}>
	  	<MuiThemeProvider>
	  		<App/>
	  	</MuiThemeProvider>
	  </Provider>,

  document.getElementById('root')
);
