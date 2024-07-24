import {defineStore} from "pinia";

export const useStudentStore = defineStore(
    'student',
    {
        state: () => ({
            student: {
                major: null,
                enrollments: [],
                classTitles: null,
                classDescriptions: null

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
                        this.student.classTitles = JSON.parse(classTitles);
                    }
                    const classDescriptions = localStorage.getItem('student.classDescriptions');
                    if (classDescriptions) {
                        this.student.classDescriptions = JSON.parse(classDescriptions);
                    }
                }
            },

            setStudentInfo(student){
                console.log('Setting student info');
                this.student.major = student.major;
                this.student.enrollments = student.enrollments;

                // Extract class titles and descriptions
                const classTitles = student.enrollments.map(enrollment => enrollment.class_course.title).join(', ');
                const classDescriptions = student.enrollments.map(enrollment => enrollment.class_course.description);

                this.student.classTitles = classTitles;
                this.student.classDescriptions = classDescriptions;

                localStorage.setItem('student.major', this.student.major);
                localStorage.setItem('student.enrollments', JSON.stringify(this.student.enrollments));
                localStorage.setItem('student.classTitles', JSON.stringify(this.student.classTitles));
                localStorage.setItem('student.classDescriptions', JSON.stringify(this.student.classDescriptions));

                console.log('Student data set complete');
            },

            removeStudentInfo(){
                this.student.major = null;
                this.student.enrollments = [];
                this.student.classTitles = [];
                this.student.classDescriptions = [];

                localStorage.setItem('student.major', '');
                localStorage.setItem('student.enrollments', '');
                localStorage.setItem('student.classTitles', '');
                localStorage.setItem('student.classDescriptions', '');
            },
        },
    }
)