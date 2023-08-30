export default class cenaboss extends Phaser.Scene {
  constructor () {
    super('cenaboss')
  }

  preload() {
    /*imagem de fundo*/
    this.load.image('cenaboss', '../assets/cenaboss.png')

    /*personagem*/
    this.load.spritesheet('skiler-arcade', '../assets/skiler-arcade.png', {
      frameWidth: 64,
      frameHeight: 64
    })
    this.load.spritesheet('skiler-arcade-stop-direita', '../assets/skiler-arcade-stop-direita.png', {
      frameWidth: 64,
      frameHeight: 64
    })
    this.load.spritesheet('skiler-arcade-stop-esquerda', '../assets/skiler-arcade-stop-esquerda.png', {
      frameWidth: 64,
      frameHeight: 64
    })

    /*botoes*/
    this.load.spritesheet('direita', '../assets/direita.png', {
      frameWidth: 64,
      frameHeight: 64
    })
    this.load.spritesheet('esquerda', '../assets/esquerda.png', {
      frameWidth: 64,
      frameHeight: 64
    })
  }

  create() {

    /*imagem de fundo*/
    this.add.image(400, 225, 'cenaboss')

    /*personagens*/
    this.personagem = this.physics.add.sprite(200, 330, 'skiler-arcade-stop-direita')

    /*animacoes*/
    /*animacoes dos personagens*/
    this.anims.create({
      key: 'skiler-arcade-direita',
      frames: this.anims.generateFrameNumbers('skiler-arcade', {
        start: 7,
        end: 8
      }),
      frameRate: 8,
      repeat: -1
    })
    this.anims.create({
      key: 'skiler-arcade-esquerda',
      frames: this.anims.generateFrameNumbers('skiler-arcade', {
        start: 1,
        end: 2
      }),
      frameRate: 8,
      repeat: -1
    })
    this.anims.create({
      key: 'skiler-arcade-stop-direita',
      frames: this.anims.generateFrameNumbers('skiler-arcade-stop-direita', {
        start: 0,
        end: 1
      }),
      frameRate: 8,
      repeat: -1
    })
    this.anims.create({
      key: 'skiler-arcade-stop-esquerda',
      frames: this.anims.generateFrameNumbers('skiler-arcade-stop-esquerda', {
        start: 0,
        end: 1
      }),
      frameRate: 8,
      repeat: -1
    })

    /*animacoes para botoes*/
    this.anims.create({
      key: 'skiler-arcade-direita',
      frames: this.anims.generateFrameNumbers('skiler-arcade', {
        start: 0,
        end: 0
      }),
      frameRate: 1
    })
    this.anims.create({
      key: 'skiler-arcade-esquerda',
      frames: this.anims.generateFrameNumbers('skiler-arcade', {
        start: 0,
        end: 0
      }),
      frameRate: 1
    })

    /*botoes*/
    this.direita = this.add.sprite(175, 350, 'direita', 0)
      .setInteractive()
      .on('pointerdown', () => {
        this.direita.setFrame(1)
        this.personagem.anims.play('skiler-arcade-direita', true)
        this.personagem.setVelocityX(100)
      })
      .on('pointerup', () => {
        this.direita.setFrame(0)
        this.personagem.setVelocityX(0)
        this.personagem.anims.play('skiler-arcade-stop-direita', true)
      })
      .setScrollFactor(0, 0)
    
    this.esquerda = this.add.sprite(50, 350, 'esquerda', 0)
      .setInteractive()
      .on('pointerdown', () => {
        this.esquerda.setFrame(1)
        this.personagem.anims.play('skiler-arcade-esquerda', true)
        this.personagem.setVelocityX(-100)
      })
      .on('pointerup', () => {
        this.esquerda.setFrame(0)
        this.personagem.setVelocityX(0)
        this.personagem.anims.play('skiler-arcade-stop-esquerda', true)
      })
      .setScrollFactor(0, 0)

  }

  update() {

  }
}
