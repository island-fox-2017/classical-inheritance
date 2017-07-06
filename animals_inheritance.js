"use strict"
class Animal {
  constructor(num_legs, is_warm_blooded, food) {
    this.num_legs = num_legs
    this.is_warm_blooded = is_warm_blooded
    this.food = food
  }
}

class Frog extends Animal {
  constructor(num_legs, is_warm_blooded, food){
    super(num_legs, is_warm_blooded,food)
    this.Ulti = new Ulti()
  }
}

class Ulti {
  constructor() {}
  use_laser_vision() {
    return "im using dagon"
  }
  use_invisible() {
    return "im using shadow blade"
  }
}

let kodok = new Frog (4,"warm blood","bug")

console.log(kodok.Ulti.use_laser_vision());
