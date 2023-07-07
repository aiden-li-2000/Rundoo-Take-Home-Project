from django.db import models

# Create your models here.
class Image(models.Model):
  email=models.CharField(max_length=255)
  logo=models.ImageField(upload_to='images/')
  
  class Meta:
    db_table = "images"
    
  # def __str__(self):
  #   return "<Image:{}>".format(self.email)
  