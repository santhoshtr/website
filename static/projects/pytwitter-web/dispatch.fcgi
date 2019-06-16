#!/home/thottingal/bin/python     
# -*- coding: utf-8 -*-
import twitter
import cgitb
import cgi
import os
from fcgi import WSGIServer
from request import Request
cgitb.enable(True, "logs/")

def loginform():
	response = """
	<html>
	<head>
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
	<link href="main.css" rel="stylesheet" type="text/css" />
	<title>Santhosh Thottingal - Twitter</title>
	</head>
	<body>
	<h1>Twitter</h1>
	<form action="" method="post">
	 <p align="center">
	Username : <input type="text"  name="username"/>
	</br>
	Password : <input type="password" name="password"/>
	</br>
	<input  type="submit" id="login" name="login" value="Login" />
	</br>
	</p>
	</form>
	</hr>
	<p><b>Warning!!!</b>: This program is written for the personal use of the domain owner. You may use this application <u>at your own risk.</u></p>
	</body>
	</html>
	"""
	return response	


def index(env, start_response):
	username=None
	password=None
	start=0
	end=50
	response=""
	request=Request(env)
	username= request.getCookie('username')
	if username == None	:
		username = request.get('username')
	password= request.getCookie('password')
	if password == None	:
		password = request.get('password')
	headers = [('Content-Type', 'text/html')]
	action = request.get('action')
	if username and password:
		api = twitter.Api(username,password) 
		headers.append(('Set-Cookie', "username="+username))
		headers.append(('Set-Cookie', "password="+password))
		response+="""
		<html><head><meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
		<link href="main.css" rel="stylesheet" type="text/css" />
		<meta http-equiv="refresh" content="1000" ></head> 
		<body>
		<h1>What are you thinking?!</h1>
		<form action="" method="post"  >
		<textarea  name='status' id='status' style="width:100%;height:5em;"></textarea><br/>
		<input  type="submit" id="Tweet" value="Tweet"  name="action" style="width:12em;"/>
		<input  type="submit" id="Refresh" value="Refresh"  name="action" style="width:12em;"/>
		</form>
 		"""
 		if action == "Tweet" :
			status = request.get('status')
			api.PostUpdate(status)
			response+="<p>Last status: <b>" + username+ "</b>:" + status + "</p>"
		friends = api.GetFriendsTimeline(count=50)
		response+="<table border='0'>"
		for u in friends:
			response+="<tr><td>"+u.user.name+ "</td><td>" + u.text+  "</td></tr>"
		response+="</table></body></html>"
		start_response('200 OK', headers)
		return [response.encode('utf-8')]
	else:	
		start_response('200 OK', headers)
		response+=loginform()
		response+="Could not authenticate"
		return [response.encode('utf-8')]
	
if __name__ == '__main__':
	WSGIServer(index).run()

