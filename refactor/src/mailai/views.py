from django.shortcuts import render
from django.views.decorators.csrf import csrf_protect


@csrf_protect
# Home page
def index(request):
    return render(request, 'index.html')
