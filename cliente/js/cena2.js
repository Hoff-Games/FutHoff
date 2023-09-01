export default class cena2 extends Phaser.Scene {
  constructor () {
    super('cena2')
  }

  preload() {

    /*imagem de fundo*/
    this.load.image('mapa1', '../assets/mapa1.png')

    /*personagens*/
    this.load.spritesheet('skiler', '../assets/skiler.png', {
      frameWidth: 64,
      frameHeight: 64
    })
    this.load.spritesheet('skilerstopdireita', '../assets/skilerstopdireita.png', {
      frameWidth: 64,
      frameHeight: 64
    })
    this.load.spritesheet('skilerstopesquerda', '../assets/skilerstopesquerda.png', {
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

    /*tela cheia*/
    this.load.spritesheet('tela-cheia', './assets/tela-cheia.png', {
      frameWidth: 64,
      frameHeight: 64
    })
  }

  create() {

    /*imagem de fundo*/
    this.add.image(400, 225, 'mapa1')

    /*personagens*/
    this.personagem = this.physics.add.sprite (400, 225, 'skilerstopdireita')
    
    /*animacoes*/
    /*animacoes dos personagens*/
    this.anims.create({
      key: 'skiler-direita',
      frames: this.anims.generateFrameNumbers('skiler', {
        start: 4,
        end: 7
      }),
      frameRate: 8,
      repeat: -1
    })
    this.anims.create({
      key: 'skiler-esquerda',
      frames: this.anims.generateFrameNumbers('skiler', {
        start: 0,
        end: 3
      }),
      frameRate: 8,
      repeat: -1
    })
    this.anims.create({
      key: 'skilerstopdireita',
      frames: this.anims.generateFrameNumbers('skilerstopdireita', {
        start: 0,
        end: 5
      }),
      frameRate: 8,
      repeat: -1
    })
    this.anims.create({
      key: 'skilerstopesquerda',
      frames: this.anims.generateFrameNumbers('skilerstopesquerda', {
        start: 0,
        end: 5
      }),
      frameRate: 8,
      repeat: -1
    })
    
    /*animacoes para botoes*/
    this.anims.create({
      key: 'skiler-direita',
      frames: this.anims.generateFrameNumbers('skiler', {
        start: 0,
        end: 0
      }),
      frameRate: 1
    })
    this.anims.create({
      key: 'skiler-esquerda',
      frames: this.anims.generateFrameNumbers('skiler', {
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
        this.personagem.anims.play('skiler-direita', true)
        this.personagem.setVelocityX(150)
       })
      .on('pointerup', () => {
        this.direita.setFrame(0)
        this.personagem.setVelocityX(0)
        this.personagem.anims.play('skilerstopdireita', true)
      })
    .setScrollFactor(0, 0)

    this.esquerda = this.add.sprite(50, 350, 'esquerda', 0)
      .setInteractive()
      .on('pointerdown', () => {
        this.esquerda.setFrame(1)
        this.personagem.anims.play('skiler-esquerda', true)
        this.personagem.setVelocityX(-150)
      })
      .on('pointerup', () => {
        this.esquerda.setFrame(0)
        this.personagem.setVelocityX(0)
        this.personagem.anims.play('skilerstopesquerda', true)
      })
      .setScrollFactor(0, 0)
    this.cameras.main.startFollow(this.personagem)

    /*tela cheia*/
    this.tela_cheia = this.add
      .sprite(750, 50, 'tela-cheia', 0)
      .setInteractive()
      .on('pointerdown', () => {
        if (this.scale.isFullscreen) {
          this.tela_cheia.setFrame(0)
          this.scale.stopFullscreen()
        } else {
          this.tela_cheia.setFrame(1)
          this.scale.startFullscreen()
        }
      })
      .setScrollFactor(0, 0)
  }

  update() {

      }
    }
