from board import views
from django.conf.urls import url

from icecream import ic

ic('Inside Board(Post)')

urlpatterns = [
    url('^register', views.posts),
    url('^list', views.posts),
]
