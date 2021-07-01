from django.http.response import JsonResponse
from rest_framework.response import Response
from rest_framework import status

from rest_framework import serializers
from .models import MemberVO
from .serializers import MemberSerializer
from rest_framework.decorators import api_view

from icecream import ic


@api_view(['GET', 'POST', 'DELETE'])
def members(request):
    if request.method == 'GET':
        all_members = MemberVO.objects.all()
        ic(all_members)
        serializer = MemberSerializer(all_members, many=True)
        return JsonResponse(serializer.data, safe=False)
        # return Response(data=data, status=201)
    elif request.method == 'POST':
        # new_member = JSONParser().parse(request)
        # new_member = new_member['body']
        new_member = request.data['body']
        ic(new_member)
        serializer = MemberSerializer(data=new_member)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data, status=status.HTTP_201_CREATED)
        return JsonResponse(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    elif request.method == 'DELETE':
        serializer = MemberSerializer()
        return JsonResponse(serializer.data, safe=False)


@api_view(['GET', 'PUT', 'POST', 'DELETE'])
def member(request):
    ic('member')
    if request.method == 'GET':
        serializer = MemberSerializer()
        return JsonResponse(serializer.data, safe=False)
    elif request.method == 'PUT':
        serializer = MemberSerializer()
        return JsonResponse(serializer.data, safe=False)
    elif request.method == 'POST':
        data = request.data['body']
        [username, password] = [data['username'], data['password']]
        usernames = [member.username for member in MemberVO.objects.all()]
        if usernames.count(username) > 0:
            obj = get_object(username)
            if obj.password == password:
                return JsonResponse({'result': '로그인 성공'})
            else:
                return JsonResponse({'result': '로그인 실패 : 아이디 혹은 비밀번호 틀림)'})
            # if 패스워드 == 받아온 패스워드: 로그인 성공
        else:
            ic('계정 없음')
            return JsonResponse({'result': '로그인 실패 : 아이디 혹은 비밀번호 틀림)'})
    elif request.method == 'DELETE':
        serializer = MemberSerializer()
        return JsonResponse(serializer.data, safe=False)


def get_object(pk):
    try:
        return MemberVO.objects.get(pk=pk)
    except MemberVO.DoesNotExist:
        return JsonResponse({'result': '로그인 실패 : 아이디 혹은 비밀번호 틀림)'}, status=104)