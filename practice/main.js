function Circle(radius) {
  this.radius = radius;
  this.draw = function() {
    console.log("draw");
  }
}

const another = new Circle();

console.log(another.draw());