'''
from django.shortcuts import render
from board.serializers import PostSerializer
from rest_framework.views import APIView
from icecream import ic
from rest_framework.response import Response
from .models import PostVO
import json


class Posts(APIView):
    def post(self, request):
        data = request.data['body']
        ic(data)
        serializer = PostSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return Response({'result': f'Title = {serializer.data.get("title")}'}, status=201)
        ic(serializer.errors)
        return Response(serializer.errors, status=400)

    def get(self, request):
        posts = PostVO.objects.values().all()
        ic(posts)
        return Response({'result': posts}, status=201)


class Post(APIView):
    def get(self, request):
        pass
'''