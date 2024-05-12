const questions = [
  {
    question: `
    // Calling innerRegular inside printName
    const obj1={
      name:'Ash',
      printName:function(){
        console.log('Name', this.name);
        const innerRegular= function(){
          console.log('InnerRegular', this.name, this === window);
        }
        const innerArrow= ()=>{
          console.log('innerArrow', this.name, this === window);
        }
        innerRegular();
        innerArrow();
      }
    };
    obj1.printName()
    // Calling innerRegular like closure
    const obj2={
      name:'Ash',
      printName:function(){
        console.log('Name', this.name);
        const innerRegular= function(){
          console.log('InnerRegular obj2', this.name, this === window);
        }
        const innerArrow= ()=>{
          console.log('InnerArrow obj2', this.name, this === window);
        }
        return {innerRegular, innerArrow};
      }
    };
    
    obj2.printName().innerArrow();
    
    // Calling innerRegular like closure but without object
    function printName(){
        console.log('Name directly', this.name, this===window);
        const innerRegular= function(){
          console.log('InnerRegular directly', this.name, this === window);
        }
        const inner= ()=>{
          console.log('InnerArrow directly', this.name, this === window);
        }
        return {innerRegular, inner};
     };
    
     printName().innerRegular();
    `,
    id: 0,
    correctAnswer: `inner ko call krne wala this hi h`,
    explanation: 'Object bounds to Global object'
  },
  {
    question: `
    var a="45";
    function OuterA1() {
        let a = 10;
        console.log("Outer this", this, this.a); // window, 45
        function innerA() {
            var b=20;
            console.log("inner closure this", this,this.a); // window, 45
            console.log("check",a);
            (()=>{
                console.log("check2",this.a); //45 Points to window object
            })();
        }
        return innerA; // Returning reference of the function which is also an object.
    }
    let innerCall3 = OuterA1();
    innerCall3();
    `,
    id: 0,
    correctAnswer: `inner ko call krne wala this hi h`,
    explanation: 'Object bounds to Global object'
  },
  {
    question: `
    const obj = {
      a: 'obj1',
      x: () => {
        /* Arrow functions do not have their own this context; they inherit this from the surrounding enclosing lexical context */
        console.log(this); //Window
      }
    }
    obj.x();
    
    
    const obj2 = {
      a: 'obj2',
      x: function () {
        console.log(this); //{a: 'obj2', x: ƒ}
      }
    }
    obj2.x();
    
    
    const obj3 = {
      a: 'obj3',
      x: function () {
        const y = () => {
          /* enclosing lexical context in function x */
          console.log(this); // {a: 'obj3', x: ƒ}
        }
        y();
      }
    }
    obj3.x();
    
    const obj4 = {
      a: 'obj4',
      x: function () {
        function y() {
          /* it does not enclose lexical context in function x */
          console.log(this); //window
        }
        y();
      }
    }
    obj4.x();
    `,
    id: 0,
    correctAnswer: `
    window
    obj2
    obj3
    window
    `,
    explanation: 'Object bounds to Global object'
  },
  {
    question: `
    '
    const arrow = () => {
      console.log("Arrow without calling object", this === window);
    }
    arrow();
    
    const arrowStrict = () => {
      "use strict";
      console.log("outer",this === window); 
      const nestedArr=()=>{
        console.log("inner", this === window);
      }
      nestedArr();
    }
    arrowStrict();
    `,
    id: 1,
    correctAnswer: "true true true",
    explanation: 'it retains the this value of the enclosing lexical context'
  },
  {
    question: `
    function regularFunction(){
      "use strict";
      console.log(this);.
    }
    regularFunction();
    window.regularFunction();
    `,
    id: 2,
    correctAnswer: "undefined windowObject",
    explanation: 'Because in strict it depends upon the calling of function but in unstrict mode both will be window object'
  },
  {
    question: `
    function regular(){
      //In not strict mode it is global object
      console.log("regular non strict", this);
    }
    regular();
    `,
    id: 2.1,
    correctAnswer: "{a: 20, x: ƒ}",
    explanation: 'In non strict mode If a function is called with this set to undefined or null, this gets substituted with globalThis.'
  },
  {
    question: `
    const obj= {
      x:20,
      y: function(){
        console.log('1',this);
        function z(){
          console.log('2',this);
        }
        const arrow= ()=> {
          console.log('3',this);
          const arrow2=()=> {
            console.log('4', this.x);
          }
          arrow2();
        }
        z();
        arrow();
      }
    }
    obj.y();
    `,
    id: 2.2,
    correctAnswer: "1 -> {x: 20, y: ƒ}, 2 -> window object, 3 -> x: 20, y: ƒ}, 4 -> 20",
    //correctAnswer: "this of object, window object in non strict mode else undefined, this of object",
    explanation: 'this gets substituted with globalThis, thats why window object'
  },
  {
    question: `
    const student= {
      name: 'Amit',
      printName: function(){
        console.log("this", this ===window);
        console.log("Student name", this.name);
        return this.name;
      }
    }
    student.printName();
    `,
    id: 3,
    correctAnswer: "Amit",
    explanation: 'Simple'
  },
  {
    question: `
    const student= {
      name: 'Amit ji',
      printName: ()=>{
        console.log("this", this);
        console.log("isThisWindow", this ===window);
        console.log("Student name", this.name);
        return this.name;
      }
    }
    const student2={
      name: 'Deepak'
    };
    student.printName.call(student2);
    `,
    id: 4,
    correctAnswer: "Deepak",
    explanation: 'this: windowObject, isThisWindow: true, Student name: blank'
  },
  {
    question: `
    const student= {
      name: 'Amit',
      printName: function(){
        console.log("Student name", this.name);
        return this.name;
      }
    }
    const student2={
      name: 'Deepak'
    };
    student.printName.call(student2);
    `,
    id: 4,
    correctAnswer: "Deepak",
    explanation: 'Call over rides this with calling object'
  },
  {
    question: `
    // Arrow function inside callback fn  
    const obj={
      a:20,
      x: function(){
        console.log('isThisWidow1', this===window);
        const y= ()=> {
          console.log('isThisWidow2', this===window);
          console.log(this)
        }
        y();
      }
    }
    obj.x(); //x is called with obj
    `,
    id: 5,
    correctAnswer: "{a: 20, x: ƒ}",
    explanation: 'Value of this depends upon calling here this refers to the obj'
  },
  {
    question: `
    const obj = {
      message: 'Hi',
      printMessage() {
        return this.message;
      }
    };
    obj.printMessage();
    `,
    id: 6,
    correctAnswer: "Hi",
    explanation: 'Value of this depends upon calling here this refers to the obj'
  },
  {
    question: `
    const obj = {
      message: 'Hi',
      printMessage() {
        return this.message;
      }
    };
    const { printMessage } = obj;
    const obj2 = { message: 'Bye', printMessage };
    // or it could be obj2.printMessage= printMessage;
    const ans2 = obj2.printMessage();
    console.log('question2', ans2);
    `,
    id: 7,
    correctAnswer: "Bye",
    explanation: 'Value of this depends upon calling'
  },
  {
    question: `
    const typesOfFun = {
      name :"123",
      //Without function keyword Valid Syntax
      getName(){
          return this.name;
      },
      //Key function pair valid Syntax
      genName2: function(){
          return this.name;
      },
      genName3:() =>{
        console.log('this', this === window); //this is Global object
          return this;
      }
    }
    console.log('typesOfFun.getName()', typesOfFun.getName()); //123
    console.log('typesOfFun.genName2()', typesOfFun.genName2()); //123
    console.log('typesOfFun.genName3()', typesOfFun.genName3()); //blank
    `,
    id: 8,
    correctAnswer: "Answer in the log",
    explanation: 'Arrow function binds to it;s lexical content'
  },
  {
    question: `
    //Question 3: In setTimeOut
    const obj3 = {
    message3: 'Hi Obj3',
    printMessage3() {
    console.log(this.message3);
    return this.message3;
    }
    };
    const { printMessage3 } = obj3;
   setTimeout(() => obj3.printMessage3(), 0)
    `,
    id: 9,
    correctAnswer: "Hi obj3",
    explanation: 'depends on way of function calling'
  },
  {
    question: `
    const obj = {
      name :"123", 
      getName(){
          console.log('is this Belongs to window',this ===  window); //true
          return this.name;
      }
    }
    const getNameCopy= obj.getName; 
    //Here reference of this has been lost
    /* Since this is passed from calling object this is write */
    console.log(getNameCopy());//undefined
    `,
    id: 9,
    correctAnswer: "true undefined",
    explanation: 'This binding is with global object,it substitute to global object'
  },
  {
    question: `
    const obj = {
      name :"123", 
      getName(){
          console.log('is this Belongs to window',this ===  window); //true
          return this.name;
      }
    }
    const getNameCopy= obj.getName; 
    //Here reference of this has been lost
    /* Since this is passed from calling object this is write */
    console.log(getNameCopy.call(obj));
    `,
    id: 10,
    correctAnswer: "false 123",
    explanation: 'This binding is with global object,it substitute to global object'
  },
];

const thisQuestions = questions.map((obj, index) => ({ ...obj, id: index }));
export { thisQuestions };
