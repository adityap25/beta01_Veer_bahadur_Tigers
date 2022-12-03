from django.urls import path
from account.views import UserLoginView, UserRegistrationView,LogoutView,UserProfileView,IsValid
urlpatterns = [
    path('register/', UserRegistrationView.as_view(), name='register'),
    path('login/', UserLoginView.as_view(), name='login'),
    path('logout/', LogoutView.as_view(), name='logout'),
    path('profile/', UserProfileView.as_view(), name='profile'),
    path('', IsValid),

]