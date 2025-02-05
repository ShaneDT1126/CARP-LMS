from django.db import models
import uuid
from django.utils.crypto import get_random_string
from django.utils import timezone


class Class(models.Model):
    class_id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    class_code = models.CharField(max_length=50, unique=True, blank=True, null=True)
    title = models.CharField(max_length=200)
    description = models.TextField(null=True, blank=True)
    teachers = models.ForeignKey('users.Teacher', on_delete=models.CASCADE, related_name='classes')
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
    student = models.ForeignKey('users.Student', on_delete=models.CASCADE, related_name='enrollments')
    class_course = models.ForeignKey(Class, on_delete=models.CASCADE, related_name='enrollments')
    date_enrolled = models.DateTimeField(default=timezone.now)
    is_active = models.BooleanField(default=True)

    def __str__(self):
        return f'{self.student.user.get_full_name()} enrolled in {self.class_course.title}'


class Lesson(models.Model):
    lesson_id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    class_id = models.ForeignKey(Class, on_delete=models.CASCADE, related_name='lessons')
    title = models.CharField(max_length=200)
    order = models.PositiveIntegerField(default=0)

    def __str__(self):
        return f"{self.class_id.title} - {self.title}"

    class Meta:
        verbose_name = 'Lesson'
        verbose_name_plural = 'Lessons'
        ordering = ['order']


class LessonContent(models.Model):
    content_id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    lesson = models.ForeignKey(Lesson, on_delete=models.CASCADE, related_name='lesson_contents')
    title = models.CharField(max_length=200)
    content = models.TextField()
    order = models.PositiveIntegerField(default=0)

    def __str__(self):
        return f"{self.lesson.title} - {self.title}"


class Quiz(models.Model):
    quiz_id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    class_id = models.ForeignKey(Class, on_delete=models.CASCADE, related_name='quizzes')
    title = models.CharField(max_length=200)
    description = models.TextField()


class QuizAttempt(models.Model):
    student = models.ForeignKey('users.Student', on_delete=models.CASCADE)
    quiz = models.ForeignKey(Quiz, on_delete=models.CASCADE)
    score = models.FloatField()
    date_attempted = models.DateTimeField(default=timezone.now)


class VideoLessonContent(models.Model):
    lesson_content = ''
