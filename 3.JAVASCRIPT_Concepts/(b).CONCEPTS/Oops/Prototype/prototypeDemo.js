function Mobile(name, price) {
  this.name = name;
  this.price = price;
  this.a=30;
}
Mobile.prototype.a = 20;
/*
Mobile function has two objects
1) Mobile itself
2) prototype obj: has constructor and other properties

Mobile fn has property which is pointing to the prototype object
*/

var lg = new Mobile();
/* Whenever new keyword encouter a memory to allocated to an object,
with a propery called __proto__ which points to the same Property object of Mobile function 
*/
console.log(lg.__proto__ === Mobile.prototype);//true
console.log(lg.__proto__.a === Mobile.prototype.a); //true
console.log(lg.__proto__.constructor === Mobile.prototype.constructor); //true
console.log(lg.a); //30 (it will first look in obj)

/* It will find any value first it in 'lg' object than in Mobile's prototype obj then in Object prototype */
console.log(lg.anyValue); //undefined
