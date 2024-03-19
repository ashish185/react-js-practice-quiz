class Car {
  constructor() {
    this.name = "Honda city";
  }
  getNameOfTheCar() {
    return this.name;
  }
  /* getNameOftheCarArrow = () => {
    console.log("yes");
  }; */
}

const c1 = new Car();
const c2= c1;
const c3= c1.getNameOfTheCar;
console.log(c1.getNameOfTheCar());
console.log(c2.getNameOfTheCar());
/* console.log(c3()); //here this is undefined
 */
console.log(c3.call(c1)); //substitute another obj c1 with current obj c3
console.log(c3.apply(c1));
console.log(c3.bind(c1)()); //as bind returns function
/* console.log(c1.getNameOftheCarArrow()); */ //******Error dega beacause h to ye variable hi aise kaise access kar skte ho