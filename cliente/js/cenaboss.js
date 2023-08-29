export default class cenaboss extends Phaser.Scene {
  constructor () {
    super('cenaboss')
  }

  preload() {
    this.load.image('cenaboss', '../assets/cenaboss.png')
  }

  create() {
    this.add.image(400, 225, 'cenaboss')
  }

  update() {

  }
}
