from django.contrib import admin
from django.urls import path, include
from django.conf.urls import handler404

from . import views

from django.conf.urls.static import static
from django.conf import settings

handler404 = 'monte_verde.views.custom_page_not_found'

urlpatterns = [
    path('back-monteverde-dashboard/', admin.site.urls),
    path('', views.index, name='home'),
    path('store/', include('store.urls')),
    path('about-us/', views.us_view, name='about_us'),
    path('services/', include('services.urls')),
    path('projects/', views.projects, name='projects'),
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)