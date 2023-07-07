import { combineReducers } from 'redux';
import authReducer from './auth';

const rootReducer = combineReducers({
  auth: authReducer,
  // Add more reducers here
});

export default rootReducer;
