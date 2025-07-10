from django.contrib import admin
from django.urls import path, include

from . import views

from django.conf.urls.static import static
from django.conf import settings

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', views.index, name='home'),
    path('services/', views.services_view, name='services'),
    path('store/', include('store.urls')),
    path('us/', views.us_view, name='us')
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)