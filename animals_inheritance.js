"use strict"
class Binatang{
  constructor(namaBinatang,alatGerak,alatBernafas,jumlahKaki){
    this._nama = namaBinatang;
    this._alatGerak = alatGerak;
    this._alatBernafas = alatBernafas;
    this._jumlahKaki = jumlahKaki || 4;
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
  constructor(namaBinatang,alatGerak,alatBernafas,jumlahKaki,jumlahTanduk) {
    super(namaBinatang,alatGerak,alatBernafas,jumlahKaki)
    this._jumlahTanduk = jumlahTanduk;
    //this.jumlahKaki = 2;
  }
  bersuara(suara) {
    this._suara = suara;
    return console.log(`Nama Kambing nya ${this._nama} Jumlah Tanduk ${this._jumlahTanduk} suaranya ${this._suara} jumlah kaki nya ${this._jumlahKaki}` );
  }
}


class Kucing extends Binatang{
  constructor(namaBinatang,alatGerak,alatBernafas,jumlahKaki,jenisKucing){
    super(namaBinatang,alatGerak,alatBernafas,jumlahKaki)
    this._jenisKucing = jenisKucing;
    this._superPower = new Superpower();
  }


  meloncat(){
    return console.log(`Nama Kucing nya ${this._nama} jenis kucing nya ${this._jenisKucing} punya skill ${this._superPower.use_laser_vision()} jumlah kaki nya ${this._jumlahKaki}`);
  }
}

var domba = new Kambing("embek","kaki","Paru-Paru",'',2)
domba.bersuara('embeeeek')

var kucing = new Kucing("caty","kaki","Paru-Paru","3","Anggora")
kucing.meloncat()

//console.log(kucing.Superpower.use_laser_vision);
