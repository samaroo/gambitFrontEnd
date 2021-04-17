//creates and exports redux

//import createStore function
import {createStore, applyMiddleware, compose} from 'redux';

//import combined reducers
import {combinedReducers} from './Reducers'

import thunk from 'redux-thunk';

//for redux devtools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(combinedReducers, composeEnhancers(applyMiddleware(thunk)))