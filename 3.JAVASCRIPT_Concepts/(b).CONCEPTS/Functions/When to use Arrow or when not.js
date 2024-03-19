//Here are some instances where you probably wouldn’t want to use them:

const Person = {
    name: 'Ash',
    getName: () => {
      //Don't use like this
      console.log(this.name); //undefined
      return this.name;
    }
  }
console.log('xzxz', Person.getName()); //undefined

const Person2 = {
    name: 'Muk',
    getNameRegularFunc: function () {
      console.log(this.name);
    },
    /* we can write this */
    getNameRegularFunc2() {
      console.log(this.name);
    }
    /* But writing this can give error, you need : for that
     function getNameRegularFunc2() {
      console.log(this.name);
    }
    */
}
console.log(Person2);/* 
{ name: 'Muk',
  getNameRegularFunc: [Function: getNameRegularFunc],
  getNameRegularFunc2: [Function: getNameRegularFunc2] }
*/
//Person2.getName(); //TypeError: Person2.getName is not a function it
Person2.getNameRegularFunc();
