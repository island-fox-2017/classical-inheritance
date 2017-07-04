"use strict"
class Animal {
  constructor () {
    this.size = 'small'
  }
  habitat(input) {
    console.log (`This animal live in ${input}`)
  }
}

class Frog extends Animal{
  constructor (num_legs) {
    super();
    this.numLegs = num_legs
    this.power = new SuperPower ()
  }
}

class Bat extends Animal{
  constructor (num_legs, have_wings) {
    super();
    this.numLegs = num_legs
    this.wings = have_wings
    this.power = new SuperPower ()
  }
}

class Fox extends Animal{
  constructor (size, num_legs, predator) {
    super();
    this.size = size
    this.numLegs = num_legs
    this.predator = predator
    this.power = new SuperPower
  }
}

class SuperPower {
  constructor() {

  }
  user_laser_vision() {
    console.log('full power of laser vision in newmoon')
  }
  be_invisible() {
    console.log('you can not see me')
  }
}

let frog_1 = new Frog (4)
let bat_1 = new Bat (4, 'has wings')
let fox_1 = new Fox ('medium',4, true)
console.log(frog_1);
console.log(bat_1);
console.log(fox_1);
bat_1.habitat('air');
fox_1.power.user_laser_vision();
