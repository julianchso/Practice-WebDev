// let calculator = {
//   // value1: null,
//   // value2: null,
//   read: function() {
//     this.value1 = Number(prompt("Enter the first value", 0)),
//     this.value2 = Number(prompt("Enter the second value", 0))
//   },

//   sum: function() {
//     return this.value1 + this.value2;
//   },

//   mul: function() {
//     return this.value1 * this.value2;
//   }
// };

// calculator.read();
// console.log(calculator.sum());
// console.log(calculator.mul());

const ladder = {
  step: 0,
  up: function () {
    this.step++;
    return this;
  },

  down: function () {
    this.step--;
    return this;
  },

  showStep: function () {
    // shows the current step
    console.log(this.step);
    return this;
  },
};

ladder.showStep();
ladder.up().up().down().showStep();
