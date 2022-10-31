import { axiosPost } from './axios';

const signup = (name, email, password) => {
    const data = {
        "display_name": name,
        email,
        password
    }
    return axiosPost(`${process.env.REACT_APP_BASE_URL}/signup`, { data });
}

export { signup };