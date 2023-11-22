export default class cenapanfleto extends Phaser.Scene {
  constructor () {
    super('cena-panfleto')
  }

  preload () {
    this.load.spritesheet('panfleto', '../assets/cenas/panfleto.png', {
      frameWidth: 800,
      frameHeight: 450
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
  }

  update () {

  }
}