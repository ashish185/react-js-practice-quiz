"use strict";
const questions = [
  {
    question: `
    console.log(this);
    `,
    id: 0,
    correctAnswer: "window object or global",
    explanation:'Object bounds to Global object'
  },
  {
    question: `
    '
    const arrow = () => {
      //In not strict mode it is global object
      console.log(this === window);
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
    explanation:'it retains the this value of the enclosing lexical context'
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
    explanation:'Because in strict it depends upon the calling of function but in unstrict mode both will be window object'
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
    explanation:'In non strict mode If a function is called with this set to undefined or null, this gets substituted with globalThis.'
  },
  {
    question: `
    const obj= {
      x:20,
      y: function(){
        console.log(this);
        function z(){
          console.log(this);
        }
        const arrow= ()=> {
          console.log(this);
          const arrow2=()=> {
            console.log(this.x);
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
    correctAnswer: "this of object, window object in non strict mode else undefined, this of object",
    explanation:'this gets substituted with globalThis, thats why window object'
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
    student.printName();
    `,
    id: 3,
    correctAnswer: "Amit",
    explanation:'Simple'
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
    explanation:'Call over rides this with calling object'
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
    explanation:'Call over rides this with calling object'
  },
  {
    question: `
    // Arrow function inside callback fn
    const obj={
      a:20,
      x: function(){
        const y= ()=> {
          console.log(this)
        }
        y();
      }
    }
    obj.x(); //x is called with obj
    `,
    id: 5,
    correctAnswer: "{a: 20, x: ƒ}",
    explanation:'Value of this depends upon calling here this refers to the obj'
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
    explanation:'Value of this depends upon calling here this refers to the obj'
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
    explanation:'Value of this depends upon calling'
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
    explanation:'Arrow function binds to it;s lexical content'
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
    explanation:'depends on way of function calling'
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
    explanation:'This binding is with global object,it substitute to global object'
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
    explanation:'This binding is with global object,it substitute to global object'
  },
];

const thisQuestions = questions.map((obj, index) => ({ ...obj, id: index }));
export { thisQuestions };




