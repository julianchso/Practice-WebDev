// // TODO: define the Dog class here

// class Dog {
//   constructor(name, breed, size) {
//     this.name = name;
//     this.breed = breed;
//     this.size = size;
//   }

//   bark() {
//     if (this.size > 60) {
//       return "Grrr! Grrr!";
//     } else {
//       return "Woof! Woof!";
//     }
//   }
// }

// const fang = new Dog("Fang", "boarhound", 75);
// console.log(`${fang.name} is a ${fang.breed} dog measuring ${fang.size}`);
// console.log(`Look, a cat! ${fang.name} barks: ${fang.bark()}`);

// const snowy = new Dog("Snowy", "terrier", 22);
// console.log(`${snowy.name} is a ${snowy.breed} dog measuring ${snowy.size}`);
// console.log(`Look, a cat! ${snowy.name} barks: ${snowy.bark()}`);

// Improve the example RPG to add character inventory management according to the following rules:
// A character's inventory contains a number of gold and a number of keys.
// Each character begins with 10 gold and 1 key.
// The character description must show the inventory state.
// When a character slays another character, the victim's inventory goes to its vanquisher.

class Character {
  constructor(name, health, strength, inventory) {
    this.name = name;
    this.health = health;
    this.strength = strength;
    this.xp = 0;
    this.inventory = {
      gold: 10,
      key: 1,
    };
  }

  attack(target) {
    if (this.health > 0) {
      const damage = this.strength;
      console.log(`${this.name} attacks ${target.name} for ${damage} damage.`);

      target.health -= damage;
      if (target.health > 0) {
        console.log(`${target.name} now has ${target.health} hp left.`);
      } else {
        target.health = 0;
        const bonusXP = 10;
        console.log(`${this.name} has killed ${target.name}.`);
        this.xp += 10;

        Object.keys(target.inventory).forEach((key) => {
          if (key in this.inventory) {
            this.inventory[key] += target.inventory[key];
          }
        });
      }
    } else {
      console.log(`${this.name} cannot attack because they've been killed.`);
    }
  }

  describe() {
    return `${this.name} has ${this.health} health points, ${this.strength} strength,
    ${this.xp} xp, and inventory containing ${this.inventory.gold} gold and ${this.inventory.key} key(s)`;
  }
}

const aurora = new Character("Aurora", 150, 25, 0);
const glacius = new Character("Glacius", 130, 30, 0);

console.log("Welcome to the adventure! Here are our heroes:");
console.log(aurora.describe());
console.log(glacius.describe());

const monster = new Character("Spike", 40, 20);
console.log("A wild monster has appeared: it's named " + monster.name);

monster.attack(aurora);
monster.attack(glacius);
aurora.attack(monster);
glacius.attack(monster);

console.log(aurora.describe());
console.log(glacius.describe());
