/* eslint-disable no-undef */
export default class cena1 extends Phaser.Scene {
  constructor () {
    super('cena1')
  }

  preload () {
    this.load.image('cenasala', '../assets/cenas/cenasala.png')
    this.load.image('sala1', '../assets/botoes/sala1.png')
    this.load.image('sala2', '../assets/botoes/sala2.png')
    this.load.image('sala3', '../assets/botoes/sala3.png')
    this.load.image('sala4', '../assets/botoes/sala4.png')
    this.load.image('sala5', '../assets/botoes/sala5.png')
    this.load.image('sala6', '../assets/botoes/sala6.png')
    this.load.image('sala7', '../assets/botoes/sala7.png')
    this.load.image('sala8', '../assets/botoes/sala8.png')
    this.load.image('sala9', '../assets/botoes/sala9.png')
  }

  create () {
    this.add.image(400, 225, 'cenasala')

    this.add.image(150, 100, 'sala1')
      .setInteractive()
      .on('pointerdown', () => {
        this.game.scene.stop('cena1')
        this.game.scene.start('cena2')
      })
    this.add.image(150, 225, 'sala2')
      .setInteractive()
      .on('pointerdown', () => {
        this.game.scene.stop('cena1')
        this.game.scene.start('cena2')
      })
    this.add.image(150, 350, 'sala3')
      .setInteractive()
      .on('pointerdown', () => {
        this.game.scene.stop('cena1')
        this.game.scene.start('cena2')
      })
    this.add.image(400, 100, 'sala4')
      .setInteractive()
      .on('pointerdown', () => {
        this.game.scene.stop('cena1')
        this.game.scene.start('cena2')
      })
    this.add.image(400, 225, 'sala5')
      .setInteractive()
      .on('pointerdown', () => {
        this.game.scene.stop('cena1')
        this.game.scene.start('cena2')
      })
    this.add.image(400, 350, 'sala6')
      .setInteractive()
      .on('pointerdown', () => {
        this.game.scene.stop('cena1')
        this.game.scene.start('cena2')
      })
    this.add.image(650, 100, 'sala7')
      .setInteractive()
      .on('pointerdown', () => {
        this.game.scene.stop('cena1')
        this.game.scene.start('cena2')
      })
    this.add.image(650, 225, 'sala8')
      .setInteractive()
      .on('pointerdown', () => {
        this.game.scene.stop('cena1')
        this.game.scene.start('cenapersonagem')
      })
    this.add.image(650, 350, 'sala9')
      .setInteractive()
      .on('pointerdown', () => {
        this.game.scene.stop('cena1')
        this.game.scene.start('cenaprologo')
      })
  }

  update () {

  }
}
