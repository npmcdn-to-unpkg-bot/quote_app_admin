import 'babel-polyfill'
import React from 'react'
import thunk from 'redux-thunk'
import ReactDOM from 'react-dom';
import App from './react-components/dumb/App'
import { createStore, applyMiddleware  } from 'redux'
import { Provider } from 'react-redux'
import reducers from './redux-reducers'

let store = createStore(
	reducers,
	applyMiddleware(thunk)
)

ReactDOM.render(
  <Provider store={store}>
  	<App name='MyAPP'/>
  </Provider>,
  document.getElementById('root')
);
