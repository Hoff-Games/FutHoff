export default class cenatutorial extends Phaser.Scene {
  constructor () {
    super('cena-tutorial')
  }

  preload () {
    this.load.image('tutorial', '../assets/cenas/tutorial.png')

    this.load.audio('trilha', '../assets/audio/musicasalas.mp3')
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
  }

  update () {

  }
}