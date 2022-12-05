from django.shortcuts import render
from .models import Donation
from .serializers import DonationSerializer
from django.http import JsonResponse
from rest_framework.renderers import JSONRenderer
from rest_framework.parsers import JSONParser
from django.views.decorators.csrf import csrf_exempt
from rest_framework.decorators import api_view,permission_classes
from rest_framework.permissions import IsAuthenticated,IsAdminUser
from account.models import User
import json
# Create your views here.



@api_view(['GET', 'POST','PUT','DELETE'])
@permission_classes([IsAuthenticated])
def donation(request):
    
    if request.method=='GET':
        stu=Donation.objects.filter(status=1)
        serializer=DonationSerializer(stu,many=True)
        return JsonResponse(serializer.data,safe=False)

    if request.method=='POST':
        data=request.data
        data['donor']=f"{request.user}"
        data['reciever']=f"{request.user}"
        serializer=DonationSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            res={"msg":"Data Created"}
            return JsonResponse(res)
        return JsonResponse(serializer.errors)
    
    if request.method=='PUT':
        id=request.data['id']
        stu=Donation.objects.get(id=id)
        serializer=DonationSerializer(stu,data=request.data,partial=True)
        if serializer.is_valid():
            serializer.save()
            res={'msg':'updated successfully'}
            data={'reciever':f"{request.user}"}
            stu=Donation.objects.get(id=id)
            serializer=DonationSerializer(stu,data=data,partial=True)
            if serializer.is_valid():
                serializer.save()
            return JsonResponse(res)
        return JsonResponse(serializer.errors)
        


@api_view(['GET', 'POST','PUT','DELETE'])
@permission_classes([IsAuthenticated,IsAdminUser])
def admin_status0(request):
    
    if request.method=='DELETE':
        id=request.data['id']
        stu=Donation.objects.get(id=id)
        stu.delete()
        res={'msg':'Deleted'}
        return JsonResponse(res)

@api_view(['GET', 'POST','PUT','DELETE'])
@permission_classes([IsAuthenticated,IsAdminUser])
def admin_status2(request):

    if request.method=='PUT':
        id=request.data['id']
    stu=Donation.objects.get(id=id)

    serializer=DonationSerializer(stu,data=request.data,partial=True)
    if serializer.is_valid():
        serializer.save()
        res={'msg':'updated successfully'}
        return JsonResponse(res)
    return JsonResponse(serializer.errors)

    


@api_view(['GET', 'POST','PUT','DELETE'])
@permission_classes([IsAuthenticated,IsAdminUser])
def admin_view_zero(request):
    if request.method== 'GET':
        mydata = Donation.objects.filter(status=0)
        ans=[]
        for stu in mydata:
            data=DonationSerializer(stu).data
            id=stu.pk
            data['id']=id
            ans.append(data)
        return JsonResponse(ans,safe=False)


@api_view(['GET', 'POST','PUT','DELETE'])
@permission_classes([IsAuthenticated,IsAdminUser])
def admin_view_two(request):
    if request.method== 'GET':
        mydata = Donation.objects.filter(status=2)
        ans=[]
        for stu in mydata:
            data=DonationSerializer(stu).data
            id=stu.pk
            data['id']=id
            ans.append(data)
        return JsonResponse(ans,safe=False)

@api_view(['GET', 'POST','PUT','DELETE'])
@permission_classes([IsAuthenticated])
def ngo_list_view(request):
    if request.method== 'GET':
        mydata = Donation.objects.filter(status=1)
        ans=[]
        for stu in mydata:
            data=DonationSerializer(stu).data
            id=stu.pk
            data['id']=id
            if data['donor'] != f"{request.user}":
             ans.append(data)
        return JsonResponse(ans,safe=False)









