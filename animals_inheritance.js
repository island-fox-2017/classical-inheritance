"use strict"

class Animal{
  constructor(leg, status){
    this._numLegs = leg;
    this._isWarmedBlood = status;
  }
}

class Frog extends Animal{
  constructor(leg, status){
    super(leg, status);
  }
}

class Bat extends Animal{
  constructor(leg, status){
    super(leg, status);
}
}

class Chimpanzee extends Animal{
  constructor(leg, status){
    super(leg, status);
}
}

class Fox extends Animal{
  constructor(leg, status){
    super(leg, status);
}
}

class Chicken extends Animal{
  constructor(leg, status){
    super(leg, status);
    this.skill = new SuperPower('Chicken');
}
}

class SuperPower{
  constructor(name){
    this.name = name;
  }

  use_laser(){
      return `${this.name} use laser`;
  }

  use_invisibility(){
    return 'use menghilang';
  }

}

var ayam = new Chicken(2, true);
console.log(ayam.skill.use_laser());
