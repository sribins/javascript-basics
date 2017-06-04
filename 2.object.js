//Objects
// 4ways to create object in script
//creating Empty Object


//1.using new object
/*var obj1= new Object();
console.log(obj1) ;

//2.using object literal
var obj2 ={
	name:"Sri"
};

//uisng create 
console.log(obj2)

var obj3 = Object.create(obj2);
console.log(obj3)

//function constructor
function Person(){

}
var obj4 = new Person();
console.log(obj4)

var string = "hello world";

var string1= string.split("").reverse().join("").split(" ").reverse().join(" ");
console.log(string1);*/
// ==============================================

// Adding Properties to objects


var obj = {
	id : 1
};
 obj["name"] = "Srikanth";
 console.log(obj);
 obj.city = "Hyderabad";
 
 Object.defineProperty(obj, 'state', {
 	value : "TS"
 })
 delete obj.state;
 console.log(obj);

 //===================================================

 //Modifying Objects

 //1.Prevent extensions() 

/*
1. it allows modify existing property 
2. deleting existng property
3.It wont allow new property
*/
 /*var person = {name:"john",age:'35'}
 Object.preventExtensions(person)
 person.name ="kanth"
 person.city="bnglr";
 delete person.age;
 console.log(person);*/

 //===============================================>>>>

 /*


 //2.seal
1.it allows modify existing property 
2.not delete the object
3.wont allow to add new property
 */


 var person2 = {name:"john",age:'35'}
 Object.seal(person2)
 person2.name ="kanth"
 person2.city="bnglr";
 delete person2.age;
 console.log(person2);

 //3.freeze wont allow to do anythng fr eisting one


 /********************Adding properties and methods to object************/

 /*var person3 ={
 	firstName : "sri",
 	lastName : "kanth",
 	fullname : function(){
 		return this.firstName+" "+this.lastName;
 	}
 }
 var firstName = person3.firstName();
 var firstName = person3.fullname();
 console.log(firstName);
 console.log(fullname)*/

  /********************get keys from an object ************/

  var customer ={
  	name : "reddy",
  	city : "hyd",
  	title : "Tech boss",
  	age : 16
  }

  var keys = Object.keys(customer);
  console.log(keys)

  var values = Object.values(customer);
  console.log(values);
