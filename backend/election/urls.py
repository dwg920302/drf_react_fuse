from django.conf.urls import url
from .views import Elections
# models 아닌가??

urlpatterns = [
    url('signup', Elections.as_view())
]
