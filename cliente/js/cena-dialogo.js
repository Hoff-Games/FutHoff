export default class cenadialogo extends Phaser.Scene {
  constructor () {
    super('cena-dialogo')
  }

  preload () {
    this.load.spritesheet('dialogo', '../assets/cenas/dialogo.png', {
      frameWidth: 800,
      frameHeight: 450
    })
  }

  create () {
    this.image = this.add
      .sprite(400, 225, 'dialogo')
      .setInteractive()
      .on('pointerdown', () => {
        this.image.setFrame(this.image.frame.name + 1)
        if (this.image.frame.name === 6) {
          this.game.scene.stop('cena-dialogo')
          this.game.scene.start('cena1')
        }
      })
  }

  update () {

  }
}