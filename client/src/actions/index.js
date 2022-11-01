export const LOG_IN = 'LOG_IN';
export const LOG_OUT = 'LOG_OUT';

export const loginAction = () => {
  return {
    type: LOG_IN,
  };
};

export const logoutAction = () => {
  return {
    type: LOG_OUT,
  };
};
