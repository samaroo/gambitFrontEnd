import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App';

//redux
import {Provider} from 'react-redux'
import {store} from './Redux/Store'

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
);
