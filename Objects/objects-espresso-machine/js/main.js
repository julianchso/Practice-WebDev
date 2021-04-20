//Create an espresso machine constructor that makes machines with 4 properties and 3 methods

class EspressoMachine {
  constructor(colour, make, model, price) {
    this.colour = colour;
    this.make = make;
    this.model = model;
    this.price = price;
  }

  input() {
    console.log("press buttons");
  }

  steam() {
    console.log("steamy...");
  }

  start() {
    console.log("making drink");
  }
}

let gaggia = new EspressoMachine("red", "gaggia", "3000", 999);
