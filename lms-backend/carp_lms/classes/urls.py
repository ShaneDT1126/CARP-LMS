from django.urls import path, include
from .api import enrolled_classes

urlpatterns = [
    path('enrolled_classes/', enrolled_classes, name='enrolled_classes')
]
