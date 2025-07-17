from django.urls import path

from services.views import services_view

urlpatterns = [
    path('', services_view, name='services')
]