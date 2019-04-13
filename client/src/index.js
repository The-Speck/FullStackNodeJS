import 'materialize-css/dist/css/materialize.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import reduxThunk from 'redux-thunk';
import createLogger from 'redux-logger';

import App from './components/App';

const store = createStore(
  reducers,
  {},
  applyMiddleware(reduxThunk, createLogger)
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('#root')
);

console.log('Strip key is: ', process.env.REACT_APP_STRIPE_KEY);
console.log('Env is: ', process.env.NODE_ENV);
