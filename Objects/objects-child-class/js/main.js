//Create an a class and extend it - Can be anything you would like it to be!

class fighter {
  constructor(name, universe, powerLevel) {
    this._name = name;
    this.universe = universe;
    this.powerLevel = powerLevel;
  }
  get name() {
    // underscore means a variable is private. Do not change it.
    return this._name;
  }
}

class goku extends fighter {
  constructor(name, universe, powerLevel) {
    super(name, universe, powerLevel);
    this.specialAbilities = [];
  }

  addAbility(ability) {
    this.specialAbilities.push(ability);
  }
}

goku1 = new goku("goku", "dragonBall", "9000");

class Animal {
  constructor(name) {
    this._name = name;
  }
  get name() {
    return this._name;
  }
  speak() {
    console.log(`${this._name} makes a sound.`);
  }
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name);
    this._breed = breed;
  }
  get breed() {
    return this._breed;
  }
  speak() {
    super.speak()
    console.log(`${this._name} barks.`)
  }
}

let simba = new Dog("Simba","Shiba Inu");
