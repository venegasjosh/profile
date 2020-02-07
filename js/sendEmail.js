function sendEmail() {
    // console.log("SLDFKJS:LF")
    
    let nameValue = document.getElementById("name1").value;
    let emailValue = document.getElementById("email1").value;
    let subjectValue = document.getElementById("subject1").value;
    let messageValue = document.getElementById("message1").value;
    // console.log(nameValue, emailValue, subjectValue, messageValue);

	Email.send({
	Host: "smtp.elasticemail.com",
	Username : "venegasjosh@gmail.com",
	Password : "fa1224f7-a295-4817-bf0b-f0200090eb25",
	To : "venegasjosh@gmail.com",
	From : emailValue.toString(),
	Subject : nameValue.toString() + ' : '+ subjectValue.toString(),
	Body : messageValue.toString(),
	}).then(
		message => alert("mail sent successfully")
	)
}   