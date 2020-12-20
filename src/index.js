import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';

// Main assets:
import './assets/main.css';

// Main component:
import App from './app.jsx';

// Vitals utils:
import reportWebVitals from './reportWebVitals';

// Reducers:
import baseReducer from './store/baseReducer';

const mainReducer = combineReducers({
  baseReducer: baseReducer,
});

ReactDOM.render(
  <Provider store={createStore(mainReducer)}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
