from django.urls import path, include
from .views import process_payment, generate_token

urlpatterns = [
    path('gettoken/<str:id>/<str:token>/',
         generate_token, name="token.generate"),
    path('process/<str:id>/<str:token>/',
         process_payment, name="payment.process")
]
