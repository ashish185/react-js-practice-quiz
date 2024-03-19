console.log(JSON.stringify({}));                                               // '{}'
console.log(JSON.stringify(true));                                             // 'true'
console.log(JSON.stringify('foo'));                                            // '"foo"'
console.log(JSON.stringify([1, 'false', false]));                              // '[1,"false",false]'
console.log(JSON.stringify([NaN, null, Infinity]));                            // '[null,null,null]'
console.log(JSON.stringify({ x: 5 }));                                         //{"x":5}
console.log(JSON.stringify({ x: null, y:undefined, z:Symbol("S") }));           //{"x":null}
console.log(JSON.stringify({ getName(){ console.log("Hi")}}));  //{}
console.log(JSON.stringify({ getName: function(){ console.log("Hi")}}));  //{}

/* JSON.stringify do not understand 
NaN, undefined, Symbol, function inside object
*/