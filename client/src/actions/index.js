export const LOG_IN = 'LOG_IN';
export const LOG_OUT = 'LOG_OUT';
export const SIGN_UP = 'SIGN_UP';

export const loginAction = () => {
  const payload = {
    userStatus: true,
  };
  return {
    type: LOG_IN,
    payload,
  };
};

export const logoutAction = () => {
  const payload = {
    userStatus: false,
  };
  return {
    type: LOG_OUT,
    payload,
  };
};

export const signupAction = () => {
  return {
    type: SIGN_UP,
  };
};
