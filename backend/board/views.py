from django.http.response import JsonResponse
from rest_framework import status

from .models import PostVO
from .serializers import PostSerializer
from rest_framework.decorators import api_view

from icecream import ic


@api_view(['GET', 'POST'])
def posts(request):
    if request.method == 'GET':
        all_posts = PostVO.objects.values().all()
        serializer = PostSerializer(all_posts, many=True)
        return JsonResponse(serializer.data, safe=False)
    elif request.method == 'POST':
        data = request.data['body']
        ic(data)
        serializer = PostSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data, safe=False, status=201)
        ic(serializer.errors)
        return JsonResponse(serializer.errors, status=400)


@api_view(['GET', 'POST'])
def post(request):
    pass
