from django.http import JsonResponse
from rest_framework.response import Response
from rest_framework import status
from rest_framework.decorators import api_view, authentication_classes, permission_classes
from .forms import SignupForm


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
        form.save()
    else:
        return Response({'errors': form.errors}, status=status.HTTP_400_BAD_REQUEST)

    return JsonResponse({'message': response})


@api_view(['GET'])
def me(request):
    return JsonResponse({
        'id': request.user.id,
        'first_name': request.user.first_name,
        'last_name': request.user.last_name,
        'email': request.user.email,
        'is_student': request.user.is_student,
        'is_teacher': request.user.is_teacher
    })
