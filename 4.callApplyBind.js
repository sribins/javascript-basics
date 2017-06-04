var person1 = {name : "ByreGowda", age: 28}
var person2 = {name : "sriiii", age: 18}

function sayHello(message,wish){
	return message + " " + 
	this.name + " " + 
	this.age + " " +wish
}

var msg1 = sayHello.bind(person1);
console.log(msg1("helloooo"))

var msg2 = sayHello.bind(person2);
console.log(msg2("helloooo"))

var msg3 = sayHello.call(person2,"helloooo");
console.log(msg3)

var msg4 = sayHello.apply(person1,["hello","helloooo"]);
console.log(msg4)