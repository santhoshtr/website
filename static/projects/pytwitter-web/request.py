from cgi import parse_qs
from Cookie import BaseCookie
import re
_QUOTES_RE = re.compile('"(.*)"')
class Request(object):
	def __init__(self, environ):
		self._formvalues = self._parse_query(environ)
		self._cookies = self._parse_cookies(environ)

	def getCookie(self, key):
		try:
			return self._cookies[key]
		except:
			return None	
		
	def get(self , key)	:
		if self._formvalues.get(key) == None:
			return None
		return self._formvalues.get(key)[0]
	def _parse_query(self, environ)		:	
		try:
			request_body_size = int(environ.get('CONTENT_LENGTH', 0))
		except (ValueError):
			request_body_size = 0
		# When the method is POST the query string will be sent
		# in the HTTP request body which is passed by the WSGI server
		# in the file like wsgi.input environment variable.
		request_body = environ['wsgi.input'].read(request_body_size)
		form = parse_qs(request_body)
		return form
		
	def _parse_cookies(self, environ)	:
		source=environ.get('HTTP_COOKIE', '')
		vars = {}
		if source:
			cookies = BaseCookie()
			cookies.load(source)
			for name in cookies:
				value = cookies[name].value
				unquote_match = _QUOTES_RE.match(value)
				if unquote_match is not None:
					value = unquote_match.group(1)
				vars[name] = value
		return vars
