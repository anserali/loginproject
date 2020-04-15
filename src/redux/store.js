import { createStore } from 'redux'

import { applyMiddleware } from "redux";
import combineReducers from './combineReducer';
import thunk from "redux-thunk"

const middleware = [thunk]

function store(state = {})
{
    return createStore(combineReducers, state);
}

export default store

