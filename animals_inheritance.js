"use strict"

class Animal {
  constructor(num_legs=2, is_warm_blooded=true){
    this.num_legs = num_legs
    this.is_warm_blooded = is_warm_blooded
  }
}

class Chicken extends Animal {
  constructor(num_legs, is_warm_blooded){
    super(num_legs, is_warm_blooded)
  }
}

class Cat extends Animal {
  constructor(num_legs, is_warm_blooded){
    super(num_legs, is_warm_blooded)
  }
}

class Dog extends Animal {
  constructor(num_legs, is_warm_blooded){
    super(4, is_warm_blooded)
  }
}

let animal1 = new Chicken(this.num_legs)
console.log(`Hewan Ayam ${animal1.num_legs}, ${animal1.is_warm_blooded}`);

let animal2 = new Cat(4)
console.log(`Hewan Kucing ${animal2.num_legs}, ${animal2.is_warm_blooded}`);

let animal3 = new Dog(4, false)
console.log(`Hewan Anjing ${animal3.num_legs}, ${animal3.is_warm_blooded}`);
