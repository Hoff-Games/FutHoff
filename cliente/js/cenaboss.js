export default class cenaboss extends Phaser.Scene {
  constructor () {
    super('cenaboss')
  }

  preload() {
    this.load.image('cenabossmulti', '../assets/cenabossmulti.png')
  }

  create() {
    this.add.image(400, 225, 'cenabossmulti')
  }

  update() {

  }
}
