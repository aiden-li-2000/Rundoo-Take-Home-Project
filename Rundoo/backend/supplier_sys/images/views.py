from django.shortcuts import render
from rest_framework import generics, viewsets
from .models import Image
from .serializers import ImageSerializer
from django.http import JsonResponse
from rest_framework.decorators import api_view
from rest_framework import status

from rest_framework.decorators import permission_classes, parser_classes
from rest_framework.parsers import MultiPartParser, FormParser
from rest_framework.permissions import AllowAny

from rest_framework.views import APIView
from rest_framework import permissions

# Create your endpoints here.

# @permission_classes([IsAuthenticated])
# @authentication_classes([JSONWebTokenAuthentication])
@api_view(['GET', 'POST'])
@permission_classes([AllowAny])
@parser_classes([MultiPartParser, FormParser])
def image_list(request):
  print(request.data)
  if request.method == 'GET':
    useremail = request.GET.get('email')
    print(useremail)
    images = Image.objects.all().filter(email=useremail)
    serializer = ImageSerializer(images, many=True)
    return JsonResponse(serializer.data, safe=False)
  
  if request.method == 'POST':
    serializer = ImageSerializer(data=request.data)
    if serializer.is_valid():
      serializer.save()
      return JsonResponse(serializer.data, status=status.HTTP_201_CREATED)
    return JsonResponse(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
# class ImageView(APIView):
#   permission_classes = (permissions.AllowAny)
#   parser_classes = (MultiPartParser, FormParser)
  
#   def post(self, request, format=None):
#     print(request.data)
#     serializer = ImageSerializer(data=request.data)
#     if serializer.is_valid():
#       serializer.save()
#       return JsonResponse(serializer.data, status=status.HTTP_201_CREATED)
#     else:
#       return JsonResponse(serializer.errors, status=status.HTTP_400_BAD_REQUEST)