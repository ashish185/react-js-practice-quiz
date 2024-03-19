let employee2= {
  fName: 'Mukul',
  getFullName: function(fromArgs) {
      console.log(this.fName+ fromArgs);
  }
}

let obj2= {
  fName: 'Vipin',
}
/* 
Expectations
employee2.getFullName('Bansal'); //MukulBansal

employee2.getFullName.bind(obj2, 'Bansal2')(); //VipinBansal2
*/

/* 
Q1. Kiske prototype m jayega ye?
Ans: Function k.
*/

Function.prototype.myBind = function (...args) {
  const firstArg= args[0];
  const valuesArr= args.slice(1);
  const thisObj= this;
  return function (funcArgs) {
    thisObj.apply(firstArg, [...valuesArr, funcArgs]);
  }
}

const funcCall = employee2.getFullName.bind(obj2);
//employee2.getFullName.bind(obj2, 'bansal3');
funcCall('Bansal4'); // VipinBansal3

const funcCallWithMyBind = employee2.getFullName.myBind(obj2, 'Bansal5');
funcCallWithMyBind();