//your JS code here. If required.
document.querySelector("form").addEventListener("submit",handleSubmit)


function handleSubmit(e) {
	e.preventDefault()
	let firstName = document.getElementById("firstName").value
	let lastName = document.getElementById("lastName").value
	let phoneNumber = document.getElementById("phoneNumber").value
	let email = document.getElementById("emailId").value
	alert(`First Name: ${firstName} Last Name: ${lastName} Phone Number: ${phoneNumber} Email ID: ${email}`)
}
