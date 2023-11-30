export default class cenadialogo extends Phaser.Scene {
  constructor () {
    super('cena-dialogo')
  }

  preload () {
    this.load.spritesheet('dialogo', '../assets/cenas/dialogo.png', {
      frameWidth: 800,
      frameHeight: 450
    })

    /* tela cheia */
    this.load.spritesheet('tela-cheia', './assets/botoes/tela-cheia.png', {
      frameWidth: 84,
      frameHeight: 84
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

    /* tela cheia */
    this.tela_cheia = this.add
      .sprite(70, 50, 'tela-cheia', 0)
      .setInteractive()
      .on('pointerdown', () => {
        if (this.scale.isFullscreen) {
          this.tela_cheia.setFrame(0)
          this.scale.stopFullscreen()
        } else {
          this.tela_cheia.setFrame(1)
          this.scale.startFullscreen()
        }
      })
      .setScrollFactor(0, 0)
  }

  update () {

  }
}