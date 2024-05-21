/* 
Problem: Since var has function scope it will create closure with setTimeout and 
the output will be 3,3,3 instead of 0,1,2Problem: Since var has function scope it will create closure with setTimeout and 
*/

for (var i = 0; i < 3; i++) {
  setTimeout(function () {
    console.log("SetTimeout i value with var", i);
  }, 1000);
}

/* Solutions */

// Solution: 1- we can change the scope of variable from function scope to block scope by using let
for (let i = 0; i < 3; i++) {
  setTimeout(function () {
    console.log("SetTimeout i value with var", i);
  }, 1000);
}
// Solution: 2: if we don't want to change var to let.
for (var x = 0; x < 3; x++) {
  // eslint-disable-next-line no-inner-declarations
  function inner(value) {
    setTimeout(function () {
      console.log("SetTimeout x value with var", value); // 0 ,1 ,2
    }, 1000);
  }
  inner(x); 
}

// Solution: 3: IIFY block.
for (var z = 0; z < 3; z++) {
  // eslint-disable-next-line no-inner-declarations
  const func = function (local_p) {
    return function () { console.log("Event with var it is giving result", local_p); }
  }(z);
  setTimeout(func, 1000);
}