export default class encerramento extends Phaser.Scene {
  constructor () {
    super('encerramento')
  }

  preload() {
    this.load.spritesheet('cenaencerramento', '../fases/cenaencerramento.png', {
      frameWidth: 800,
      frameHeight: 450
    })
  }

  create() {

    this.image = this.physics.add.sprite(400, 225, 'cenaencerramento')
    
    this.anims.create({
      key: 'cena-trocando',
      frames: this.anims.generateFrameNumbers('cenaencerramento', {
        start: 0,
        end: 1
      }),
      frameRate: 8,
      repeat: -1
    })
  }

  update() {

  }
}
