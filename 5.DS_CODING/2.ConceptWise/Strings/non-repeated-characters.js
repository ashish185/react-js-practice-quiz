/*
  Return the first non repeating characters.
  const x='abbccaef';
*/
/* This is Brute for Solution O(n2) */
const firstNonRepeatedBrutForce = (str) => {
  const arr = [...str];
  for (let i = 0; i < arr.length; i++) {
    let count = 0;
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        count = count + 1;
      }
    }
    if (count === 1) {
      return arr[i];
    }
    count = 0;
  }
}

/*  
This is optimal solution with T: O(n), S: O(n)
*/
const firstNonRepeatedOptimalSo = (str) => {
  const arr = [...str];
  const mp = new Map();
  for (let i = 0; i < arr.length; i++) {
    if (mp.has(arr[i])) {
      mp.set(arr[i], mp.get(arr[i]) + 1);
    }
    else {
      mp.set(arr[i], 1);
    }
  }
  for (let i = 0; i < arr.length; i++) {
    const value = arr[i];
    const count = mp.get(value);
    if(count ===1 ){
      return value;
    }
  }
}

console.log(firstNonRepeatedBrutForce('abwbccaf')); //w
console.log(firstNonRepeatedOptimalSo('abwbccaf')); //w

