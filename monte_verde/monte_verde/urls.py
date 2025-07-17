from django.contrib import admin
from django.urls import path, include

from . import views

from django.conf.urls.static import static
from django.conf import settings

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', views.index, name='home'),
    path('store/', include('store.urls')),
    path('about-us/', views.us_view, name='about_us'),
    path('mail-check/', views.mail_check, name='mail_check'),
    path('services/', include('services.urls'))
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)