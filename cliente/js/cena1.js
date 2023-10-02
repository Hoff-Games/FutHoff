/* eslint-disable no-undef */
export default class cena1 extends Phaser.Scene {
  constructor () {
    super('cena1')
  }

  preload () {
    this.load.image('cenasala', '../assets/cenas/cenasala.png')
   /* this.load.image('sala1', '../assets/botoes/sala1.png')
    this.load.image('sala2', '../assets/botoes/sala2.png')
    this.load.image('sala3', '../assets/botoes/sala3.png')
    this.load.image('sala4', '../assets/botoes/sala4.png')
    this.load.image('sala5', '../assets/botoes/sala5.png')
    this.load.image('sala6', '../assets/botoes/sala6.png')
    this.load.image('sala7', '../assets/botoes/sala7.png')
    this.load.image('sala8', '../assets/botoes/sala8.png')
    this.load.image('sala9', '../assets/botoes/sala9.png')*/

    /*botoes*/
    this.load.spritesheet('sala1', '../assets/botoes/sala1.png', {
      frameWidth: 120,
      frameHeight: 60
    })
    this.load.spritesheet('sala2', '../assets/botoes/sala2.png', {
      frameWidth: 120,
      frameHeight: 60
    })
    this.load.spritesheet('sala3', '../assets/botoes/sala3.png', {
      frameWidth: 120,
      frameHeight: 60
    })
    this.load.spritesheet('sala4', '../assets/botoes/sala4.png', {
      frameWidth: 120,
      frameHeight: 60
    })
    this.load.spritesheet('sala5', '../assets/botoes/sala5.png', {
      frameWidth: 120,
      frameHeight: 60
    })
    this.load.spritesheet('sala6', '../assets/botoes/sala6.png', {
      frameWidth: 120,
      frameHeight: 60
    })
    this.load.spritesheet('sala7', '../assets/botoes/sala7.png', {
      frameWidth: 120,
      frameHeight: 60
    })
    this.load.spritesheet('sala8', '../assets/botoes/sala8.png', {
      frameWidth: 120,
      frameHeight: 60
    })
    this.load.spritesheet('sala9', '../assets/botoes/sala9.png', {
      frameWidth: 120,
      frameHeight: 60
    })

    this.load.audio('trilha', '../assets/audio/musicasalas.mp3')
  }

  create () {
    this.add.image(400, 225, 'cenasala')

    this.trilha = this.sound.add('trilha')
    this.trilha.loop = true
    this.trilha.play()

    this.sala1 = this.add.sprite(150, 100, 'sala1')
      .setInteractive()
      .on('pointerdown', () => {
        this.sala1.setFrame (1)
      })
      .on('pointerup', () => {
      this.sala1.setFrame(0)
      this.game.scene.stop('cena1')
      this.game.scene.start('cena2')
      })
    
    this.sala2 = this.add.sprite(150, 225, 'sala2')
      .setInteractive()
      .on('pointerdown', () => {
        this.sala2.setFrame(1)
      })
      .on('pointerup', () => {
        this.sala2.setFrame(0)
        this.game.scene.stop('cena1')
        this.game.scene.start('cena2')
      })
    this.sala3 = this.add.sprite(150, 350, 'sala3')
      .setInteractive()
      .on('pointerdown', () => {
        this.sala3.setFrame(1)
      })
      .on('pointerup', () => {
        this.sala3.setFrame(0)
        this.game.scene.stop('cena1')
        this.game.scene.start('cena2')
      })
    this.sala4 = this.add.sprite(400, 100, 'sala4')
      .setInteractive()
      .on('pointerdown', () => {
        this.sala4.setFrame(1)
      })
      .on('pointerup', () => {
        this.sala4.setFrame(0)
        this.game.scene.stop('cena1')
        this.game.scene.start('cena2')
      })
    this.sala5 = this.add.sprite(400, 225, 'sala5')
      .setInteractive()
      .on('pointerdown', () => {
        this.sala5.setFrame(1)
      })
      .on('pointerup', () => {
        this.sala5.setFrame(0)
        this.game.scene.stop('cena1')
        this.game.scene.start('cena2')
      })
    this.sala6 = this.add.sprite(400, 350, 'sala6')
      .setInteractive()
      .on('pointerdown', () => {
        this.sala6.setFrame(1)
      })
      .on('pointerup', () => {
        this.sala6.setFrame(0)
        this.game.scene.stop('cena1')
        this.game.scene.start('cena2')
      })
    this.sala7 = this.add.sprite(650, 100, 'sala7')
      .setInteractive()
      .on('pointerdown', () => {
        this.sala7.setFrame(1)
      })
      .on('pointerup', () => {
        this.sala7.setFrame(0)
        this.game.scene.stop('cena1')
        this.game.scene.start('cena2')
      })
    this.sala8 = this.add.sprite(650, 225, 'sala8')
      .setInteractive()
      .on('pointerdown', () => {
        this.sala8.setFrame(1)
      })
      .on('pointerup', () => {
        this.sala8.setFrame(0)
        this.game.scene.stop('cena1')
        this.game.scene.start('cena2')
      })
    this.sala9 = this.add.sprite(650, 350, 'sala9')
      .setInteractive()
      .on('pointerdown', () => {
        this.sala9.setFrame(1)
      })
      .on('pointerup', () => {
        this.sala9.setFrame(0)
        this.game.scene.stop('cena1')
        this.game.scene.start('cena2')
      })


    
    

  }

  update () {

  }
}
