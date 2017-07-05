"use strict"

class Animals {
  constructor(jenis, num_legs, is_warm_blooded) {
    this.jenis = jenis;
    this.num_legs = num_legs;
    this.is_warm_blooded = is_warm_blooded;
  }
}

class Frog extends Animals {
  constructor(jenis, num_legs, is_warm_blooded,lompat) {
    super(jenis, num_legs, is_warm_blooded);
    this.lompat = lompat;
    this.super = new SuperPower();
  }
}

class Bat extends Animals {
  constructor(jenis, num_legs, is_warm_blooded, terbang) {
    super(jenis, num_legs, is_warm_blooded);
    this.terbang = terbang;
    this.super = new SuperPower();
  }
}

class Tiger extends Animals {
  constructor(jenis, num_legs, is_warm_blooded, berburu) {
    super(jenis, num_legs, is_warm_blooded);
    this.berburu = berburu;
    this.super = new SuperPower();
  }
}

class Ubur_ubur extends Animals {
  constructor(jenis, num_legs, is_warm_blooded, sengatan) {
    super(jenis, num_legs, is_warm_blooded);
    this.sengatan = sengatan;
    this.super = new SuperPower();
  }
}

class Chimpanzee extends Animals {
  constructor(jenis, num_legs, is_warm_blooded, pintar) {
    super(jenis,num_legs, is_warm_blooded);
    this.pintar = pintar;
    this.super = new SuperPower();
  }
}

class SuperPower {
  constructor() {}
  use_laser_vision() {
    return 'Mempunyai pandangan sinar laser';
  }
  be_invisible() {
    return 'badan yang tembus pandang';
  }
}

let frog1 = new Frog('Kodok Ijo', 4, false, 'Melompat');
console.log(`${frog1.jenis} mempunyai ${frog1.num_legs} Kaki`);
console.log(`Apakah ${frog1.jenis} itu berdarah panas? ${frog1.is_warm_blooded}`);
console.log(`${frog1.jenis} berjalan dengan ${frog1.lompat}`);
console.log('==================================================================');
let bat1 = new Bat('Kalong', 2, false, 'terbang');
console.log(`${bat1.jenis} mempunyai ${bat1.num_legs} Kaki`);
console.log(`Apakah ${bat1.jenis} itu berdarah panas? ${bat1.is_warm_blooded}`);
console.log(`${bat1.jenis} dapat ${bat1.terbang}`);
console.log('==================================================================');
let tiger1 = new Tiger('Macan Kumbang', 4, true, 'Berburu')
console.log(`${tiger1.jenis} mempunyai ${tiger1.num_legs} Kaki`);
console.log(`Apakah ${tiger1.jenis} itu berdarah panas? ${tiger1.is_warm_blooded}`);
console.log(`${tiger1.jenis} jago ${tiger1.berburu}`);
console.log('==================================================================');
let uburUbur1 = new Ubur_ubur('Ubur-Ubur Bulan', 'tentakel', false, 'sengatan yang beracun')
console.log(`${uburUbur1.jenis} mempunyai ${uburUbur1.num_legs}`);
console.log(`Apakah ${uburUbur1.jenis} itu berdarah panas? ${uburUbur1.is_warm_blooded}`);
console.log(`${uburUbur1.jenis} mempunyai ${uburUbur1.sengatan}`);
console.log('==================================================================');
let chimpanzee1 = new Chimpanzee('Bonobo', 2, true, 'Pintar')
console.log(`${chimpanzee1.jenis} mempunyai ${chimpanzee1.num_legs} Kaki`);
console.log(`Apakah ${chimpanzee1.jenis} itu berdarah panas? ${chimpanzee1.is_warm_blooded}`);
console.log(`${chimpanzee1.jenis} mempunyai otak yang ${chimpanzee1.pintar}`);
console.log('==================================================================');

console.log(`${uburUbur1.jenis} mempunyai kemampuan super yaitu ${uburUbur1.super.be_invisible()}`);
console.log(`${bat1.jenis} mempunyai kemampuan super yaitu ${uburUbur1.super.use_laser_vision()}`);
// console.log('Frog ' + frog1.super.be_invisible('WHITE HEART'));
// console.log(`Chimpanzee ${chimpanzee.superb.use_laser_vision()}`);
