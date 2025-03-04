/*  */

const factorialForLoop = (n) => {
  let res = n;
  for (let i = n - 1; i > 1; i--) {
    res = res * (i);
  }
  return res;
};
console.log('ans', factorialForLoop(5));


const factorialRecursive = (n) => {
  if(n==1){
    return n;
  }
  let res= factorialRecursive(n-1);
  res = res * n;
  return res;
};
console.log('ans', factorialRecursive(5));
