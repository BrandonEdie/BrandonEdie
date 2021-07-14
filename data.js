fetch("https://api.apispreadsheets.com/data/15497/", {
	method: "POST",
	body: JSON.stringify({"data": {"First Name":"","Last Name":"","Email":"","Password":""}}),
}).then(res =>{
	if (res.status === 201){
		// SUCCESS
	}
	else{
		// ERROR
	}
})
