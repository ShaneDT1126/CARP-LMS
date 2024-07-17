import {defineStore} from "pinia";
import axios from "axios";

export const useUserStore = defineStore(
    'user',
    {
    state: ()=> ({
       user: {
           isAuthenticated: false,
           id: null,
           first_name: null,
           last_name: null,
           email: null,
           access: null,
           refresh: null,
           is_student: false,
           is_teacher: false,

       }
    }),
    actions: {
        initStore(){
            if(localStorage.getItem('user.access')){
                console.log('user has access')
                this.user.access = localStorage.getItem('user.access')
                this.user.refresh = localStorage.getItem('user.refresh')
                this.user.id = localStorage.getItem('user.id')
                this.user.first_name = localStorage.getItem('user.first_name')
                this.user.last_name = localStorage.getItem('user.last_name')
                this.user.email = localStorage.getItem('user.email')
                this.user.is_student = localStorage.getItem('user.is_student')
                this.user.is_teacher = localStorage.getItem('user.is_teacher')
                this.user.isAuthenticated = true

                this.refreshToken()
            }
        },

        setToken(data){
            this.user.access = data.access
            this.user.refresh = data.refresh
            this.user.isAuthenticated = true

            localStorage.setItem('user.access', data.access)
            localStorage.setItem('user.refresh', data.refresh)

        },

        removeToken(){
            this.user.access = null
            this.user.refresh = null
            this.user.id = null
            this.user.first_name = null
            this.user.last_name = null
            this.user.email = null
            this.user.is_student = false
            this.user.is_teacher = false
            this.user.isAuthenticated = false

            localStorage.setItem('user.access', '')
            localStorage.setItem('user.refresh', '')
            localStorage.setItem('user.id', '')
            localStorage.setItem('user.first_name', '')
            localStorage.setItem('user.last_name', '')
            localStorage.setItem('user.email', '')
            localStorage.setItem('user.is_student', '')
            localStorage.setItem('user.is_teacher', '')

        },

        setUserInfo(user){
            this.user.id = user.id
            this.user.first_name = user.first_name
            this.user.last_name = user.last_name
            this.user.email = user.email
            this.user.is_student = user.is_student
            this.user.is_teacher = user.is_teacher

            localStorage.setItem('user.id', this.user.id)
            localStorage.setItem('user.first_name', this.user.first_name)
            localStorage.setItem('user.last_name', this.user.last_name)
            localStorage.setItem('user.email', this.user.email)
            localStorage.setItem('user.is_student', this.user.is_student)
            localStorage.setItem('user.is_teacher', this.user.is_teacher)

        },

        refreshToken(){
            axios.post('/refresh/',{
                refresh: this.user.refresh
            })
                .then(res => {
                    this.user.access = res.data.access

                    localStorage.setItem('user.access', res.data.access)

                    axios.defaults.headers.common["Authorization"] = "Bearer " + res.data.access
                })
                .catch(err =>{
                    console.log(err)

                    this.removeToken()
                })
        },

    },
})