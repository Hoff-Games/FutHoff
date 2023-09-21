export default class cenaprologo extends Phaser.Scene {
  constructor () {
    super('cenaprologo')
  }

  preload () {
    /* imagem de fundo */
    this.load.image('cenaprologo', '../assets/cenas/cenaprologo.png')
  }

  create () {
    this.imagem = this.add
      .image(400, 225, 'cenaprologo')
      .setInteractive()
      .on('pointerdown', () => {
        this.game.scene.stop('cenaprologo')
        this.game.scene.start('encerramento')
      })
  }

  update () {

  }
}
