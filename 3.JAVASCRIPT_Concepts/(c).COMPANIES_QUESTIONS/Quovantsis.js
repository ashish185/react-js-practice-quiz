Rekha Verma16:40
const x = {a:{b:{c:1}}}
You16:42
{a}
let {a}= x;
Rekha Verma16:45
[1000, 2]
[{
 name: "Rekha",
 salary:10000
},
{
 name: "Ashish",
 salary:1000
}
]
You16:48
let sum=0;
obj.keys(obj).forEach(el => { sum=sum+el.salary});
Rekha Verma16:53
var myObject = {
    foo: "bar",
    func: function() {
        var self = this;
        console.log("outer func:  this.foo = " + this.foo);
        console.log("outer func:  self.foo = " + self.foo);
        (function() {
            console.log("inner func:  this.foo = " + this.foo);
            console.log("inner func:  self.foo = " + self.foo);
        }());
    }
};
myObject.func();
Rekha Verma16:59
for (var i = 0; i < 5; i++) {
  var btn = document.createElement('button');
  btn.appendChild(document.createTextNode('Button ' + i));
  btn.addEventListener('click', function(){ console.log(i); });
  document.body.appendChild(btn);
}
Rekha Verma17:02
12 || 13
1 && 2
var length = 10;
function fn() {
	console.log(this.length);
}

var obj = {
  length: 5,
  method: function(fn) {
    fn();
    arguments[0]();
  }
};

obj.method(fn, 1);
Rekha Verma17:11
We are given an excel sheet which contains integers from 1 to 50, including both. However, the numbers are in a jumbled form and there is 1 integer missing. You have to write a code to identify the missing integer.
Rekha Verma17:21
[[1,2,3,4],[5,6]]
[1,2,3,4,5,6]
Rekha Verma17:32
React.useEffect(() =>{
  const query = useQuery()
})