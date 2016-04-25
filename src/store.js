import { createStore } from 'redux'
import reducers from './reducers'
import initialState from './initialState'

module.exports = createStore(reducers, initialState())
