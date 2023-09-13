export default class encerramento extends Phaser.Scene {
  constructor () {
    super('encerramento')
  }

  preload() {
    this.load.spritesheet('cenaencerramento', '../assets/cenas/cenaencerramento.png', {
      frameWidth: 800,
      frameHeight: 450
    })
  }

  create() {

    this.image = this.add.sprite(400, 225, 'cenaencerramento')

    this.anims.create({
      key: 'cena-trocando',
      frames: this.anims.generateFrameNumbers('cenaencerramento', {
        start: 0,
        end: 1
      }),
      frameRate: 4,
      repeat: -1
    })

    this.image.anims.play('cena-trocando')
  }

  update() {

  }
}
