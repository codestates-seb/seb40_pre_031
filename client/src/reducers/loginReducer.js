import { LOG_IN, LOG_OUT } from '../actions';

const loginReducer = (state = false, action) => {
  switch (action.type) {
    case LOG_IN:
      return true;
    case LOG_OUT:
      return false;
    default:
      return state;
  }
};

export default loginReducer;
