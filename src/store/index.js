import { createStore, combineReducers } from 'redux'
import add from '../reducers/add'

const reducers = combineReducers({
    add
})

const store = createStore(reducers)

export default store

