from django.db import models
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager, PermissionsMixin

class UserAccountManager(BaseUserManager):
  def create_user(self, email, name, address, city, country, password=None):
    if not email:
      raise ValueError('*****<NO EMAIL ADDRESS FOUND>*****')
    
    email = self.normalize_email(email)
    user = self.model(email=email, name=name, address=address, city=city, country=country)
    user.set_password(password)
    user.save()
    
    return user
  
  def create_superuser(self, email, name, address, city, country, password=None):
    email = self.normalize_email(email)
    user = self.model(email=email, name=name, address=address, city=city, country=country)
    user.set_password(password)
    user.is_staff = True
    user.is_admin = True
    user.is_superuser = True
    user.save()
    
    return user
  
    
class UserAccount(AbstractBaseUser, PermissionsMixin):
  name = models.CharField(max_length=255)
  email = models.EmailField(max_length=255, unique=True)
  address = models.CharField(max_length=255)
  city = models.CharField(max_length=255)
  country = models.CharField(max_length=255)
  is_active = models.BooleanField(default=True)
  is_staff = models.BooleanField(default=False)
  
  objects = UserAccountManager()
  
  USERNAME_FIELD = 'email'
  REQUIRED_FIELDS = ['name', 'address', 'city', 'country']
  
  
  def get_full_name(self):
    return self.name
  
  def get_short_name(self):
    return self.name
  
  def __str__(self) -> str:
    return self.email
  
  
