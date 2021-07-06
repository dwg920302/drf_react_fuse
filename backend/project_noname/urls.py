"""project_noname URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.conf.urls import url, include
from django.urls import path
from common import views
from rest_framework import routers
from rest_framework_jwt.views import *
from rest_framework.permissions import IsAuthenticated

router = routers.DefaultRouter()

urlpatterns = [
    path('connection', views.connection),
    url(r'^api/post/', include('board.urls')),
    url(r'^api/member/', include('member.urls')),
    url(r'^adm/member/', include('member.urls')),

#    url(r'^api-token-auth/$', obtain_jwt_token),
#    url(r'^api-token-auth/refresh$', refresh_jwt_token),
#    url(r'^api-token-auth/verify$', verify_jwt_token),
]
