from django.urls import path
from . import views

app_name = 'php'
urlpatterns=[
    path('about',views.about,name='about'),
    path('java_script',views.java_script,name='java_script'),
    path('program',views.program,name='java_program'),
    path('arrey',views.arrey,name='arrey'),
    path('function',views.function,name='function'),
    path('arrayMethods',views.arrayMethods,name='arrayMethods'),
    path('dom',views.dom,name='dom'),
    path('dom_calculator',views.dom_calculator,name='dom_calculator'),
    path('toDo',views.toDo,name='toDO'),
    path('password',views.password,name='password'),
    path('jsForm',views.jsForm,name='jsForm'),
    path('jquary',views.jquary,name='jquary'),
    path('jquary_ul',views.jquary_ul,name='jquary_ul'),
    path('jquary_class',views.jquary_class,name='jquary_class'),
    path('toDoNew',views.toDoNew,name='toDoNew'),
    path('toDoTable',views.toDoTable,name='toDoTable'),
]