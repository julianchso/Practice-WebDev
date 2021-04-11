//Create a stopwatch object that has four properties and three methods

let stopwatch = {};

stopwatch.size = "large";
stopwatch.colour = "black";
stopwatch.brand = "adidas";

stopwatch.sayBrand = function () {
  console.log(`The brand is ${stopwatch.brand}`);
};
