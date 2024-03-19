/* Break vs return */

const arr= ['1','2','3'];

/* Comment it for better understanding */
/* arr.map(el => {
   console.log(el);
   if(el==='2'){
      return el;
   }
}) */

/*returns "Illegal Break Statement" Error. , we cannot use break inside map*/
// arr.map(el => {
//    console.log('second', el);
//    if(el==='2'){
//       break;
//    }
// })

/* solution for this is for loop */

for (let index = 0; index < arr.length; index++) {
   console.log(arr[index]);
   if (arr[index] === 2) {
      break;
   }
}
