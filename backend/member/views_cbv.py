'''
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

    def get(self, request):
        data = [member for member in MemberVO.objects.values().all()]
        ic(data)
        return Response(data)


class Member(APIView):
    # Get에다 로그인 기능 만들기
    # 로그인은 react(frontend)가 기억하고 있어야 함. 그래야 무상태가 됨
    def post(self, request):  # get으로 하면 ㅄ이라 data를 못 읽어옴
        data = request.data['body']
        [pk, password] = [data['username'], data['password']]
        db_res = self.get_object(pk)
        if db_res.password == password:
            return Response({'result': '로그인 성공'}, status=201)
        return Response({'result': '로그인 실패 : 아이디 혹은 비밀번호 틀림)'}, status=104)
            # if 패스워드 == 받아온 패스워드: 로그인 성공

    def post_outdated(self, request):  # get으로 하면 ㅄ이라 data를 못 읽어옴
        data = request.data['body']
        [username, password] = [data['username'], data['password']]
        ic(f'{data} / {username} / {password}')
        usernames = [member.username for member in MemberVO.objects.all()]
        if usernames.count(username) > 0:
            ic('계정 있음')
            obj = self.get_object(username)
            if obj.password == password:
                return Response({'result': '로그인 성공'})
            else:
                return Response({'result': '로그인 실패 : 아이디 혹은 비밀번호 틀림)'})
            # if 패스워드 == 받아온 패스워드: 로그인 성공
        else:
            ic('계정 없음')
            return Response({'result': '로그인 실패 : 아이디 혹은 비밀번호 틀림)'})

    def get_object(self, pk):
        try:
            return MemberVO.objects.get(pk=pk)
        except MemberVO.DoesNotExist:
            return Response({'result': '로그인 실패 : 아이디 혹은 비밀번호 틀림)'}, status=104)


@csrf_exempt
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
