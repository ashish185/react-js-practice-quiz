"use strict";
const closuresQuestions = [
  {
    question: `
    function Outer1( outerArg ){
      let a=10;
      function inner1(innerArg){
          let b=20;
          let c=30;
          ++outerArg;
          ++a;
          b++;
          console.log(`Val of a is ${a}, b is ${b}, but c is ${c} outerArg is ${outerArg}`);
          ++c;
      }
      return inner1;
    }
    Outer1(1)(2)
    `,
    id: 1,
    correctAnswer: "window object or global",
    explanation:'Object bounds to Global object'
  },
];

const thisQuestions = closuresQuestions.map((obj, index) => ({ ...obj, id: index }));
export { closuresQuestions };




