import { axiosPost } from './axios';

const signup = (name, email, password) => {
  const data = {
    display_name: name,
    email,
    password,
  };
  return axiosPost('/signup', { data });
};

export { signup };
