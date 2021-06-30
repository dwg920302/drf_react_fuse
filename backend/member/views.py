from django.shortcuts import render
from django.urls import path
from rest_framework.views import APIView
from django.http import HttpResponse, JsonResponse, Http404
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from member.serializers import MemberSerializer
from rest_framework.views import APIView
from icecream import ic
from rest_framework.response import Response
from .models import MemberVO


class Members(APIView):
    def post(self, request):
        data = request.data['body']
        ic(data)
        serializer = MemberSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return Response({'result': f'Welcome, {serializer.data.get("name")}'}, status=201)
        ic(serializer.errors)
        return Response(serializer.errors, status=400)


class Member(APIView):
    # Get에다 로그인 기능 만들기
    # 로그인은 react(frontend)가 기억하고 있어야 함. 그래야 무상태가 됨
    def get(self, request):
        ic('Member.get에 들어왔음')
        data = request.data['body']
        ic(data)
        usernames = [member.username for member in MemberVO.objects.all()]
        ic(usernames)


        # 대치
        return Response(usernames)

    def get_object(self, pk):
        try:
            return MemberVO.objects.get(pk=pk)
        except MemberVO.DoesNotExist:
            raise Http404


'''@csrf_exempt
def member_list(request):
    """
    List all code snippets, or create a new snippet.
    """
    if request.method == 'GET':
        members = Member.objects.all()
        serializer = MemberSerializer(members, many=True)
        return JsonResponse(serializer.data, safe=False)

    elif request.method == 'POST':
        data = JSONParser().parse(request)
        serializer = MemberSerializer(data=data)
        if serializer.is_valid():  # 유효성 체크
            serializer.save()
            return JsonResponse(serializer.data, status=201)
        return JsonResponse(serializer.errors, status=400)

'''
