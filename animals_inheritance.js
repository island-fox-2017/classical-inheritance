"use strict"

class Animal {
  constructor() {
    this.num_legs = 2;
    this.is_warm_blooded = false;
    this.superPower = new SuperPower();
  }
}

class Monkey extends Animal {
  constructor() {
    super();
    this.is_warm_blooded = true;
  }
}

class Horse extends Animal {
  constructor() {
    super();
    this.num_legs = 4;
  }
}

class SuperPower {
  constructor() {

  }

  use_StunEnemy() {
    console.log("Sent barrage of stunning pikes!");
  }

  use_KagebunshinNoJutsu() {
    console.log("Multiply itself!");
  }
}

// Test-case 1
let pony = new Horse();
let caesar = new Monkey();
console.log(`The Horse is Warm Blooded? ${pony.is_warm_blooded}`);
console.log(`The Monkey is Warm Blooded? ${caesar.is_warm_blooded}`);
console.log();

// Test-case 2
pony.superPower.use_KagebunshinNoJutsu();
caesar.superPower.use_StunEnemy();
