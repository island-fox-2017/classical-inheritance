"use strict"

class Animal {
  constructor(num_legs = 2, is_warm_blooded = true) {
    this.num_legs = num_legs;
    this.is_warm_blooded = is_warm_blooded;
  }
}

class SuperPower {
  constructor() {    
  }
  
  use_laser_vision() {
    console.log(`Laser : ->->->->->->->->->->->`);
  }
  
  be_invisible() {
    console.log(`Shadow Blade : ~~~~~~~~~~~~~~~~`);
  }
}

class Frog extends Animal  {
  constructor(num_legs = 4, is_warm_blooded) {
    super(num_legs, is_warm_blooded);
    this.SuperPower = new SuperPower;
  }
}

class Bat extends Animal {
  constructor(num_legs, is_warm_blooded) {
    super(num_legs, is_warm_blooded)
    this.SuperPower = new SuperPower;    
  }
}

class Chimpanzee extends Animal {
  constructor(num_legs = 4, is_warm_blooded) {
    super(num_legs, is_warm_blooded);
    this.SuperPower = new SuperPower;
  }
}

class Fox extends Animal {
  constructor(num_legs = 4, is_warm_blooded) {
    super(num_legs, is_warm_blooded);
    this.SuperPower = new SuperPower;
  }
}

class Chicken extends Animal {
  constructor(num_legs = 4, is_warm_blooded = false) {
    super(num_legs, is_warm_blooded);
    this.SuperPower = new SuperPower;
  }
}

let bird = new Animal();
console.log(`Kaki burung ada : ${bird.num_legs}`);
console.log(`Apakah berdarah panas : ${bird.is_warm_blooded}`);
console.log(`+++++`);

let bangkong = new Frog();
console.log(`Kaki bangkong ada : ${bangkong.num_legs}`);
console.log(`Apakah berdarah panas : ${bangkong.is_warm_blooded}`);
bangkong.SuperPower.use_laser_vision();
bangkong.SuperPower.be_invisible();
console.log(`+++++`);

let batman = new Bat();
console.log(`Kaki batman ada : ${batman.num_legs}`);
console.log(`Apakah berdarah panas : ${batman.is_warm_blooded}`);
batman.SuperPower.use_laser_vision();
batman.SuperPower.be_invisible();
console.log(`+++++`);

let lempiau = new Chimpanzee();
console.log(`Kaki lempiau ada : ${lempiau.num_legs}`);
console.log(`Apakah berdarah panas : ${lempiau.is_warm_blooded}`);
lempiau.SuperPower.use_laser_vision();
lempiau.SuperPower.be_invisible();
console.log(`+++++`);

let ganteng2serigala = new Fox();
console.log(`Kaki ganteng2serigala ada : ${ganteng2serigala.num_legs}`);
console.log(`Apakah berdarah panas : ${ganteng2serigala.is_warm_blooded}`);
ganteng2serigala.SuperPower.use_laser_vision();
ganteng2serigala.SuperPower.be_invisible();
console.log(`+++++`);

let katai = new Chicken();
console.log(`Kaki katai ada : ${katai.num_legs}`);
console.log(`Apakah berdarah panas : ${katai.is_warm_blooded}`);
katai.SuperPower.use_laser_vision();
katai.SuperPower.be_invisible();
console.log(`+++++`);