"use strict"

class Animals {
  constructor(is_mammals, num_legs = 2, is_warm_blooded, sound) {
    this.is_mammals = is_mammals;
    this.num_legs = num_legs;
    this.is_warm_blooded = is_warm_blooded;
    this.sound = sound;
  }
}

class Frog extends Animals {
  constructor(is_mammals, num_legs, is_warm_blooded, sound, jump_ability) {
    super(is_mammals, num_legs, is_warm_blooded, sound);
    this.jump_ability = jump_ability;
    this.superb = new SuperPower();
  }
}

class Bat extends Animals {
  constructor(is_mammals, num_legs, is_warm_blooded, sound, fly_ability) {
    super(is_mammals, num_legs, is_warm_blooded, sound);
    this.fly_ability = fly_ability;
    this.superb = new SuperPower();
  }
}

class Chicken extends Animals {
  constructor(is_mammals, num_legs, is_warm_blooded, sound, running) {
    super(is_mammals, num_legs, is_warm_blooded, sound);
    this.running = running;
    this.superb = new SuperPower();
  }
}

class Fox extends Animals {
  constructor(is_mammals, num_legs, is_warm_blooded, sound, hunting) {
    super(is_mammals, num_legs, is_warm_blooded, sound);
    this.hunting = hunting;
    this.superb = new SuperPower();
  }
}

class Chimpanzee extends Animals {
  constructor(is_mammals, num_legs, is_warm_blooded, sound, thinking) {
    super(is_mammals, num_legs, is_warm_blooded, sound);
    this.thinking = thinking;
    this.superb = new SuperPower();
  }
}

class SuperPower {
  constructor() {}
  use_laser_vision() {
    return `have upgrade its eyes and have super power vision`;
  }
  be_invisible(x) {
    return `got ${x} item and makes it's body invisible`;
  }
}

let animals = new Animals();
let frog = new Frog(false, 4, false, 'krook', 'yes I can jump')
let bat = new Bat(false, 2, false, 'bipbip', true);
let chicken = new Chicken(true, 5);
let fox = new Fox(true, 4, true, 'woofff')
let chimpanzee = new Chimpanzee(true, 2, true, 'wakwak')

console.log(frog.is_mammals);
console.log(frog.num_legs);
console.log(frog.jump_ability);
console.log(chicken.is_mammals);
console.log(chicken.num_legs);
console.log(`Chimpanzee have ${chimpanzee.num_legs} legs`);

console.log('Frog ' + frog.superb.be_invisible('WHITE HEART'));
console.log(`Chimpanzee ${chimpanzee.superb.use_laser_vision()}`);