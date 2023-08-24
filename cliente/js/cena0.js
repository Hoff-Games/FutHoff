/* eslint-disable no-undef */
export default class cena0 extends Phaser.Scene {
  constructor () {
    super('cena0')
  }

  preload () {
    this.load.image('abertura-1', '../assets/abertura-1.png')
    this.load.image('abertura-2', '../assets/abertura-2.png')
  }

  create () {
    this.add.image(600, 225, 'abertura-1')
    this.add.image(200, 225, 'abertura-2')
  }

  update () {

  }
}
