"use strict"

class Animal{
  constructor(species, clasified, num_legs, is_warm_blood){
    this._species = species;
    this._num_legs = num_legs;
    this._is_warm_blood = this.blood(is_warm_blood);
    this._classified = clasified;
  }
  
  get num_legs(){
      return this._num_legs;
  }
  
  get clasified(){
    return this._classified;
  }
  get is_warm_blood(){
    return this._is_warm_blood;
  }
  
  move(how_to_move){
    if (this.num_legs == 0 ){
    console.log(`${this._species} adalah jenis ${this._classified} yang tidak berkaki. ${this._is_warm_blood} dan bergerak dengan ${how_to_move}`)
  }else {
    console.log(`${this._species} adalah jenis ${this._classified} yang berkaki ${this.num_legs}. ${this._is_warm_blood} dan bergerak dengan ${how_to_move}`)
  }
  }
  
  blood(darah){
    if (darah){
      return `${this._species} merupakan hewan berdarah panas`
    }else{
      return  `${this._species} merupakan hewan berdarah dingin`
    }
  }
}

class SuperPower{  
  use_laser_vision(){
    return `Serang musuh!!`
  }
  
  be_invisible(){
    return `sembunyi dari musuh`
  }
}

class Cow extends Animal{
  constructor(species, clasified, num_legs, is_warm_blood,kekuatanSuper){
    super(species, clasified, num_legs, is_warm_blood);
    this.kekuatanSuper = new SuperPower()
  }
  
  // move(how_to_move){
  //   console.log(`${this._species} adalah hewan jenis ${this._classified} yang berkaki ${this.num_legs} dan ${this._is_warm_blood} dan bergerak dengan ${how_to_move}`)
  // }
  
}

class Snake extends Animal{
  constructor(clasified, num_legs, is_warm_blood){
    super(clasified, num_legs, is_warm_blood);
    this.kekuatanSuper = new SuperPower()
  }
  
  // move(how_to_move){
  //   console.log(`${this._species} adalah hewan jenis ${this._classified} yang berkaki ${this.num_legs} dan ${this._is_warm_blood} dan bergerak dengan ${how_to_move}`)
  }

class Bat extends Animal {
  constructor(clasified, num_legs, is_warm_blood, kekuatanSuper) {
    super(clasified, num_legs, is_warm_blood);
    this.kekuatanSuper = new SuperPower()
  }
  // move(how_to_move){
  //   console.log(`${this._species} adalah hewan jenis ${this._classified} yang berkaki ${this.num_legs} dan ${this._is_warm_blood} dan bergerak dengan ${how_to_move}`)
  // }
}


let animalNew = new Animal('Kodok','amphibi','6',false)
let sapiAustralia = new Cow('Sapi Australia','Mamalia', 4, true, 'rumput')
let megabat = new Bat('Megabat','Mamalia', 4, true, 'buah-buahan' )
let snake = new Snake ('Ular Kadut', 'reptilia', 0, false, 'tikus' )

console.log(animalNew.move('loncat'));
sapiAustralia.move('berjalan');
snake.move('melata')
console.log(megabat.blood(true));
console.log(megabat.kekuatanSuper.use_laser_vision())
