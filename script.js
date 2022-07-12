
let emailElement = document.querySelector('#email');
let messageElement = document.querySelector('#message');
console.log(emailElement);
console.log('Welcome to my page!');

let submitButton = document.querySelector('#submit-button');
submitButton.addEventListener('click',function(e){
	e.preventDefault();

	let emailValue = emailElement.value;
	let messageValue = messageElement.value;

	if(emailValue.includes('@')){
		alert('Thank you for your message:)');
	}
	else{
		alert('Please enter a valid e-mail address');
	}

console.log('Email :',emailValue);
console.log('Message :',messageValue);




})
