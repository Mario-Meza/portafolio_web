from django.shortcuts import render, HttpResponse
from django.shortcuts import render
from core.models import Project


# Create your views here.
def home(request):
    projects = Project.objects.all()
    return render(request, "core/home.html", {'projects': projects})
