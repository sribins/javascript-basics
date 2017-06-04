function sayHello(message){
	return function(firstName, lastName){
		return message + " " + 
		firstName + " " + lastName
	}
	
}

var sendWish = sayHello();
console.log(sendWish);
console.log(sendWish("sri","kanth"))