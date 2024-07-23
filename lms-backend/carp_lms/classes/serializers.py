from rest_framework import serializers
from .models import Class, Enrollment


class ClassSerializer(serializers.ModelSerializer):
    class Meta:
        model = Class
        fields = ('class_id', 'title', 'description')


class EnrollmentSerializer(serializers.ModelSerializer):
    class_course = ClassSerializer(read_only=True)

    class Meta:
        model = Enrollment
        fields = ('id', 'class_course')
