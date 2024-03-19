console.log(
   "-------------------------------SPLICE AND SLICE IN JAVASCRIPT--------------------------"
 );
 // Where to use splice and slice?|
 /* Splice - 1)Used to insert or delete elements to/from array
  (p yani in place).It mutates the original array
    Slice - 1)Used to pick the elements from array
   (is more likely substring ).It does not mutates the original array
  */
 
 /* splice() - It works in place i.e. It mutates the original array */
 // splice(1); first index se last tak ka array remove kar do
 // splice(2,1); remove 1(delete count) element from index 2
 // splice(-2,1); remove 1 element from index -2 last se 2nd index. *****
 // splice(2,1,'ash'); remove 1 element from index 2 and add ash instead
 // splice return krta h remove array
 
 const months = ["Jan", "March", "April", "June"];
 console.log("months inital " + months);
 console.log("months.splice(1,2) returns " + months.splice(1, 2)); //March,April
 console.log("months after splicing (works in place) " + months);
 
 
 const arrOFRollNumber = [
   "1214185",
   "1214186",
   "1214187",
   "1214188",
   "1214189",
   "1214190",
 ];

 console.log("arrOFRollNumber initial", arrOFRollNumber);
 console.log(
   "arrOFRollNumber.slice(1,2) returns " + arrOFRollNumber.slice(1, 2) //1214186
 ); //here End is Exclusive (end index not considered)
 console.log(
   "arrOFRollNumber final, IT does not work in place",
   arrOFRollNumber
 );
 console.log("arrOFRollNumber.slice(1) returns " + arrOFRollNumber.slice(1));
 
 const string1 = "ashishsinghal";
 console.log("string1.substring(0,6)", string1.substring(0, 6)); //ashish
 console.log("string1.substring(6)", string1.substring(6)); //singhal
 