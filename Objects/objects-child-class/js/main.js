//Create an a class and extend it - Can be anything you would like it to be!

class fighter {
  constructor(name, universe, powerLevel) {
    this.name = name;
    this.universe = universe;
    this.powerLevel = powerLevel;
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
