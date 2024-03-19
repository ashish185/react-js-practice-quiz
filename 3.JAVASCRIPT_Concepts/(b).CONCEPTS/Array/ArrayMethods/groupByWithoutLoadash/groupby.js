const users = [
   { name: 'Jim', color: 'blue' },
   { name: 'Sam', color: 'blue' },
   { name: 'Eddie', color: 'green' },
 ];

 /* Expected Output
 {
  blue: [{
    { name: 'Jim', color: 'blue' },
    { name: 'Sam', color: 'blue' },
  }],
  green: [{ name: 'Eddie', color: 'green' }]
}
 */

const usersByColor = users.reduce((acc, value) => {
   // Group initialization
   if (!acc[value.color]) {
     acc[value.color] = [];
   }
   // Grouping
   acc[value.color].push(value);
   return acc;
 }, {});

 console.log(usersByColor); //worked