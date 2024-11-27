const x={
  copyPaste: function () {
    const a1 = {};
    const b1 = { key: 'a' };
    const c1 = { key: 'c' };
    
    a1[b1] = 600;
    b1[c1] = 700;
    
    console.log(a1[c1]);
    console.log(a1[b1]);
    console.log(b1[b1]);
    console.log(b1[c1]);
  }
}

export const sillyQuestions = [
  {
    question: `
      const a=10;
      const b= new Number(10);
      const c=10;
      console.log(a === b);
      console.log(b===c);
      console.log(c===a);
    `,
    id: 1,
    correctAnswer: `
    console.log(a === b); //false
    console.log(b === c); //false
    console.log(c === a); //true
    `,
    explanation: ''
  },
  {
    question: `
    const a1 = {};
    const b1 = { key: 'a' };
    const c1 = { key: 'c' };
    
    a1[b1] = 600;
    b1[c1] = 700;
    
    console.log(a1[c1]);
    console.log(a1[b1]);
    console.log(b1[b1]);
    console.log(b1[c1]);
    `,
    id: 2,
    correctAnswer: `
    console.log(a1[c1]); //600
    console.log(a1[b1]); //600
    console.log(b1[b1]); //700
    console.log(b1[c1]); //700
    `,
    explanation: `
    Since javaScript cannot store object as key it converts into string.
    a1[b1] = 600; // Stores like a1['object object'] = 600;
    console.log(a1[c1]); //so a1[object object] is already 600`
  },
  {
    question: `
  console.log('+true', +true);
  console.log('!true', !'true');
  console.log(+'2');
  console.log(-'2');
  console.log(3 + '2');
  console.log(3 - '2');
  // console.log(*'2'); ?
  console.log([] == false);
  if ([]) {
    console.log('enter array');
  }
  console.log(0 == false);
  console.log('' == false);
  console.log(undefined == 0);
  console.log(true > 0.5);
  console.log(NaN == 0);

  console.log("+0 === -0", +0 === -0); //true === Plus minus k Zero k case m shi kam nhi krta
  console.log("Object.is(-0,+0)", Object.is(+0, -0));
    `,
    id: 5,
    correctAnswer: `
    console.log('+true', +true); //1
  console.log('!true', !'true'); //false
      console.log(+'2'); //2 as a number: it behaves like unary operator
    console.log(-'2'); //-2 as a number: The - operator expects both operands to be numbers. When it encounters the string '5', JavaScript attempts to convert the string to a number.
    console.log(3 + '2'); // 32: if left of has something and the right is string then + work as string concatenation.
    console.log(3 - '2'); // 1: The - operator converts the string '5' to the number 5 and then performs the subtraction, resulting in 1.
    // console.log(*'2'); ?
    console.log([] == false); //true:  == operator is the loose equality operator, which performs type coercion before
    if ([]) {
      console.log('enter array'); // logs enter array
    }
    console.log(0 == false); //true
    console.log('' == false); // true
    console.log(undefined == 0); // false
    console.log(true > 0.5); // true: Internal coercion works and it compares with 1
    console.log(NaN == 0); //false

    console.log("+0 === -0", +0 === -0); //true === Plus minus k Zero k case m shi kam nhi krta
    console.log("Object.is(-0,+0)", Object.is(+0, -0)); //false
    `,
    explanation: ''
  },

  {
    question: `
      
    `,
    id: 5,
    correctAnswer: `
   // why this output is wrong 
   const arr=[100, 50,150,200];
  arr.sort();
  console.log(arr);
    `,
    explanation:`
    Here's what happens in your example:
100 → starts with "1", Unicode value 49
150 → starts with "1", Unicode value 49
200 → starts with "2", Unicode value 50
50 → starts with "5", Unicode value 5
    `
  },
]