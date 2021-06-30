from django.conf.urls import url
from .views import Posts

urlpatterns = [
    url('register', Posts.as_view()),
    url('list', Posts.as_view()),
]
