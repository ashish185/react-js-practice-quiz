/* 
Arrow function is syntactical sugar for **function expression
Arrow functions were introduced in ES6.

Earlier
const getRectArea = function(width, height) {
  return width * height;
};
With arrow fn
const getRectArea = (width, height) => {
  return width * height;
};
1)Does not have its own bindings to this or super, and should not be used as methods.
2)Not suitable for call, apply and bind methods, 
*/