// Come up with with a parent class
// Extend that parent class into two children
// Use Encapsulation, Abstraction, Inheritance, and Polymorphism

class Contractor {
  constructor(name, role) {
    this._name = name;
    this._role = role;
  }

  get name() {
    return this._name;
  }

  get role() {
    return this._role;
  }

  sayHello() {
    console.log(`Hello, I am on the ${this._role} team at #100 Devs!`);
  }
}

class Front extends Contractor {
  constructor(name, role, tech) {
    super(name, role);
    this._tech = tech;
  }
  get tech() {
    return this._tech;
  }
  sayHello() {
    console.log(
      `Hello, I am on the ${this._role} team at #100Devs and I use ${this._tech}!`
    );
  }
}

class Back extends Contractor {
  constructor(name, role, tech) {
    super(name, role);
    this._tech = tech;
  }
  get tech() {
    return this._tech;
  }
  sayHello() {
    console.log(`Hello, I am on the ${this._role} team at #100Devs and I use ${this._tech}!`)
  }
}

let bob = new Contractor("Bob", "Front-end");
let carl = new Front("Carl", "Front-end", "react.js");
let david = new Back("David", "Back", "Node")

let developers = [bob, carl, david]

for (developer of developers) {
  developer.sayHello()
}