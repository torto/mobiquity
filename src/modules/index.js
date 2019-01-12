import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import results from './results/reducers'

export default (history) => combineReducers({
  router: connectRouter(history),
  results
})
