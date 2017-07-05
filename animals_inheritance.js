"use strict"

class Animal {
  constructor(kaki) {
    this.kaki = kaki;

  }

  get foot()
  {
    return this.kaki;
  }

  warnaBulu(color)
  {
    console.log(`Binatang ini memiliki ${this.kaki} kaki dan warna bulu ${color}`);
  }
}


class Ayam extends Animal {
  constructor(kaki, makanan, age) {
    super(kaki);
    this.makanan = makanan;
    this.power = new Power(age);// composition
  }

  pelihara()
  {
    console.log((`Ayam adalah hewan berkaki ${this.kaki} yang makan ${this.makanan}` ));
  }

}

class Power {
  constructor(age) {

    this.age = age;
  }

  waterBender(power)
  {
    console.log(`Ayam ini memiliki kekuatan yang bisa mengendalikan ${power} and age is ${this.age}` );
  }

}


//var power = new Power(age)

var binatang = new Ayam(4, 'Beras', 9);
binatang.warnaBulu('Hitam');
binatang.pelihara();
binatang.power.waterBender('air');
