from django.http.response import JsonResponse
from rest_framework.decorators import api_view
# from rest_framework.decorators import permission_classes, authentication_classes
# from rest_framework.permissions import IsAuthenticated
# from rest_framework_jwt.authentication import JSONWebTokenAuthentication


@api_view(['GET'])
def connection(request):
    return JsonResponse({'connection': 'SUCCESS'})
