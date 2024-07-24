from rest_framework import serializers
from .models import Student, Teacher, User
from classes.serializers import EnrollmentSerializer


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('first_name', 'last_name', 'email', 'is_student', 'is_teacher')


class StudentSerializer(serializers.ModelSerializer):
    enrollments = EnrollmentSerializer(many=True, read_only=True)

    class Meta:
        model = Student
        fields = ('major', 'enrollments')
