/* eslint-disable no-undef */
export default class cena0 extends Phaser.Scene {
  constructor () {
    super('cena0')
  }

  preload () {
    /*imagem de fundo*/
    this.load.image('cenaabertura', '../assets/cenas/cenaabertura.png')

    /*tela cheia*/
    this.load.spritesheet('tela-cheia', './assets/botoes/tela-cheia.png', {
      frameWidth: 64,
      frameHeight: 64
    })
  }

  create () {
    this.imagem = this.add
      .image(400, 225, 'cenaabertura')
      .setInteractive()
      .on('pointerdown', () => {
        this.game.scene.stop('cena0')
        this.game.scene.start('cena1')
      })

    /*tela cheia*/
    this.tela_cheia = this.add
      .sprite(750, 50, 'tela-cheia', 0)
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

  }

  update () {

  }
}
