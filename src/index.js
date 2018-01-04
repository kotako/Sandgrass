import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import 'semantic-ui-css/semantic.min.css';
import AppContainer from './containers/AppContainer';
import sandglass from './reducers'
import registerServiceWorker from './config/registerServiceWorker';

let store = createStore(sandglass, applyMiddleware(thunk));

render(
  <Provider store={store}>
    <AppContainer />
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
