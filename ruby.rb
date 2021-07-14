require 'net/http'
require 'json'

url = "https://api.apispreadsheets.com/data/15497/"
uri = URI.parse(url)

http = Net::HTTP.new(uri.host, uri.port)
request = Net::HTTP::Post.new(uri.request_uri, {'Content-Type': 'text/json'})
request.body = ({"data": {"Email":"","Password":"","Last Name":"","First Name":""}}).to_json

response = http.request(request)
if response.code == '201'
	# SUCCESS
else
	# ERROR
end
