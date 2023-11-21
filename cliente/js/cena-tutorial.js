export default class cena4 extends Phaser.Scene {
  constructor () {
    super('cena-tutorial')
  }

  preload () {
    this.load.image('tutorial', '../assets/cenas/tutorial.png')
    this.load.image('seta', '../assets/fases/seta.png')
  }

  create () {
    this.add.image(400, 225, 'tutorial')
    this.seta = this.add.image(750, 430, 'seta', 0)
      .setInteractive()
      .on('pointerdown', () => {
        this.game.scene.stop('cena-tutorial')
        this.game.scene.start('cena1')
      })
  }

  update () {

  }
}