var length = 10;

function fn() {
	console.log(this.length);
}

var obj = {
  length: 5,
  method: function(fn) {
    fn();
    arguments[0]();
    console.log(arguments);
  }
};

obj.method(fn, 1);