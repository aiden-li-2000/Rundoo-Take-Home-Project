from django.urls import path, include, re_path
from django.views.generic import TemplateView
from django.conf import settings
from django.conf.urls.static import static
from django.contrib import admin
from rest_framework import routers
from images.views import image_list

# router = routers.DefaultRouter()
# router.register('images/', ImageView)

urlpatterns = [
    path('auth/', include('djoser.urls')),
    path('auth/', include('djoser.urls.jwt')),
    path('admin/', admin.site.urls), 
    path('api/images/', image_list), #router urls for images
] + static(settings.MEDIA_URL,document_root=settings.MEDIA_ROOT) 

# urlpatterns += [re_path(r'^.*', TemplateView.as_view(template_name='index.html'))]
 