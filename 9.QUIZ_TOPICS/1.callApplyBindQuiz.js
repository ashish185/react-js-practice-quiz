"use strict";
const questions = [
  {
    question: `
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
    `,
    id: 0,
    correctAnswer: "window object or global",
    explanation:'Object bounds to Global object'
  },
];

const callApplyBindQuestions = questions.map((obj, index) => ({ ...obj, id: index }));
export { callApplyBindQuestions };


// const student = {
//   firstName:'Ashish',
//   lastName:'Singhal',
//   printFullName: function (rollNumber) {
//       console.log(this.firstName+" "+this.lastName+" rollNumber "+ rollNumber);
//   },
// }
// student.printFullName(1214185);

// const student2={
//   firstName:'Ashish',
//   lastName:'Julia',
// };

// student.printFullName.call(student2, [1214186]);


// student.printFullName.bind(student2, 1214186)();


