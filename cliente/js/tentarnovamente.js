export default class tentarnovamente extends Phaser.Scene {
  constructor () {
    super('tentarnovamente')
  }

  preload () {
    this.load.spritesheet('cenatentarnovamente', '../assets/cenas/cenatentarnovamente.png', {
      frameWidth: 800,
      frameHeight: 450
    })
    this.load.spritesheet('repetir', '../assets/botoes/repetir.png', {
      frameWidth: 84,
      frameHeight: 80
    })
  }

  create () {
    const centrox = this.cameras.main.worldView.x + this.cameras.main.width / 2
    const centroy = this.cameras.main.worldView.y + this.cameras.main.height / 2

    this.imagemm = this.add.sprite(400, 225, 'cenatentarnovamente')

    this.anims.create({
      key: 'cenatrocando',
      frames: this.anims.generateFrameNumbers('cenatentarnovamente', {
        start: 0,
        end: 19
      }),
      frameRate: 8,
      repeat: 0
    })

    this.imagemm.anims.play('cenatrocando')

    this.repetir = this.add.sprite(centrox - 0, centroy + 100, 'repetir', 0)
      .setInteractive()
      .on('pointerover', () => {
        this.repetir.setFrame(1)
      })
      .on('pointerout', () => {
        this.repetir.setFrame(0)
      })
      .on('pointerdown', () => {
        this.game.scene.stop('tentarnovamente')
        this.game.scene.start('cena2')
      })
  }

  update () {

  }
}
