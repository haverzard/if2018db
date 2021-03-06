# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render

ver = "1.4.0"

# Create your views here.
def home_view(request):
	context = {
		'v' : ver
	}
	return render(request, "home.html", context)

def k_view(request, id):
	x = open('static/db/IFK' + id + 'x.txt').readlines()
	'''
	for i in range(len(x)):
		a = x[i][13:].split(" ")
		if (len(a) > 2):
			x[i] = x[i][:13] + a[0] + " " + a[1] + "\n"
	open('static/db/IFK' + id + 'x.txt',"w").writelines(x)
	'''
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
		id = "Semua Kelas STI"
	else:
		id = "Kelas " + id
	context = {
		'list1' : l1,
		'list2' : l2,
		'list3' : l3,
		'classnum' : id,
		'v' : ver
	}
	r = render(request, "class.html", context)
	r['Cache-Control'] = 'public, max-age=31536000'
	return r