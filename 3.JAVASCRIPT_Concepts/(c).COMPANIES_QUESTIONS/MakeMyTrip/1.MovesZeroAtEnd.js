const arr = [1, 2, 0, 3, 0, 5, 4, 0];

let ptr1 = null;
let ptr2 = null; //for ist zero tracking

arr.forEach((el, index) => {
  if (el === 0 && ptr2 === null) {
    ptr2 = index;
  }
  if (el !== 0) {
    ptr1 = index;
  }

  if ((ptr1 >= 0 && ptr2 >= 0) && ptr2 !== null && (ptr1 > ptr2)) {
    let temp = arr[ptr2];
    arr[ptr2] = arr[ptr1];
    arr[ptr1] = temp;
    ptr2 = null;
  }
})

console.log('arr', arr);