/* 
  Suppose I want a program which will call asyncFunction1 after 1 second and
  after it's successful response it will call asyncFunction2 and then asyncFunction3
*/

const asyncFunction1 = ((error, result1) => {
  if (error) {
    console.error(error);
  } else {
    asyncFunction2(result1, (error, result2) => {
      if (error) {
        console.error(error);
      } else {
        asyncFunction3(result2, (error, result3) => {
          if (error) {
            console.error(error);
          } else {
            // More nested callbacks...
          }
        });
      }
    });
  }
});

function asyncFunction() {
  return new Promise(() => {
    // Asynchronous operation
    setTimeout(() => {
      asyncFunction1('Data');
    }, 1000);
  });
}
asyncFunction();


/* Promise resolution */
asyncFunction
.then(res => asyncFunction1)
.then(res => asyncFunction2)


async function fetchMultipleData() {
  try {
    const [data1, data2] = await Promise.all([
      asyncFunction1(),
      asyncFunction2()
    ]);
    console.log(data1, data2);
  } catch (error) {
    console.error(error);
  }
}