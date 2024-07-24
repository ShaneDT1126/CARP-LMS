from django.http import JsonResponse
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import IsAuthenticated
from rest_framework.decorators import api_view, permission_classes
from .serializers import EnrollmentSerializer

from .models import Enrollment
from users.models import Student


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def enrolled_classes(request):
    if not request.user.is_student:
        return Response({'error': 'User is not a student'}, status=status.HTTP_400_BAD_REQUEST)

    # Get the student instance
    student = request.user.student_profile

    # Fetch the enrollments related to this student
    enrollments = Enrollment.objects.filter(student=student)

    # Serialize the enrollments
    serializer = EnrollmentSerializer(enrollments, many=True)

    return Response(serializer.data)