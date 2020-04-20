import { createStore } from 'redux'

import { applyMiddleware } from "redux";
import combineReducers from './combineReducer';
import thunk from "redux-thunk"
import logger from 'redux-logger'

const middleware = [logger]

function store(state = {})
{
    return createStore(combineReducers, state,applyMiddleware(...middleware));
}

export default store

