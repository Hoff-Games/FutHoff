export default class cenaanuncio extends Phaser.Scene {
  constructor () {
    super('cena-anuncio')
  }

  preload () {
    this.load.image('anuncio', '../assets/cenas/anuncio.png')
  }

  create () {
    this.imagem = this.add
      .image(400, 225, 'anuncio')
      .setInteractive()
      .on('pointerdown', () => {
        this.game.scene.stop('cena-anuncio')
        this.game.scene.start('cena-dialogo')
      })
  }

  update () {

  }
}