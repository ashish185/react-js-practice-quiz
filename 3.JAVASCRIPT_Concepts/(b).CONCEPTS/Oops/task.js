function Shape(name, sides, sideLength) {
    this.name = name;
    this.sides = sides;
    this.sideLength = sideLength;
  }
  
  // Write your code below here
  Shape.prototype.calcPerimeter = function (){
    console.log(this.sides * this.sideLength);
  /*   console.log("hi");; */
  }

  let square = new Shape('square',4,3);
  square.calcPerimeter();