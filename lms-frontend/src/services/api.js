import axios from "axios";

export const authAPI = {
    register: (formData) => axios.post('signup/',formData),
    login: (email, password) => axios.post('jwt/create', {email, password}),


}