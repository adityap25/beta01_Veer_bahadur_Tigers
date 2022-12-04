from django.urls import path
from donation.views import donation,admin_status0,admin_status2,admin_view_zero,admin_view_two,ngo_list_view
urlpatterns = [
    path('',donation),
    path('ngolist/',ngo_list_view),
    path('admin/zero/',admin_status0),
    path('admin/two/',admin_status2),
    path('admin/status/zero/',admin_view_zero),
    path('admin/status/two/',admin_view_two),
]