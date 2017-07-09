"use strict"

class Hewan{
  constructor(bergerak, bernapas) {
    this.gerak = bergerak;
    this.napas = bernapas;
  }
}

class Ayam extends Hewan {
  constructor(bergerak, bernapas, berparuh) {
  super(bergerak, bernapas)
    this.makan = berparuh
  }
}

class kucing extends Hewan {
  constructor(bergerak, bernapas, bergigi) {
  super(bergerak, bernapas)
    this.gigi = bergigi
  }
}

let kucingh = new Hewan ("pake kaki","pake paru-paru")

console.log(sapi.gerak);
console.log(sapi.napas);
