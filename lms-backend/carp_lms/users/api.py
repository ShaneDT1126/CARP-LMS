from django.http import JsonResponse
from rest_framework.response import Response
from rest_framework import status
from rest_framework.decorators import api_view, authentication_classes, permission_classes
from .forms import SignupForm
from .models import Student, Teacher, User
from .serializers import UserSerializer, StudentSerializer


@api_view(['POST'])
@authentication_classes([])
@permission_classes([])
def signup(request):
    data = request.data
    response = 'Success'

    form = SignupForm({
        'email': data.get('email'),
        'first_name': data.get('first_name'),
        'last_name': data.get('last_name'),
        'password1': data.get('password1'),
        'password2': data.get('password2'),
        'is_student': data.get('is_student'),
        'is_teacher': data.get('is_teacher')
    })

    if form.is_valid():
        user = form.save()

        if user.is_student:
            Student.objects.create(user=user)

        if user.is_teacher:
            Teacher.objects.create(user=user)

    else:
        return Response({'errors': form.errors}, status=status.HTTP_400_BAD_REQUEST)

    return JsonResponse({'message': response})


@api_view(['GET'])
def me(request):
    user = User.objects.get(id=request.user.id)
    serializer = UserSerializer(user)

    return Response(serializer.data)


@api_view(['GET'])
def student_user(request):
    if not request.user.is_student:
        return Response({'error': 'User is not a student'}, status=status.HTTP_400_BAD_REQUEST)

    student = Student.objects.get(user=request.user)
    serializer = StudentSerializer(student)
    return Response(serializer.data)
