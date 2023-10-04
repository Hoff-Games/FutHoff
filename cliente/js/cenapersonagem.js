export default class cenapersonagem extends Phaser.Scene {
  constructor () {
    super('cenapersonagem')
  }

  preload () {
    this.load.image('cenaselecao', '../assets/cenas/cenaselecao.png')
    this.load.image('persona1', '../assets/botoes/persona1.png')
  }

  create () {
    this.add.image(400, 225, 'cenaselecao')

    this.persona1 = this.add.sprite(200, 250, 'persona1')
      .setInteractive()
      .on('pointerdown', () => {
        this.game.scene.stop('cenapersonagem')

        this.game.estadoPersonagem = {
          spriteId: 0,
          spriteStopEsquerda: '/skilerstopesquerda.png',
          spriteStopDireita: '/skilerstopdireita.png',
          spriteWalking: '/skiler.png',
          spriteCarro: '/skilercarro.png',
          spriteGanha: '/skilerganha.png',
          spriteEscada: '/skilerescada.png'
        }
        this.game.scene.start('cena2')
      })
  }

  update () {

  }
}
