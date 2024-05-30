const objectsMCQ = [
  {
    question: `
    let person = { name: 'Lydia' };
    const members = [person];
    person = null;
    console.log(members);
    `,
    id: 1,
    correctAnswer: [{ name: 'Lydia' }],
    explanation: `We keep the reference object at 0th index of member array, hence pointer to person object set to null but it still
    on the same reference.
    `
  },
  {
    question: `
    const value = { number: 10 };

    const multiply = (x = { ...value }) => {
      console.log((x.number *= 2));
    };
    
    multiply();
    multiply();
    multiply(value);
    multiply(value);    
    `,
    id: 1,
    correctAnswer: `20 20 20 40`,
    explanation: `The learning from this question is to be patient and understand the question, 
    when we are sending multiply(value), se are not using the default parameter of multiply instead we are sending
    the reference.
    `
  },
  {
    question: `
    function changeAgeAndReference(person) {
      person.age = 25;
      person = {
        name: 'John',
        age: 50
      };
  
      return person;
    }
  
    const personObj1 = {
      name: 'Alex',
      age: 30
    };
  
    const personObj2 = changeAgeAndReference(personObj1);
  
    console.log(personObj1); // -> ?
    console.log(personObj2); // -> ?
    `,
    id: 1,
    correctAnswer: `{name: 'Alex', age: 25}
    {name: 'John', age: 50}
    `,
    explanation: `Reference is just being assigned in case2`
  },

];
export { objectsMCQ };