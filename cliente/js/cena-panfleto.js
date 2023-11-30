export default class cenapanfleto extends Phaser.Scene {
  constructor () {
    super('cena-panfleto')
  }

  preload () {
    this.load.spritesheet('panfleto', '../assets/cenas/panfleto.png', {
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
      .sprite(400, 225, 'panfleto')
      .setInteractive()
      .on('pointerdown', () => {
        this.game.scene.stop('cena-panfleto')
        this.game.scene.start('cena-anuncio')
      })

    this.anims.create({
      key: 'cena-trocando2',
      frames: this.anims.generateFrameNumbers('panfleto', {
        start: 0,
        end: 6
      }),
      frameRate: 4,
      repeat: 0
    })
    this.image.anims.play('cena-trocando2')

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