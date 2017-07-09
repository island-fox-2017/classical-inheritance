'use strict'

class Animal {
  constructor(bergerak, jumlah_kaki, bernafas) {
    this.gerak = bergerak
    this.num_kaki = jumlah_kaki || 4
    this.nafas = bernafas
  }
}

class Kijang extends Animal {
  constructor(bergerak, jumlah_kaki, bernafas, bertanduk) {
    super(bergerak, jumlah_kaki, bernafas)
    this.tanduk = bertanduk
    this.superPower = new SuperPower()
  }
  detailKijang() {
    return `Kijang bergerak dengan ${this.gerak}, jumlah kaki ${this.num_kaki}, bernafas dengan ${this.nafas}, bertanduk ${this.tanduk}, dan mempunyai ${this.superPower.kijang_power()}`
  }
}

class Burung extends Animal {
  constructor(bergerak, jumlah_kaki, bernafas, berparuh) {
    super(bergerak, jumlah_kaki, bernafas)
    this.paruh = berparuh
    this.superPower = new SuperPower()
  }
  detailBurung() {
    return `Burung elang bergerak dengan ${this.gerak}, jumlah kaki ${this.num_kaki}, bernafas dengan ${this.nafas}, berparuh ${this.paruh} dan mempunyai ${this.superPower.burung_power()} `
  }
}

class SuperPower {
  constructor () {
  }
  kijang_power() {
    return 'kepala keras'
  }
  burung_power() {
    return 'kecepatan terbang'
  }
}

let kijang = new Kijang('berjalan', '', 'paru-paru', 'kuat');
let burung = new Burung('terbang', '2', 'paru-paru', 'tajam' )

console.log(kijang.detailKijang());
console.log(burung.detailBurung());
