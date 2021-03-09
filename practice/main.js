// let baseSalary = 30000;
// let overtime = 10;
// let rate = 20;

// // Procedural
// function getWage(baseSalary, overtime, rate) {
//   return baseSalary + overtime * rate;
// }

// // OOP
// let employee = {
//   baseSalary: 30000,
//   overtime: 10,
//   rate: 20,
//   getWage: function () {
//     return this.baseSalary + this.overtime * this.rate;
//   },
// };

// employee.getWage();

// // circle example

// let circle = {
//   radius: 1,
//   location: {
//     x: 1,
//     y: 1,
//   },
//   draw: () => {
//     console.log("draw");
//   },
// };

// // circle.draw();

// // Constructor Function
// function Circle(radius) {
//   this.radius = radius;

//   let defaultLocation = { x: 0, y: 0 };

//   this.getDefaultLocation = function () {
//     return defaultLocation;
//   };

//   this.draw = function () {
//     console.log("draw");
//   };

//   Object.defineProperty(this, "defaultLocation", {});
// }

// const newCircle = new Circle(10);

// // for (let key in circle) {
// //   if (typeof circle[key] !== 'function') {
// //     console.log(key, circle[key]);
// //   }
// // }

// const keys = Object.keys(circle);
// newCircle.getDefaultLocation();

// ///

// function Stopwatch() {
//   let startTime = 0;
//   let endTime = 0;
//   let running = 0;
//   let duration = 0;

//   this.start = function () {
//     if (!running) {
//       running = true;
//       startTime = Date.now();
//     } else {
//       throw new Error("Stopwatch has already started!");
//     }
//   };

//   this.stop = function () {
//     if (running) {
//       running = false;
//       endTime = Date.now();
//       duration = (endTime - startTime) / 1000;
//     } else {
//       throw new Error("Stopwatch has already stopped!");
//     }
//   };

//   this.reset = function () {
//     startTime = 0;
//     endTime = 0;
//     running = false;
//     duration = 0;
//     return;
//   };

//   Object.defineProperty(this, "duration", {
//     get: function () {
//       return duration;
//     },
//     set: function (value) {
//       if (!value.duration) {
//         throw new Error("");
//       }
//       duration = value;
//     },
//   });
// }

// const sw = new Stopwatch();

function dblLinear(n) {
  let arr = [1];
  let u1 = 1;
  let u2 = 0;
  let tmp = 0;

  if (arr.length == 1) {
    let y = 2 * u1 + 1;
    arr.push(y);
    let z = 3 * u1 + 1;
    arr.push(z);

    u1 = y;
    u2 = z;
  }

  while (arr.length < n) {
    y = 2 * u1 + 1;
    arr.push(y);
    z = 3 * u1 + 1;
    arr.push(z);

    y = 2 * u2 + 1;
    arr.push(y);
    z = 3 * u2 + 1;
    arr.push(z);

    u1 = y;
    u2 = z;
  }

  console.log(arr);
  return arr[n];
}

console.log(dblLinear(10));

// u = [1, 3, 4, 7, 9, 10, 13, 15, 19, 21, 22, 27, ...]
// Twice linear