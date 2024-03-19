const mp = new Map();
mp.set("a",1);
mp.set("b",2);

//Does Map contains the key
console.log(mp.has("a"));

//Iterate
mp.forEach((val,key) => console.log(val,key));

const st = new Set();
st.add("1");
st.add("2");
//Does Set contains the key
console.log(st.has("1"));
st.forEach((val) =>console.log(val));

//substring
const str = "Ash sing";
console.log(str.includes("sing"));

