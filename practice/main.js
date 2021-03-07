let baseSalary = 30000;
let overtime = 10;
let rate = 20;

// Procedural
function getWage(baseSalary, overtime, rate) {
  return baseSalary + overtime * rate;
}

// OOP
let employee = {
  baseSalary: 30000,
  overtime: 10,
  rate: 20,
  getWage: function () {
    return this.baseSalary + this.overtime * this.rate;
  },
};

employee.getWage();

// circle example

let circle = {
  radius: 1,
  location: {
    x: 1,
    y: 1,
  },
  draw: () => {
    console.log("draw");
  },
};

circle.draw();


// Constructor Function
function Circle(radius) {
  this.radius = radius;
  
  let defaultLocation = { x: 0, y: 0};

  this.getDefaultLocation = function() {
    return defaultLocation;
  }

  this.draw = function () {
    console.log("draw");
  };

  Object.defineProperty() {
    
  }
}

const newCircle = new Circle(10);
circle.draw();

for (let key in circle) {
  if (typeof circle[key] !== 'function') {
    console.log(key, circle[key]);
  }
}

const keys = Object.keys(circle);
newCircle.getDefaultLocation();


 