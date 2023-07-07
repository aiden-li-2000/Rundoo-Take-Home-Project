from django.contrib import admin
from .models import Image

class ImageAdmin(admin.ModelAdmin):
  list_display = ('email', 'logo')

# Register your models here.

admin.site.register(Image, ImageAdmin)