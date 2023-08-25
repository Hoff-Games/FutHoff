/* eslint-disable no-undef */
export default class cena0 extends Phaser.Scene {
  constructor () {
    super('cena0')
  }

  preload() {
    this.load.image('abertura', '../assets/abertura.png')
  }

  create() { 
    this.imagem = this.add
      .image(400, 225, 'abertura')
      .setInteractive()
      .on('pointerdown', () => {
        this.game.scene.stop ('cena0')
        this.game.scene.start('cena1')
      })
   
  }

  update() {

  }
}