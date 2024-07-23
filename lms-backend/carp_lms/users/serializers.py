from rest_framework import serializers
from .models import Student, Teacher, User


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('first_name', 'last_name', 'email', 'is_student', 'is_teacher')


class StudentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Student
        fields = ('major', 'enrolled_class')
