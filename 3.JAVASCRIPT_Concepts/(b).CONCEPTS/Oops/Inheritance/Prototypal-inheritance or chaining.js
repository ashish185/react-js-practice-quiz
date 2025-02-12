//Prototypal inheritance
const lion = {
    name: 'Lion',
    sound: 'Roar',
    getSound: function () {
        console.log(`${this.name} animal sound is ${this.sound}`)
    }
}
lion.getSound();

const dog = {
    name: 'Dog',
    sound: 'Bark',
};

dog.__proto__ = lion;
dog.getSound();










/* Example 2 */
const myObj1 = {
    name: 'Ashish',
    city: 'Noida',
    getDetails: function () {
        console.log("Name is " + this.name + " City is " + this.city);
    }
}

const childObj1 = {
    name: 'Mukul'
}

childObj1.__proto__ = myObj1; //Here __proto__ is refering to myObj
childObj1.getDetails(); //Name is Mukul City is Noida
/* So childObj will first look getDetails in their own object if not found then look
in myObj.if not found then lookin myObj proto  which is pointing to the Object class proto
 */
console.log(childObj1.city);



