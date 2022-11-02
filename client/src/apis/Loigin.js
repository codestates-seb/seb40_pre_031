import { axiosGet } from './axios';

const login = (email, password) => {
  const data = {
    email,
    password,
  };
  return axiosGet('/login', { data });
};
export { login };
