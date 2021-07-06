from django.http.response import JsonResponse
from rest_framework import status
from .models import MemberVO
from .serializers import MemberSerializer
from rest_framework.decorators import api_view

from icecream import ic

errcode1 = '아이디 혹은 비밀번호 틀림'


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


@api_view(['GET', 'POST', 'PUT', 'DELETE'])
def member(request):
    ic('member')
    if request.method == 'GET':
        pk = request.path.split('/')[-1]
        ic(pk)
        try:
            a_member = MemberVO.objects.get(pk=pk)
            ic(a_member)
            serializer = MemberSerializer(a_member)
            return JsonResponse(serializer.data, status=status.HTTP_200_OK)

        except MemberVO.DoesNotExist:
            return JsonResponse({'result': '해당 Username이 존재하지 않음'}, status=status.HTTP_402_PAYMENT_REQUIRED)

    elif request.method == 'PUT':
        data = request.data['body']
        username = data['username']
        ic(data, type(data))
        user = get_object(username)
        ic(user)
        # id를 프라이머리 키로 받아서 정보를 바꿈, 원래라면 절차가 달라야 함
        # 여기에 Modify method 필요
        serializer = MemberSerializer(data=data)
        if serializer.is_valid():
            serializer.update(user, data)
            return JsonResponse(serializer.data, status=status.HTTP_201_CREATED)
        return JsonResponse(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'POST':
        data = request.data['body']
        [username, password] = [data['username'], data['password']]
        try:
            ex_member = MemberVO.objects.get(pk=username)
            if ex_member.password == password:
                return JsonResponse({'result': '로그인 성공', 'username': username}, status=status.HTTP_200_OK)
        except MemberVO.DoesNotExist:
            return JsonResponse({'result': errcode1}, status=status.HTTP_400_BAD_REQUEST)
        return JsonResponse({'result': errcode1}, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        ic('del start')
        request = request
        ic(request, request.data)
        data = request.data['body']  # DELETE는 Request에서 Body를 못 받아옴. ㅄ같음.
        ic(data)
        [username, password] = [data['username'], data['password']]
        try:
            ex_member = MemberVO.objects.get(pk=username)
            if ex_member.password == password:
                ex_member.delete()
                return JsonResponse({'result': '삭제 성공', 'username': username}, status=status.HTTP_200_OK)
        except MemberVO.DoesNotExist:
            return JsonResponse({'result': errcode1}, status=status.HTTP_400_BAD_REQUEST)
        return JsonResponse({'result': errcode1}, status=status.HTTP_400_BAD_REQUEST)


@api_view(['PUT'])
def member_delete(request):
    ic('member_delete')
    if request.method == 'PUT':
        data = request.data['body']
        ic(data)
        [username, password] = [data['username'], data['password']]
        try:
            ex_member = MemberVO.objects.get(pk=username)
            if ex_member.password == password:
                ex_member.delete()
                return JsonResponse({'result': '삭제 성공', 'username': username}, status=status.HTTP_200_OK)
        except MemberVO.DoesNotExist:
            return JsonResponse({'result': errcode1}, status=status.HTTP_400_BAD_REQUEST)
        return JsonResponse({'result': errcode1}, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET'])
def member_ret(request):
    ic('member_retrieve')
    if request.method == 'GET':
        pk = request.path.split('/')[-1]
        ic(pk)
        try:
            MemberVO.objects.get(pk=pk)
            return JsonResponse({'result': '해당 Username이 존재함'}, status=status.HTTP_200_OK)
        except MemberVO.DoesNotExist:
            return JsonResponse({'result': '해당 Username이 존재하지 않음'}, status=status.HTTP_200_OK)


def get_object(pk):
    try:
        return MemberVO.objects.get(pk=pk)
    except MemberVO.DoesNotExist:
        return JsonResponse({'result': errcode1}, status=status.HTTP_400_BAD_REQUEST)