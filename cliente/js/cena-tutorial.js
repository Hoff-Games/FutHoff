export default class cena4 extends Phaser.Scene {
  constructor () {
    super('cena-tutorial')
  }

  preload () {
    this.load.image('tutorial', '../assets/cenas/tutorial.png')
  }

  create () {
    this.imagem = this.add
      .image(400, 225, 'tutorial')
      .setInteractive()
      .on('pointerdown', () => {
        this.game.scene.stop('cena-tutorial')
        this.game.scene.start('cena-panfleto')
      })
  }

  update () {

  }
}