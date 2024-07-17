from django.db import models
from users.models import User, Student, Teacher
import uuid
from django.utils.crypto import get_random_string
from django.utils import timezone


class Class(models.Model):
    course_id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    class_code = models.CharField(max_length=50, unique=True, blank=True, null=True)
    title = models.CharField(max_length=200)
    description = models.TextField()
    teachers = models.ForeignKey(Teacher, on_delete=models.CASCADE, related_name='classes')
    enrollment_code = models.CharField(max_length=6, unique=True, blank=True)

    def save(self, *args, **kwargs):
        if not self.enrollment_code:
            self.enrollment_code = self.generate_unique_code()
        super().save(*args, **kwargs)

    def generate_unique_code(self):
        while True:
            code = get_random_string(length=6, allowed_chars='ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789')
            if not Class.objects.filter(enrollment_code=code).exists():
                return code

    def __str__(self):
        return self.title

    class Meta:
        verbose_name = 'Class'
        verbose_name_plural = 'Classes'


class Enrollment(models.Model):
    student = models.ForeignKey(Student, on_delete=models.CASCADE, related_name='enrollments')
    course = models.ForeignKey(Class, on_delete=models.CASCADE, related_name='enrollments')
    date_enrolled = models.DateTimeField(default=timezone.now)
    is_active = models.BooleanField(default=True)


class Lesson(models.Model):
    lesson_id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    class_id = models.ForeignKey(Class, on_delete=models.CASCADE, related_name='lessons')
    title = models.CharField(max_length=200)
    content = models.TextField()


class Quiz(models.Model):
    quiz_id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    class_id = models.ForeignKey(Class, on_delete=models.CASCADE, related_name='quizzes')
    title = models.CharField(max_length=200)
    description = models.TextField()


class QuizAttempt(models.Model):
    student = models.ForeignKey(Student, on_delete=models.CASCADE)
    quiz = models.ForeignKey(Quiz, on_delete=models.CASCADE)
    score = models.FloatField()
    date_attempted = models.DateTimeField(default=timezone.now)

