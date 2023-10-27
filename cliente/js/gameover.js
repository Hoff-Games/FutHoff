export default class cena4 extends Phaser.Scene {
  constructor () {
    super('gameover')
  }

  preload () {
    this.load.image('fundopreto', '../assets/cenas/fundopreto.png')
    this.load.spritesheet('repetir', '../assets/botoes/repetir.png', {
      frameWidth: 64,
      frameHeight: 64
    })
    this.load.spritesheet('menu', '../assets/botoes/menu.png', {
      frameWidth: 128,
      frameHeight: 64
    })
  }

  create () {
    const centrox = this.cameras.main.worldView.x + this.cameras.main.width / 2
    const centroy = this.cameras.main.worldView.y + this.cameras.main.height / 2

    this.imagem = this.add
    this.add.image(400, 225, 'fundopreto')

    this.repetir = this.add.sprite(centrox - 70, centroy + 100, 'repetir', 0)
      .setInteractive()
      .on('pointerover', () => {
        this.repetir.setFrame(1)
      })
      .on('pointerout', () => {
        this.repetir.setFrame(0)
      })
      .on('pointerdown', () => {
        this.game.scene.stop('gameover')
        this.game.scene.start('cena2')
      })
    this.menu = this.add.sprite(centrox + 70, centroy + 100, 'menu', 0)
      .setInteractive()
      .on('pointerover', () => {
        this.menu.setFrame(1)
      })
      .on('pointerout', () => {
        this.menu.setFrame(0)
      })
      .on('pointerdown', () => {
        this.game.scene.stop('gameover')
        this.game.scene.start('cena0')
      })
  }

  update () {

  }
}
