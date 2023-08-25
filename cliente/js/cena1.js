/* eslint-disable no-undef */
export default class cena1 extends Phaser.Scene {
  constructor () {
    super('cena1')
  }

  preload() {
    this.load.image('selecaopersonagem', '../assets/selecaopersonagem.png')
    this.load.image('botaocampanha', '../assets/botaocampanha.png')
    this.load.image('botaomultiplayer', '../assets/botaomultiplayer.png')
  }

    create() {
      this.add.image(400, 225, 'selecaopersonagem')
      this.add.image(200, 225, 'botaocampanha')
        .setInteractive()
        .on('pointerdown', () => {
          this.game.scene.stop('cena1')
          this.game.scene.start('cena2')
        })
      this.add.image(600, 225, 'botaomultiplayer')
    }
  

  update () {

  }
}
