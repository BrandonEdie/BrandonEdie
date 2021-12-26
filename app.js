function sendEmail() {
  var element = {

    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value,
};
  Email.send({
    Host: "smtp.gmail.com",
    Username: "brandonedie0000@gmail.com",
    Password: "eancwrxosftfhtyr",
    From: "brandonedie0000@gmail.com",
    To: element.email,
    Subject:"New Message From Brandon's Website",
    Body: "<strong> Thank You For Contacting Me The Website Is Sill Currently Under Contruction But You Can Revisit To View For Further Updates </strong>"
  })

  Email.send({
    Host: "smtp.gmail.com",
    Username: "brandonedie0000@gmail.com",
    Password: "eancwrxosftfhtyr",
    From: "brandonedie0000@gmail.com",
    To: "brandonedie0000@gmail.com",
    Subject:"New Message From Brandon's Website",
    Body: "<h1>"+element.name+"</h1>"+"<h2>"+element.email+"</h2>"+"<h3>"+element.message+"</h3>"
  })

}

