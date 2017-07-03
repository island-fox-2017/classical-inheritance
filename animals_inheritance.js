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
  constructor(kaki, makanan) {
    super(kaki);
    this.makanan = makanan;
    this.power = new Power(this.air);// composition
  }

  pelihara()
  {
    console.log((`Ayam adalah hewan berkaki ${this.kaki} yang makan ${this.makanan}` ));
  }

}

class Power {
  constructor(air) {
    this.air = air;

  }

  waterBender()
  {
    console.log(`Ayam ini memiliki kekuatan yang bisa mengendalikan ${this.air}` );
  }

}

var binatang = new Ayam(4, 'Beras');
var superPower = new Power('air');
binatang.warnaBulu('Hitam');
binatang.pelihara();
binatang.power.waterBender();
