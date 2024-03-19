const result = [
  { subject: 'Physics', marks: 41 },
  { subject: 'Chemistry', marks: 59 },
  { subject: 'Pure Maths', marks: 36 },
  { subject: 'Applied Maths', marks: 90 },
  { subject: 'English', marks: 64 },
];

let initialValue = {
  pass: [],
  fail: []
}
/* Here it is noticed that current obj set to index 0 */
result.reduce((acc, currentObj, index, orginalArr) => {
  // console.log(acc, currentObj, index, orginalArr);
}, []);

const groupedResult = result.reduce((accumulator, current) => {
  (current.marks >= 50) ? accumulator.pass.push(current) : accumulator.fail.push(current);
  return accumulator;
}, initialValue);

console.log(groupedResult);
/*  Outputs
{
  pass: [
    { subject: 'Chemistry', marks: 59 },
    { subject: 'Applied Maths', marks: 90 },
    { subject: 'English', marks: 64 }
  ],
  fail: [
    { subject: 'Physics', marks: 41 },
    { subject: 'Pure Maths', marks: 36 }
  ]
}

*/