export default class cena0 extends Phaser.Scene {
  constructor () {
    super('cenaprologo')
  }

  preload() { 
    /*imagem de fundo*/
    this.load.image('prologo', '../assets/prologo.png')

  }

  create() {
    this.add.image(400, 225, 'prologo')

  }

  update() {

  }
}
