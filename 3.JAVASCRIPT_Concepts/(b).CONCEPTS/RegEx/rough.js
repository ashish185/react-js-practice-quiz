console.log(/[a-z]{3,4}/.test("1")); //false
console.log(/[a-z]{3,4}/.test("ab")); //false
console.log(/[a-z]{3,4}/.test("abc")); //true
console.log(/[a-z]{3,4}/.test("abc1")); //true

console.log(/[A-Z 0-9]{3,4}/.test("ABC")); //true
console.log(/[A-Z 0-9]{3,4}/.test("ABC0")); //true
console.log(/[A-Z 0-9]{3,4}/.test("ABC08")); //true