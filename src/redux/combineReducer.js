import { combineReducers } from 'redux'
import userReducer from './reducers'
import {add_Items} from './reducers'

export default combineReducers({
    user: userReducer,
    add_Items:add_Items
})