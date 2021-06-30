from django.conf.urls import url
from .views import Members, Member

urlpatterns = [
    url('signup', Members.as_view()),
    url('login', Member.as_view()),
]
