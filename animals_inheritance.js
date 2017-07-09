"use strict"

class Animals {
  constructor(type, num_legs, is_warm_blooded) {
    this._type = type;
    this.jumlahKaki = num_legs || 4;
    this.suhuDarah = is_warm_blooded;
  }

  get type() {
    return this._type;
  }

  get num_legs() {
    return this.jumlahKaki;
  }
} //class Animals

class SuperPower {
  constructor() {
  }

  use_laser_vision() {
    return `Laser blaster!`;
  }

  be_invisible() {
    return `Poof!`;
  }
}

//Lion class
class Lion extends Animals {
  constructor(type, num_legs, is_warm_blooded, name, food) {
    super(type, num_legs, is_warm_blooded);
    this.name = name;
    this.food = food;
    this.superpower = new SuperPower();
  }

  greetings() {
    if (this.suhuDarah === true) {
      return `Hello, introducing ${this.name}, it is a ${this.type}, it has ${this.jumlahKaki} legs and it is warm blooded.`;
    } else {
      return `Hello, introducing ${this.name}, it is a ${this.type}, it has ${this.jumlahKaki} legs and it is cold blooded.`;
    }
  }

  itsFood() {
    return `It ate ${this.food} as its favorite meal everyday!`;
  }

} //Lion class

//Bat class
class Bat extends Animals {
  constructor(type, num_legs, is_warm_blooded, name, food, vision) {
    super(type, num_legs, is_warm_blooded);
    this.name = name;
    this.food = food;
    this.vision = vision;
    this.superpower = new SuperPower();
  }

  greetings() {
    if (this.suhuDarah === true) {
      return `Hello, introducing ${this.name}, it is a ${this.type}, it has ${this.jumlahKaki} legs and it is warm blooded.`;
    } else {
      return `Hello, introducing ${this.name}, it is a ${this.type}, it has ${this.jumlahKaki} legs and it is cold blooded.`;
    }
  }

  itsFood() {
    return `It ate ${this.food} as its favorite meal everyday!`;
  }

  itsVision() {
    return `${this.name} the ${this.type} sees with ${this.vision} as its daily driver`;
  }

  ask() {
    return `Do you know about ${this.vision}? It's pretty cool actually!`;
  }

} //Bat class

let lion = new Lion('lion', 2, true, 'Cecil', 'meat');
let bat = new Bat('Bat', 2, false, 'Mathew', 'fruits', 'echolocations')

console.log('---About the Lion---');
console.log(lion.greetings());
console.log(lion.itsFood());
console.log('\n');

console.log('---About the Bat---');
console.log(bat.greetings());
console.log(bat.itsFood());
console.log(bat.itsVision());
console.log(bat.ask());
console.log('\n');

console.log('---superpower---');
console.log(bat.superpower.use_laser_vision());
