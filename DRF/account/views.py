from rest_framework.response import Response
from rest_framework import status
from rest_framework.views import APIView
from account.serializers import  UserLoginSerializer, UserRegistrationSerializer,UserProfileSerializer
from django.contrib.auth import authenticate
from account.renderers import UserRenderer
from django.http import JsonResponse
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework.permissions import IsAuthenticated
from rest_framework.decorators import api_view,permission_classes
from rest_framework.permissions import IsAuthenticated,IsAdminUser
from donation.serializers import DonationSerializer
from donation.models import Donation

# Generate Token Manually
def get_tokens_for_user(user):
  refresh = RefreshToken.for_user(user)
  return {
      'refresh': str(refresh),
      'access': str(refresh.access_token),
  }


class UserRegistrationView(APIView):
  renderer_classes = [UserRenderer]
  def post(self, request, format=None):
    serializer = UserRegistrationSerializer(data=request.data)
    serializer.is_valid(raise_exception=True)
    user = serializer.save()
    token = get_tokens_for_user(user)
    return Response({'token':token, 'msg':'Registration Successful'}, status=status.HTTP_201_CREATED)

class UserLoginView(APIView):
  renderer_classes = [UserRenderer]
  def post(self, request, format=None):
    serializer = UserLoginSerializer(data=request.data)
    serializer.is_valid(raise_exception=True)
    email = serializer.data.get('email')
    password = serializer.data.get('password')
    user = authenticate(email=email, password=password)
    if user is not None:
      token = get_tokens_for_user(user)
      return Response({'token':token, 'msg':'Login Success'}, status=status.HTTP_200_OK)
    else:
      return Response({'errors':{'non_field_errors':['Email or Password is not Valid']}}, status=status.HTTP_404_NOT_FOUND)

class UserProfileView(APIView):
  renderer_classes = [UserRenderer]
  permission_classes = [IsAuthenticated]
  def get(self, request, format=None):
    serializer = UserProfileSerializer(request.user)
    return Response(serializer.data, status=status.HTTP_200_OK)



class LogoutView(APIView):
    renderer_classes = [UserRenderer]
    permission_classes = [IsAuthenticated]
    def post(self, request):
        print('f')
        try:
            refresh_token = request.data["refresh_token"]
            token = RefreshToken(refresh_token)
            token.blacklist()

            return Response(status=status.HTTP_205_RESET_CONTENT)
        except Exception as e:
            return Response(status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET', 'POST','PUT','DELETE'])
def IsValid(request):
  if request.method=='GET':
    res={}
    if request.user.is_authenticated:
      res['name']='Profile'
    else: res['name']='Login'  
  return Response(res)



@api_view(['GET', 'POST','PUT','DELETE'])
@permission_classes([IsAuthenticated])
def user_donation(request):
    if request.method== 'GET':
        mydata = Donation.objects.filter(status=3,donor=f"{request.user}").values()
        serializer=DonationSerializer(mydata,many=True)
        return JsonResponse(serializer.data,safe=False)

@api_view(['GET', 'POST','PUT','DELETE'])
@permission_classes([IsAuthenticated])
def user_recieved(request):
    if request.method== 'GET':
        mydata = Donation.objects.filter(status=3,reciever=f"{request.user}").values()
        serializer=DonationSerializer(mydata,many=True)
        return JsonResponse(serializer.data,safe=False)