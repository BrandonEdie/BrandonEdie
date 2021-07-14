import requests

r = requests.post("https://api.apispreadsheets.com/data/15497/", headers={}, json={"data": {"First Name":"","Last Name":"","City":"","Password":""}})

if r.status_code == 201:
	# SUCCESS 
	pass
else:
	# ERROR
	pass