from django.shortcuts import render
from django.shortcuts import HttpResponse
# Create your views here.
def whatlink(request):
    return render(request,"index.html")

def productlink(request):
    return render(request,"index.html")

def testSlug(request, post_id):
    return HttpResponse(f"Just test = {post_id}")