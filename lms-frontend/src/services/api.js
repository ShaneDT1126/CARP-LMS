import axios from "axios";

export const authAPI = {
    register: (formData) => axios.post('signup/',formData),
    login: (formData) => axios.post('login/', formData),
    me: () => axios.get('me/'),
    student_user: () => axios.get('student_user/'),
    enrolled_classes: () => axios.get('enrolled_classes/')


}