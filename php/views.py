from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.
def about(request):
    return render(request,'php/about.html')

def java_script(request):
    return render(request, 'php/java_script.html')

def program(request):
    return render(request, 'php/program.html')

def arrey(request):
    return render(request, 'php/arrey.html')

def function(request):
    return render(request, 'php/function.html')

def arrayMethods(request):
    return render(request, 'php/arrayMethods.html')

def dom(request):
    return render(request, 'php/dom.html')

def dom_calculator(request):
    return render(request, 'php/dom_calculator.html')

def toDo(request):
    return render(request, 'php/test.html')

def password(request):
    return render(request, 'php/password.html')

def jsForm(request):
    return render(request, 'php/jsForm.html')

def jquary(request):
    return render(request, 'php/jquary.html')

def jquary_ul(request):
    return render(request, 'php/jquary_ul.html')

def jquary_class(request):
    return render(request, 'php/jquary_class.html')

def toDoNew(request):
    return render(request, 'php/toDoNew.html')

def toDoTable(request):
    return render(request, 'php/toDoTable.html')