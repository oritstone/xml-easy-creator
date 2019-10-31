import { combineReducers } from 'redux';
import homeReducer from './homeReducer';
import { connectRouter } from 'connected-react-router'

const rootReducer = history => combineReducers({
  router: connectRouter(history),
  homeReducer,
});

export default rootReducer;
