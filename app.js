function sendMail(params) {
    var tempParams = {

        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value,
    };

    emailjs.send('gmail', 'template_jw4whhg', tempParams)
        .then(function(res){
            console.log('success', res.status);
        })
    }