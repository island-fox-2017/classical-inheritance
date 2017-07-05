"use strict"
class Animals {
  constructor (jumlahKaki , is_warm_blooded ,food, is_mamals){
    this.jumlahKaki = jumlahKaki
    this.is_warm_blooded = is_warm_blooded
    this.food = food
    this.is_mamals = is_mamals
  }
}

class Frog extends Animals{
  constructor (jumlahKaki , is_warm_blooded ,food, is_mamals ){
    super(jumlahKaki , is_warm_blooded ,food, is_mamals)
    this.superPower = new SuperPower ();
  }
}

class Bat extends Animals {
  constructor (jumlahKaki , is_warm_blooded ,food, is_mamals ){
    super(jumlahKaki , is_warm_blooded ,food, is_mamals)
    this.superPower = new SuperPower ();
  }
}

class Chimpanzee extends Animals {
  constructor (jumlahKaki , is_warm_blooded ,food, is_mamals ){
    super(jumlahKaki , is_warm_blooded ,food, is_mamals)
    this.superPower = new SuperPower ();
  }
}
class Fox extends Animals {
  constructor (jumlahKaki , is_warm_blooded ,food, is_mamals ){
    super(jumlahKaki , is_warm_blooded ,food, is_mamals)
    this.superPower = new SuperPower ();
  }
}

class Chicken extends Animals {
  constructor (jumlahKaki , is_warm_blooded ,food, is_mamals ){
    super(jumlahKaki , is_warm_blooded ,food, is_mamals)
    this.superPower = new SuperPower();
  }
}
class SuperPower {
  constructor() {}
  use_laser_vision(){
    return 'Rasakan Laser besar ini'
  }
  be_invisible(){
    return 'Hayo saya dimana'
  }
}

let ayam = new Chicken (4,"Beradarah Panas" ,"serangga", "No");
// ayam.jumlahKaki = 5
console.log(ayam.jumlahKaki);
console.log(ayam.superPower.use_laser_vision());
