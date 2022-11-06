import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import authReducer from './authReducer';
import { questionDetailReducer } from './questionDetailReducer';

const persistConfig = {
  key: 'root',
  // localStorage에 저장합니다.
  storage,
  whitelist: ['authReducer'],
};

const rootReducer = combineReducers({
  authReducer,
  questionDetailReducer,
});

export default persistReducer(persistConfig, rootReducer);
