/* 
Some Useful Map functions 
mp.has("a");
mp.set(key, value);
mp.get(key);
mp.forEach((val,key) => console.log(val,key));
*/

/* 
obj { '1214183': 'Arpit', '1214185': 'Ashish' }
Map Obj Map { 1214183 => 'Arpit', 1214185 => 'Ashish' }
*/

var hm = new Map();
hm.set("1214185", 1);
hm.set("1214186", 2);
hm.set(1214187, 3);
console.log(hm); //{ '1214185' => 1, '1214186' => 2, 1214187 => 3 }
console.log("hm.values()",hm.values()); //hm.values() [Map Iterator] { 1, 2, 3 }
console.log("hm.keys()",hm.keys()); //hm.keys() [Map Iterator] { '1214185', '1214186', 1214187 }
for (let [key, value] of hm) {
  console.log(key, value);
/* 1214185 1
1214186 2
1214187 3 */
}
//Generally forEach is designed to give value not key
hm.forEach( el => console.log("for each",el))
// To use keys with forEach
/* 
for each 1
for each 2
for each 3
 */
hm.forEach( (val,key) => console.log("for each(val,key)",key,val)) //*** */ it's not Key,val
/*for each(val,key) 1214185 1
for each(val,key) 1214186 2
for each(val,key) 1214187 3  */

console.log("Block scope overs",hm);

console.log("**************Weak Map*******************");
/* The WeakMap object is a collection of key/value pairs in which the keys are weakly referenced. 
The keys must be objects and the values can be arbitrary values.
they do not prevent garbage collection in case there would be no other reference to the key object.

Keys of WeakMaps are of the type Object only. Primitive data types as keys are not allowed (e.g. a Symbol can't be a WeakMap key).
*/
const wm = new WeakMap();
const objBlank={};
wm.set(objBlank,1);
console.log(wm.get(1)); //1

const x= new Map();