from django.urls import path
from donation.views import donation,admin_status0,admin_status2
urlpatterns = [
    path('',donation),
    path('admin/zero/',admin_status0),
    path('admin/two/',admin_status2),
]