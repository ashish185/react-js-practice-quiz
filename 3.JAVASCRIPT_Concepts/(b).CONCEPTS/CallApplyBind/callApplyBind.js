let obj1 = {
    firstName:'Ashish',
    lastName:'Singhal',
    printFullName: function (homeTown) {
        console.log(this.firstName+" "+this.lastName+" hometown "+ homeTown);
    },
    printFirstName: function () {
        console.log(this.firstName);
    }
}

obj1.printFullName('Noida'); //Ashish Singhal hometown Noida
obj1.printFirstName();

let obj2 = {
    firstName:'Ravi',
    lastName:'Singhal',
}
// Agar mujhe obj2 k liye printFullName call krna hota

//It calls method of an object (obj1), substitute another object
// in the current object. it's kind of function borrowing
//Syntax: object.objectMethod.call( objectInstance, arguments )
obj1.printFirstName.call(obj2); //Ravi
obj1.printFullName.call(obj2,'Rohtak'); //Ravi Singhal hometown Rohtak

let obj3 = {
    firstName:'Shweta',
    lastName:'Singhal',
    printFullData: function (homeTown, currentTown ) {
        console.log(this.firstName+" "+this.lastName+" hometown "+ homeTown +" currentTown "+currentTown);
    },
    printFirstName: function () {
        console.log(this.firstName);
    }
}
obj3.printFullData('Rohtak','Sonipat')
let obj4 = {
    firstName:'Krishna',
    lastName:'Singhal',
}
// The diff between call and apply is of arguments only,
//In call method we need to pass args separately
// in apply method we need to pass array as argument
obj3.printFullData.call(obj4,'Rohtak','Delhi');
obj3.printFullData.apply(obj4,['Rohtak','Delhi']);

//similarly bind can be used 
// bind gives a copy of function which can be invoke later where as Call and apply called function immediately.
/* BIND SYNTAX
Note:***** bind k args array nhi hote
func.bind(thisArg[, arg1[, arg2[, ...argN]]])
*/
let bindFunc = obj3.printFullData.bind(obj4,'Rohtak1','Delhi1');
bindFunc(); //Krishna Singhal hometown Rohtak1 currentTown Delhi1