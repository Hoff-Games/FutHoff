export default class cena4 extends Phaser.Scene {
  constructor () {
    super('gameover')
  }

  preload () {
    this.load.image('fundopreto', '../assets/cenas/fundopreto.png')
    this.load.spritesheet('cenaperdeu', '../assets/cenas/cenaperdeu.png', {
      frameWidth: 368,
      frameHeight: 318
    })
    this.load.spritesheet('repetir', '../assets/botoes/repetir.png', {
      frameWidth: 84,
      frameHeight: 80
    })
    this.load.spritesheet('menu', '../assets/botoes/menu.png', {
      frameWidth: 120,
      frameHeight: 60
    })
  }

  create () {
    this.imagem = this.add.sprite(400, 225, 'cenaperdeu')
    this.timer = 4
    this.timedEvent = this.time.addEvent({
      delay: 1000,
      callback: this.countdown,
      callbackScope: this,
      loop: true
    })

    this.anims.create({
      key: 'cena-trocando',
      frames: this.anims.generateFrameNumbers('cenaperdeu', {
        start: 0,
        end: 34
      }),
      frameRate: 8,
      repeat: -1
    })

    this.imagem.anims.play('cena-trocando')
  }

  update () {
  }

  countdown () {
    this.timer -= 1
    if (this.timer <= 0) {
      this.imagem.destroy()
      this.timedEvent.destroy()
      this.game.scene.stop('gameover')
      this.game.scene.start('tentarnovamente')
    }
  }
}
