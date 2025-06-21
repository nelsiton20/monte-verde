from django.urls import path
from . import views

urlpatterns = [
    path('', views.store, name='store'),
    path('category/<slug:slug>/', views.store_by_category, name='store-category')
]
