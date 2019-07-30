# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render

# Create your views here.
def home_view(request):
	return render(request, "home.html", {})

def all_view(request):
	x = open('static/db/IF.txt').readlines()
	context = {
		'list1' : l1,
		'list2' : l2,
		'list3' : l3,
	}
	return render(request, "all.html", context)

def k_view(request, id):
	x = open('static/db/IFK' + id + '.txt').readlines()
	if (len(x) % 3 != 0):
		dv = len(x)//3 + 1
	else:
		dv = len(x)/3
	l1 = x[0:dv]
	l2 = x[dv:dv*2]
	l3 = x[dv*2:]
	c = ""
	if (id == "0"):
		id = "Semua Kelas IF"
	elif (id == "4"):
		id = "STI"
	else:
		id = "Kelas " + id
	context = {
		'list1' : l1,
		'list2' : l2,
		'list3' : l3,
		'classnum' : id
	}
	return render(request, "class.html", context)