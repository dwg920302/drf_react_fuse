'''
from member import views_cbv
from django.conf.urls import url

urlpatterns = [
    url(r'^api/member/register', views_cbv.Members),
    url(r'^adm/member/list', Members.as_view()),
    url(r'^api/member/login', Member.as_view()),
    path('/<int:pk>/', Member.as_view())
]
'''
