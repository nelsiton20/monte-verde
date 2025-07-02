from django.urls import path
from . import views

urlpatterns = [
    path('', views.store, name='store'),
    path('search', views.search, name='search'), 
    path('category/<slug:slug>/', views.store_by_category, name='store-category'),
    path('shopping-cart/', views.shopping_cart, name='shopping_cart')
]
