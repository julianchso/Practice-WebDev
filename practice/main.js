// function Calculator() {
//   this.read = function () {
//     this.firstValue = Number(prompt("Please enter the first value"));
//     this.secondValue = Number(prompt("Please enter the second value"));
//   };

//   this.sum = function () {
//     return this.firstValue + this.secondValue;
//   };

//   this.mul = function () {
//     return this.firstValue * this.secondValue;
//   };
// }

// let calculator = new Calculator();
// calculator.read();

// console.log("Sum=" + calculator.sum());
// console.log("Mul=" + calculator.mul());

// function Accumulator(startingValue) {
//   this.value = startingValue;
//   this.read = function () {
//     this.value += Number(prompt("Number?"));
//   };

//   return this.value;
// }

// let accumulator = new Accumulator(1); // initial value 1

// accumulator.read(); // adds the user-entered value
// accumulator.read(); // adds the user-entered value

// console.log(accumulator.value);
