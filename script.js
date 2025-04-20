//your JS code here. If required.
document.querySelector("form").addEventListener("submit",handleSubmit)


function handleSubmit(e) {
	e.preventDefault()
	let firstName = document.getElementsByName("First Name")[0].value
	let lastName = document.getElementsByName("Last Name")[0].value
	let phoneNumber = document.getElementsByName("Phone Number")[0].value
	let email = document.getElementsByName("Email ID")[0].value
	alert(`First Name: ${firstName} Last Name: ${lastName} Phone Number: ${phoneNumber} Email ID: ${email}`)
}
