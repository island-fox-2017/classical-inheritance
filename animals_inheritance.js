"use strict"

class Hewan{
  constructor(bergerak, jumlah_kaki, bernapas) {
    this.gerak = bergerak;
    this.num_kaki = jumlah_kaki || 4
    this.napas = bernapas;
  }
}

class SuperPower {
  constructor() {

  }
  use_laser() {
    return 'jalu tajam';
  }
  kucing_power() {
    return 'cakar kuat'
  }
}


class Ayam extends Hewan {
  constructor(bergerak, jumlah_kaki, bernapas, berparuh) {
  super(bergerak, jumlah_kaki, bernapas)
    this.paruh = berparuh
    this.superPower = new SuperPower()
  }
  detailAyam() {
    return `Ayam jago bergerak dengan ${this.gerak}, dan mempunyai ${this.num_kaki} kaki, berparuh ${this.paruh}, dan memiliki kekuatan ${this.superPower.use_laser()}`;
  }
}

class Kucing extends Hewan {
  constructor(bergerak, jumlah_kaki, bernapas, bergigi) {
  super(bergerak, jumlah_kaki, bernapas)
    this.gigi = bergigi
    this.superPower = new SuperPower()
  }
  detailKucing() {
    return `Kucing bergerak dengan ${this.gerak}, dan mempunyai ${this.num_kaki} kaki, bernapas dengan${this.napas}, memiliki gigi ${this.gigi}, dan mempunyai ${this.superPower.kucing_power()} `;
  }
}


let kucing = new Kucing('kaki', '', 'paru-paru', 'tajam')
let ayam = new Ayam('kaki', '2','paru-paru', 'pendek')


console.log(ayam.detailAyam())
console.log(kucing.detailKucing());
