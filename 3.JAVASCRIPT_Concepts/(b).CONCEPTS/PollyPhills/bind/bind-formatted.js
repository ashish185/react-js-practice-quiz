const studentObj= {
  name:'Ashish',
  getFullName: function (middleName, lastName){
    console.log(`${this.name} ${middleName} ${lastName}`);
  }
};

studentObj.getFullName('Kumar', 'Singhal');

const studentObj2= {
  name:'Bhavya',
 }

studentObj.getFullName.bind(studentObj2, 'Kumar' , 'Goyal')();
studentObj.getFullName.bind(studentObj2)('Jindal' , 'Goyal');

const myBind = function(...bindArgs){
  const studentObj2= bindArgs[0];
  const thisObj= this; //It is the reference of current obj i.e student object
  const bindParammeters= bindArgs.slice(1);
  return function(...fnArgs){
    const allArgs=[...bindParammeters, ...fnArgs]
      thisObj.call(studentObj2, ...allArgs);
  }
};
Function.prototype.myBind= myBind ;

studentObj.getFullName.myBind(studentObj2, 'Kumar' , 'Goyal')();
studentObj.getFullName.myBind(studentObj2)('Jindal' , 'Goyal');