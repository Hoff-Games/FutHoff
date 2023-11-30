export default class cenatutorial extends Phaser.Scene {
  constructor () {
    super('cena-tutorial')
  }

  preload () {
    this.load.image('tutorial', '../assets/cenas/tutorial.png')

    this.load.audio('trilha', '../assets/audio/musicasalas.mp3')

    /* tela cheia */
    this.load.spritesheet('tela-cheia', './assets/botoes/tela-cheia.png', {
      frameWidth: 84,
      frameHeight: 84
    })
  }

  create () {
    this.trilha = this.sound.add('trilha')
    this.trilha.loop = true
    this.trilha.play()

    this.imagem = this.add
      .image(400, 225, 'tutorial')
      .setInteractive()
      .on('pointerdown', () => {
        this.game.scene.stop('cena-tutorial')
        this.game.scene.start('cena-panfleto')
      })

    /* tela cheia */
    this.tela_cheia = this.add
      .sprite(730, 50, 'tela-cheia', 0)
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