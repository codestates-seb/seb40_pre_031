import { combineReducers } from 'redux';
import authReducer from './authReducer';
import { questionDetailReducer } from './questionDetailReducer';
const rootReducer = combineReducers({
  authReducer,
  questionDetailReducer,
});

export default rootReducer;
