/* eslint-disable no-undef */
export default class cena1 extends Phaser.Scene {
  constructor () {
    super('cena1')
  }

  preload() {

    /*fundo*/
    this.load.image('cenasala', '../assets/cenas/cenasala.png')

    /*botoes de salas*/
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

  create() {
    this.add.image(400, 225, 'cenasala')

    this.trilha = this.sound.add('trilha')
    this.trilha.loop = true
    this.trilha.play()


    this.salas=[
      {
        numero: 1,
        x: 150,
        y: 100
      },
      {
        numero: 2,
        x: 150,
        y: 225
      },
      {
        numero: 3,
        x: 150,
        y: 350
      },
      {
        numero: 4,
        x: 400,
        y: 100
      },
      {
        numero: 5,
        x: 400,
        y: 225
      },
      {
        numero: 6,
        x: 400,
        y: 350
      },
      {
        numero: 7,
        x: 650,
        y: 100
      },
      {
        numero: 8,
        x: 650,
        y: 225
      },
      {
        numero: 9,
        x: 650,
        y: 350
      }
    ]

    this.salas.forEach((sala) => {
      sala.botao = this.add.sprite(sala.x, sala.y, 'sala' + sala.numero)
        .setInteractive()
        .on('pointerdown', () => {
          this.game.socket.on('jogadores', (jogadores) => {
            this.game.jogadores = jogadores
            console.log(jogadores)
            this.game.scene.stop('cena1')
            this.game.scene.start('cena2')
          })
          this.game.socket.emit('entrar-na-sala', sala.numero)
          this.aguarde = this.add
            .text(this.game.config.width / 2,
              this.game.config.heigth / 2,
              'Conectando...'
            )
        })
    })
  }

  update() {}
}
