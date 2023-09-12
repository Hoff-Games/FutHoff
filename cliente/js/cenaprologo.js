export default class cena0 extends Phaser.Scene {
  constructor () {
    super('cenaprologo')
  }

  preload() { 
    /*imagem de fundo*/
    this.load.image('cenaprologo', '../assets/cenas/cenaprologo.png')

  }

  create() {
    this.add.image(400, 225, 'cenaprologo')

  }

  update() {

  }
}
