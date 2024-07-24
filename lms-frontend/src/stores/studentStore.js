import {defineStore} from "pinia";

export const useStudentStore = defineStore(
    'student',
    {
        state: () => ({
            student: {
                major: null,
                enrollments: [],
                class_title: null,
                class_code: null,
                description: null

            }
        }),
        actions: {
            studentInitStore(){
                if (localStorage.getItem('user.access')) {
                    console.log('student store');
                    this.student.major = localStorage.getItem('student.major');

                    const enrollments = localStorage.getItem('student.enrollments');
                    if (enrollments) {
                        this.student.enrollments = JSON.parse(enrollments);
                    }

                    const classTitles = localStorage.getItem('student.classTitles');
                    if (classTitles) {
                        this.student.class_title = JSON.parse(classTitles);
                    }

                    const classCode = localStorage.getItem('student.classCode');
                    if (classCode){
                        this.student.class_code = JSON.parse(classCode)
                    }

                    const classDescriptions = localStorage.getItem('student.classDescriptions');
                    if (classDescriptions) {
                        this.student.description = JSON.parse(classDescriptions);
                    }

                }
            },

            setStudentInfo(student){
                this.student.major = student.major;
                this.student.enrollments = student.enrollments;

                // Extract class titles and descriptions
                const classTitles = student.enrollments.map(enrollment => enrollment.class_course.title).join(', ');
                const classDescriptions = student.enrollments.map(enrollment => enrollment.class_course.description).join(', ');
                const classCode = student.enrollments.map(enrollment => enrollment.class_course.class_code).join(', ');

                this.student.class_title = classTitles;
                this.student.description = classDescriptions;
                this.student.class_code = classCode

                localStorage.setItem('student.major', this.student.major);
                localStorage.setItem('student.enrollments', JSON.stringify(this.student.enrollments));
                localStorage.setItem('student.classTitles', JSON.stringify(this.student.class_title));
                localStorage.setItem('student.classDescriptions', JSON.stringify(this.student.description));
                localStorage.setItem('student.classCode', JSON.stringify(this.student.class_code));

            },

            removeStudentInfo(){
                this.student.major = null;
                this.student.enrollments = [];
                this.student.class_title = null;
                this.student.description = null;
                this.student.class_code = null;

                localStorage.setItem('student.major', '');
                localStorage.setItem('student.enrollments', '');
                localStorage.setItem('student.classTitles', '');
                localStorage.setItem('student.classDescriptions', '');
                localStorage.setItem('student.classCode', '');
            },
        },
    }
)