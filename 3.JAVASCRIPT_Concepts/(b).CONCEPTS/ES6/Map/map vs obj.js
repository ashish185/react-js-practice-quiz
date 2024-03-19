/* Map and set */
//What is the diff between Object and Map?
//Ans: Map are directly Iterable whereas as Object are not,we can use forEach with Map but not with object
//Map m automatic ordering nhi hoti, par object m number k case m ho jati h


const obj={1214185:"Ashish",1214183:'Arpit'};
const mapObj = new Map();
mapObj.set(1214183,"Arpit");
mapObj.set(1214185,"Ashish");
console.log("obj",obj); //{ '1214183': 'Arpit', '1214185': 'Ashish' }
console.log("Map Obj", mapObj); //Map Obj Map { 1214183 => 'Arpit', 1214185 => 'Ashish' }
mapObj.forEach(el => console.log("mp",el));