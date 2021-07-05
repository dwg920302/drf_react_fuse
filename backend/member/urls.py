from member import views
from django.conf.urls import url

from icecream import ic

ic('Inside Member')

urlpatterns = [
    url(r'^register', views.members),
    url(r'^list', views.members),
    url(r'^login', views.member),
    url(r'^modify', views.member),
    url(r'^detail', views.member),
    url(r'^delete', views.member_delete),
    url(r'^retrieve', views.member_ret),
]
