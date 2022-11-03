export const LOG_IN = 'LOG_IN';
export const LOG_OUT = 'LOG_OUT';
export const SIGN_UP = 'SIGN_UP';

export const loginAction = (payload) => {
  console.log(payload);
  return {
    type: LOG_IN,
    payload,
  };
};

export const logoutAction = () => {
  return {
    type: LOG_OUT,
  };
};

export const signupAction = () => {
  return {
    type: SIGN_UP,
  };
};
// export const signupAction = async (name, email, password) => {
//   const body = {
//     name,
//     email,
//     password,
//   };

//   const data = await authApi.postSignUp(body);
//   console.log(data);
//   return {
//     type: SIGN_UP,
//     payload: data,
//   };
// };
