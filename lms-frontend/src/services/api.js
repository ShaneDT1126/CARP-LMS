import axios from "axios";

export const authAPI = {
    register: (formData) => axios.post('users/',formData),
    login: (email, password) => axios.post('jwt/create', {email, password}),


}