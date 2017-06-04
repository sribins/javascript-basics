/************** creating functions************/

/***********1.regular functions ********/
/*console.log(sayHello());
function sayHello(){
	console.log("Hello World !!")
}
var message = sayHello();
console.log(message);
*/
/***********2.Anonimous functions ********/

/*var sayAgain = function(){
	return "Hello Again"
}
console.log(sayAgain())*/

/***********3.constructor functions ********/

function Person4(firstName, lastName){
	this.firstName = firstName;
	this.lastName = lastName;
	
	}
	Person4.prototype.fullName = function(){
		return this.firstName + " " +this.lastName;
	
}

var newPerson1 = new Person4("sri","reddy");
var newPerson2 = new Person4("hjdf","reddy");
var newPerson3 = new Person4("fghhdsgjkr","reddy");
console.log(newPerson1.fullName());
console.log(newPerson2.fullName());
console.log(newPerson3.fullName());

/********************self Invoking Functions*********/
/*
(function(name){
	console.log('Heloo ' + name)
})("srikanth")
*/
