"use strict"
class Binatang{
  constructor(namaBinatang,alatGerak,alatBernafas){
    this._nama = namaBinatang;
    this._alatGerak = alatGerak;
    this._alatBernafas = alatBernafas;
  }

  Bergerak(){
    return console.log(this._nama + " sedang berjalan ");
  }
}
//
// let kambing = new Binatang("saya","herbivora")
// kambing.Bergerak();

class Superpower {
  constructor() {

  }
  use_laser_vision() {
    return `Blast laser vision!`;
  }
}

class Kambing extends Binatang{
  constructor(namaBinatang,alatGerak,alatBernafas,jumlahTanduk) {
    super(namaBinatang,alatGerak,alatBernafas)
    this._jumlahTanduk = jumlahTanduk;

  }
  bersuara(suara) {
    this._suara = suara;
    return console.log(`Nama Kambing nya ${this._nama} Jumlah Tanduk ${this._jumlahTanduk} suaranya ${this._suara}` );
  }
}


class Kucing extends Binatang{
  constructor(namaBinatang,alatGerak,alatBernafas,jenisKucing){
    super(namaBinatang,alatGerak,alatBernafas)
    this._jenisKucing = jenisKucing;
    this._superPower = new Superpower();
  }


  meloncat(){
    return console.log(`Nama Kucing nya ${this._nama} jenis kucing nya ${this._jenisKucing} punya skill ${this._superPower.use_laser_vision()} `);
  }
}

var domba = new Kambing("embek","kaki","Paru-Paru", 2)
domba.bersuara('embeeeek')

var kucing = new Kucing("caty","kaki","Paru-Paru","Anggora")
kucing.meloncat()
