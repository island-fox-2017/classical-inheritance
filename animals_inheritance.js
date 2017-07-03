"use strict"

class Animal {
  constructor(name, legs, diet, types) {
    this.name = name;
    this._legs = legs;
    this._diet = diet;
    this._types = types;
  }

  get legs() {
    return this._legs;
  }

  get diet() {
    return this._diet;
  }

  get types() {
    return this._types;
  }


  characteristics () {
    if (this.types == 'mammals') {
      return '   - Covered by hair or fur \n   - Warm blooded \n   - Vertebratae \n   - Produce Milk\n';
    } else if (this.types == 'reptiles') {
      return '   - Covered by scales\n   - Cold-blooded\n   - Vertebratae\n   - Most lay hard-shelled eggs n land\n';
    } else if (this.types == 'birds') {
      return '   - Covered by feathers\n   - Warm blooded\n   - Vertebratae\n   - Laying eggs\n';
    } else if (this.types == 'insects') {
      return '   - Hexapod or Octapod (spiders)\n   - Facet eyed\n   - Small size\n   - Invertebratae\n';
    } else if (this.types == 'fish') {
      return '   - Most have gills\n   - Live in waters (found in lakes, river, and oceans\n';
    }
  }

  conclusions() {
    console.log(`${this.name} is a ${this.legs}-legged animal. It's a ${this.diet}, a ${this.types}, and have following characteristics:\n${this.characteristics()}`);
  }

} // ----- end of animal -----


class SuperPower {
  constructor(name) {
    this.name = name;
  }
  firaga() {
    return console.log(`${this.name} use Firaga, a fire-based attack.`);
  }

  aero() {
    return console.log(`${this.name} use Aero, a wind-based attack.`);
  }

  stone() {
    return console.log(`${this.name} use Stone, an earth-elemental attack.`);
  }
} // ----- end of SuperPower -----

class Fox extends Animal {
  constructor(name, legs, diet, types, power) {
    super(name, legs, diet, types);
    this.power = new SuperPower(name)
  }
}

class Turtle extends Animal {
  constructor(name, legs, diet, types, power) {
    super(name, legs, diet, types);
    this.power = new SuperPower(name)
  }
}

class Butterfly extends Animal {
  constructor(name, legs, diet, types, power) {
    super(name, legs, diet, types);
    this.power = new SuperPower(name)
  }
}


var rubah = new Fox('Rubah', 4, 'carnivore', 'mammals');
var kura = new Turtle('Kura-kura', 4, 'herbivore', 'reptiles');
var kupu = new Butterfly('Kupu-kupu', 6, 'herbivore', 'insects');


rubah.conclusions();
kura.conclusions();
kupu.conclusions();

rubah.power.firaga();
kura.power.stone();
kupu.power.aero();
