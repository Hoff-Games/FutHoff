export default class cenaanuncio extends Phaser.Scene {
  constructor () {
    super('cena-anuncio')
  }

  preload () {
    this.load.image('anuncio', '../assets/cenas/anuncio.png')
    /* tela cheia */
    this.load.spritesheet('tela-cheia', './assets/botoes/tela-cheia.png', {
      frameWidth: 84,
      frameHeight: 84
    })
  }

  create () {
    this.imagem = this.add
      .image(400, 225, 'anuncio')
      .setInteractive()
      .on('pointerdown', () => {
        this.game.scene.stop('cena-anuncio')
        this.game.scene.start('cena-dialogo')
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