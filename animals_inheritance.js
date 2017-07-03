"use strict"

class Animal {
  constructor(num_legs=2, is_warm_blooded=true){
    this.num_legs = num_legs
    this.is_warm_blooded = is_warm_blooded
    this.superpower = new SuperPower() //mengakses ke dalam class
  }
}

class Chicken extends Animal {
  constructor(num_legs, is_warm_blooded){
    super(num_legs, is_warm_blooded)
  }
}

class Duck extends Animal {
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
    this.superpower = new SuperPower //composition
  }
}

class SuperPower{
  constructor(){
  }
  
  use_laser_vision(){
    return 'Sinar merah untuk menangkal musuh'
  }
  
  be_invisible(){
    return 'kekuatan menghilang'
  }
}


let animal1 = new Chicken(this.num_legs)
console.log(`Hewan Ayam berkaki ${animal1.num_legs}, berdarah panas? ${animal1.is_warm_blooded}`);
console.log('Ayam mendapat kekuatan', animal1.superpower.use_laser_vision());
console.log('\n');

let animal2 = new Duck(this.num_legs, false)
console.log(`Hewan Bebek berkaki ${animal2.num_legs}, berdarah panas? ${animal2.is_warm_blooded}`);
console.log('Bebek mendapat kekuatan', animal2.superpower.be_invisible());
console.log('\n');

let animal3 = new Cat(4)
console.log(`Hewan Kucing berkaki ${animal3.num_legs}, berdarah panas? ${animal3.is_warm_blooded}`);

let animal4 = new Dog(4, false)
console.log(`Hewan Anjing berkaki ${animal4.num_legs}, berdarah panas? ${animal4.is_warm_blooded}`);
