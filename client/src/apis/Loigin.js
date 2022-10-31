import { axiosGet } from "./axios";

const login = (email, password) => {
    const data = {
        email,
        password
    }
    return axiosGet(`${process.env.REACT_APP_BASE_URL}/login`, { data} );

}
export { login }