export default class cena4 extends Phaser.Scene {
  constructor () {
    super('cena')
  }

  preload() {
    this.load.image('pixil-frabeame-0', '../assets/pixil-frame-0.png')
  }

  create() {
    this.add.image(400, 225, 'pixil-frame-0')
  }

  update() {

  }
}
