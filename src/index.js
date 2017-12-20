import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import 'semantic-ui-css/semantic.min.css';
import App from './components/App';
import sandglass from './reducers'
import registerServiceWorker from './config/registerServiceWorker';

let store = createStore(sandglass, applyMiddleware(thunk));

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
