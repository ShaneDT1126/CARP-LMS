import {defineStore} from "pinia";

export const useStudentStore = defineStore(
    'student',
    {
        state: () => ({
            student: {
                major: null,
                class_enrolled: null,

            }
        }),
        actions: {
            studentInitStore(){

            },

            setStudentInfo(){

            },

            removeStudentInfo(){

            },
        },
    }
)