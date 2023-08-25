/* eslint-disable no-undef */
export default class cena1 extends Phaser.Scene {
  constructor () {
    super('cena1')
  }

  preload () {
    this.load.image('pixil-frame-0', '../assets/pixil-frame-0.png')
    this.load.spritesheet('skyler', '../assets/skyler.png', {
      frameWidth: 64,
      frameHeight: 64
    })
  }

  create () {
    this.add.image(400, 225, 'pixil-frame-0')
    this.personagem = this.physics.add.sprite(400, 225, 'skyler')
    .setInteractive()
    .on('pointerdown', () => {
      this.personagem.anims.play('skyler-direita')
      this.personagem.setVelocityX(100)
    })

    this.anims.create({
      key: 'skyler-direita',
      frames: this.anims.generateFrameNumbers('skyler', {
        start: 0,
        end: 3
      }),
      frameRate: 8,
      repeat: -1
    })
  }

  update () {

  }
}
