//Q1. Diff between forEach vs map
const arr=[1,2,3];
const mapVal = arr.map(el => {
  return el + 2;
});
const arrVal = arr.forEach(el => {
  return el + 3;
});
console.log('mapVal', mapVal); // [3,4,5]
console.log('arrVal', arrVal); // Undefined

/* 
1. for does not return anything whereas map store the data in arr
2. We cannot use filter with map
*/

//Q2. Diff between undefined and null.
//(a) typeof undefined is undefined and typeof null is null.
//(b) let a= null, const b; log(a,b) a will be null and b will be undefined.
//Will match the type
console.log(null==undefined); // true
console.log(null===undefined); // false

//Q3. Event delegation.
/* Commented because document not work in node *//* 
console.log('Products', document.querySelector('.products'));

document.querySelector('.products').addEventListener('click',
  (event) => {
    if(event.target.tagName === 'LI'){
      window.location.href += '#' + event.target.innerText
    }
  }
) */

//Q4. Flatten the array
const arr2 = [
  5,
  [1, 2],
  [3, 4]
];
/* 
Expected o/p: [1,2,3,4,5]
*/
function singleLevelFlatten() {
  return arr2.reduce((acc, el) => {
    if (Array.isArray(el)) {
      el.forEach(el2 => acc.push(el2))
    }
    else {
      acc.push(el)
    }
    return acc;
  }, []);
}
console.log('singleLevelFlatten', singleLevelFlatten()); //singleLevelFlatten [ 5, 1, 2, 3, 4 ]

const arr3 = [
  [5],
  [4, [5, 6]],
  [1, 2],
  [3, 4]
];

function multiLevelFlatten(item, ans, depth=1) {
  console.log(item);
  if (Array.isArray(item) && depth > 0) {
    item.forEach(el =>
      multiLevelFlatten(el, ans, depth - 1)
    )
  }
  else {
    ans.push(item);
  }
  return ans;
};

const ans = multiLevelFlatten(arr3, [], 3);
console.log('multiLevelFlatten', ans);
console.log('By using flat', arr3.flat()); // [ 5, 4, [ 5, 6 ], 1, 2, 3, 4 ]
console.log('By using flat with depth 2', arr3.flat(2)); //[ 5, 4, 5, 6 , 1, 2, 3, 4 ]
const x = [[1, 2], [[3]], 4];