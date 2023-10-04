export default class cena2 extends Phaser.Scene {
  constructor () {
    super('cena2')

    this.gameover = false
  }

  preload () {
    /* mapas */
    this.load.tilemapTiledJSON('fases', '../assets/fases/fases.json')

    /* musica de fundo */
    this.load.audio('musicadefundo', '../assets/audio/musicadefundo.mp3')

    /* cenas */
    this.load.image('fundopreto', '../assets/cenas/fundopreto.png')
    this.load.image('cenaperdeu', '../assets/cenas/cenaperdeu.png')

    /* tilesets */
    this.load.image('c1', '../assets/fases/c1.png')
    this.load.image('c2', '../assets/fases/c2.png')
    this.load.image('c3', '../assets/fases/c3.png')
    this.load.image('tilearv', '../assets/fases/tilearv.png')
    this.load.image('tilebloc', '../assets/fases/tilebloc.png')
    this.load.image('dec1', '../assets/fases/dec1.png')
    this.load.image('dec2', '../assets/fases/dec2.png')
    this.load.image('tiletrave', '../assets/fases/tiletrave.png')

    /* moeda */
    this.load.spritesheet('moeda', '../assets/fases/moeda.png', {
      frameWidth: 32,
      frameHeight: 32
    })
    this.load.audio('sommoeda', '../assets/audio/sommoeda.mp3')

    /* estrela */
    this.load.spritesheet('estrela', '../assets/fases/estrela.png', {
      frameWidth: 48,
      frameHeight: 48
    })
    this.load.audio('somestrela', '../assets/audio/somestrela.mp3')

    /* personagens */
    this.load.spritesheet('skiler', '../assets/personagens/skiler.png', {
      frameWidth: 64,
      frameHeight: 64
    })
    this.load.spritesheet('skilerstopdireita', '../assets/personagens/skilerstopdireita.png', {
      frameWidth: 64,
      frameHeight: 64
    })
    this.load.spritesheet('skilerstopesquerda', '../assets/personagens/skilerstopesquerda.png', {
      frameWidth: 64,
      frameHeight: 64
    })
    this.load.spritesheet('skilercarro', '../assets/personagens/skilercarro.png', {
      frameWidth: 73,
      frameHeight: 64
    })
    this.load.spritesheet('skiler-escada', '../assets/personagens/skilerescada.png', {
      frameWidth: 64,
      frameHeight: 64
    })

    /* atacar */
    this.load.image('bola', '../assets/personagens/bola.png')

    /* Inimigos */
    this.load.spritesheet('ini1walk', '../assets/personagens/ini1walk.png', {
      frameWidth: 64,
      frameHeight: 64
    })

    /* agua e lava */
    this.load.spritesheet('agua', '../assets/fases/agua.png', {
      frameWidth: 64,
      frameHeight: 128
    })
    this.load.spritesheet('lava', '../assets/fases/lava.png', {
      frameWidth: 64,
      frameHeight: 128
    })

    /* escada */
    this.load.image('escada', '../assets/fases/escada.png')

    /* botoes */
    this.load.spritesheet('direita', '../assets/botoes/direita.png', {
      frameWidth: 84,
      frameHeight: 80
    })
    this.load.spritesheet('esquerda', '../assets/botoes/esquerda.png', {
      frameWidth: 84,
      frameHeight: 80
    })
    this.load.spritesheet('cima', '../assets/botoes/cima.png', {
      frameWidth: 84,
      frameHeight: 80
    })
    this.load.spritesheet('baixo', '../assets/botoes/baixo.png', {
      frameWidth: 84,
      frameHeight: 80
    })

    this.load.spritesheet('botaobola', '../assets/botoes/botaobola.png', {
      frameWidth: 84,
      frameHeight: 80
    })

    /* tela cheia */
    this.load.spritesheet('tela-cheia', './assets/botoes/tela-cheia.png', {
      frameWidth: 84,
      frameHeight: 84
    })
  }

  create () {
    /* mapas */
    this.tilemapFases = this.make.tilemap({ key: 'fases' })

    this.game.scene.getScene('cena1').trilha.stop()
    this.fundo = this.sound.add('musicadefundo')
    this.fundo.loop = true
    this.fundo.play()
    

    /* tilesets */
    this.tilesetDec1 = this.tilemapFases.addTilesetImage('dec1')
    this.tilesetDec2 = this.tilemapFases.addTilesetImage('dec2')
    this.tilesetC1 = this.tilemapFases.addTilesetImage('c1')
    this.tilesetC2 = this.tilemapFases.addTilesetImage('c2')
    this.tilesetC3 = this.tilemapFases.addTilesetImage('c3')
    this.tilesetTilearv = this.tilemapFases.addTilesetImage('tilearv')
    this.tilesetTilebloc = this.tilemapFases.addTilesetImage('tilebloc')
    this.tilesetTiletrave = this.tilemapFases.addTilesetImage('tiletrave')

    /* animações da agua e lava */
    this.anims.create({
      key: 'agua',
      frames: this.anims.generateFrameNumbers('agua', {
        start: 0,
        end: 2
      }),
      frameRate: 6,
      repeat: -1
    })
    this.anims.create({
      key: 'lava',
      frames: this.anims.generateFrameNumbers('lava', {
        start: 0,
        end: 7
      }),
      frameRate: 6,
      repeat: -1
    })

    /* agua e lava */
    this.agua = [
      {
        x: 1315,
        y: -180
      },
      {
        x: 1379,
        y: -180
      },
      {
        x: 1443,
        y: -180
      },
      {
        x: 1507,
        y: -180
      },
      {
        x: 1571,
        y: -180
      },
      {
        x: 1635,
        y: -180
      },
      {
        x: 1699,
        y: -180
      },
      {
        x: 1763,
        y: -180
      }

    ]

    this.lava = [
      {
        x: 1250,
        y: 350
      },
      {
        x: 1314,
        y: 350
      },
      {
        x: 1378,
        y: 350
      },
      {
        x: 1442,
        y: 350
      },
      {
        x: 1506,
        y: 350
      },
      {
        x: 1570,
        y: 350
      },
      {
        x: 1634,
        y: 350
      },
      {
        x: 1698,
        y: 350
      },
      {
        x: 1762,
        y: 350
      },
      {
        x: 1826,
        y: 350
      },
      {
        x: 1875,
        y: 350
      },
      {
        x: -550,
        y: 1380
      },
      {
        x: -486,
        y: 1380
      },
      {
        x: -422,
        y: 1380
      },
      {
        x: -358,
        y: 1380
      },
      {
        x: -294,
        y: 1380
      },
      {
        x: -230,
        y: 1380
      },
      {
        x: -166,
        y: 1380
      },
      {
        x: -102,
        y: 1380
      },
      {
        x: -38,
        y: 1380
      },
      {
        x: 26,
        y: 1380
      },
      {
        x: 90,
        y: 1380
      }, {
        x: 154,
        y: 1380
      },
      {
        x: 218,
        y: 1380
      },
      {
        x: 230,
        y: 1380
      }
    ]

    /* camadas */
    this.layerFundo = this.tilemapFases.createLayer('fundo', [this.tilesetC1, this.tilesetC2, this.tilesetC3])
    /* agua e lava */
    this.agua.forEach((agua) => {
      agua.objeto = this.physics.add.sprite(agua.x, agua.y, 'agua')
      agua.objeto.anims.play('agua', true)
        .setImmovable()
    })
    this.lava.forEach((lava) => {
      lava.objeto = this.physics.add.sprite(lava.x, lava.y, 'lava')
      lava.objeto.anims.play('lava', true)
        .setImmovable()
    })
    this.layerArvores = this.tilemapFases.createLayer('arvores', [this.tilesetTilearv])
    this.layerArvores2 = this.tilemapFases.createLayer('arvores2', [this.tilesetTilearv])
    this.layerBlocos = this.tilemapFases.createLayer('blocos', [this.tilesetTilebloc])
    this.layerDecbloc = this.tilemapFases.createLayer('decbloc', [this.tilesetDec1, this.tilesetDec2])
    this.layerDecarv = this.tilemapFases.createLayer('decarv', [this.tilesetDec1, this.tilesetDec2])
    this.layerOutros = this.tilemapFases.createLayer('outros', [this.tilesetTilebloc, this.tilesetDec1])

    /* escada */
    this.escada = this.physics.add.sprite(-400, -288, 'escada')
    this.escada.body.setAllowGravity(false)

    /* personagem dentro da agua e lava */
    this.personagem = this.physics.add.sprite(-450, -400, 'skilerstopdireita')

    /* camadas */
    this.layerTrave1 = this.tilemapFases.createLayer('trave1', [this.tilesetTiletrave])
    this.layerTrave2 = this.tilemapFases.createLayer('trave2', [this.tilesetTiletrave])
    this.layerTrave3 = this.tilemapFases.createLayer('trave3', [this.tilesetTiletrave])

    /* colisoes */
    this.layerBlocos.setCollisionByProperty({ colisao: true })
    this.layerTrave1.setCollisionByProperty({ colisao: true })
    this.layerTrave2.setCollisionByProperty({ colisao: true })
    this.layerTrave3.setCollisionByProperty({ colisao: true })

    /* colisao personagens */
    this.physics.add.collider(this.personagem, this.layerBlocos, this.noChao, null, this)
    this.physics.add.collider(this.personagem, this.layerTrave1)
    this.physics.add.collider(this.personagem, this.layerTrave2)
    this.physics.add.collider(this.personagem, this.layerTrave3)

    /* Inimigos */
    this.ini1walk = this.physics.add.sprite(-1, -290, 'ini1walk')
    this.physics.add.collider(this.ini1walk, this.layerBlocos)
    this.physics.add.collider(this.ini1walk, this.layerTrave1)
    this.physics.add.collider(this.ini1walk, this.layerTrave2)
    this.physics.add.collider(this.ini1walk, this.layerTrave3)

    /* colisao agua e lava */

    this.lava.forEach((lava) => {
      this.physics.add.collider(lava.objeto, this.layerBlocos)
      this.physics.add.collider(lava.objeto, this.layerTrave1)
      this.physics.add.collider(lava.objeto, this.layerTrave2)
      this.physics.add.collider(lava.objeto, this.layerTrave3)
    })

    /* animação moeda */
    this.anims.create({
      key: 'moeda-girando',
      frames: this.anims.generateFrameNumbers('moeda', {
        start: 0,
        end: 3
      }),
      frameRate: 8,
      repeat: -1
    })

    /* moeda */
    this.moedas = [
      {
        x: 930,
        y: -600
      },
      {
        x: 1540,
        y: -600
      },
      {
        x: 320,
        y: -600
      },
      {
        x: 1920,
        y: -600
      },
      {
        x: -195,
        y: 100
      },
      {
        x: 1535,
        y: 100
      },
      {
        x: 575,
        y: 100
      },
      {
        x: -350,
        y: 790
      },
      {
        x: -160,
        y: 1250
      },
      {
        x: 15,
        y: 920
      },
      {
        x: 1150,
        y: 1050
      },
      {
        x: 1660,
        y: 1050
      }
    ]

    this.moedas.forEach((moeda) => {
      moeda.objeto = this.physics.add.sprite(moeda.x, moeda.y, 'moeda')
        .setImmovable()
      moeda.objeto.anims.play('moeda-girando', true)
      this.physics.add.collider(moeda.objeto, this.layerBlocos)
      this.physics.add.collider(moeda.objeto, this.layerTrave1)
      this.physics.add.collider(moeda.objeto, this.layerTrave2)
      this.physics.add.collider(moeda.objeto, this.layerTrave3)
      this.physics.add.overlap(this.personagem, moeda.objeto, this.coletarmoeda, null, this)
    })
    this.sommoeda = this.sound.add('sommoeda')

    /* animação estrela */
    this.anims.create({
      key: 'estrela-piscando',
      frames: this.anims.generateFrameNumbers('estrela', {
        start: 0,
        end: 6
      }),
      frameRate: 8,
      repeat: -1
    })
    /* estrelas */
    this.estrelas = [
      {
        x: -415,
        y: -600
      },
      {
        x: -450,
        y: 40
      },
      {
        x: 1400,
        y: 790
      }
    ]

    this.estrelas.forEach((estrela) => {
      estrela.objeto = this.physics.add.sprite(estrela.x, estrela.y, 'estrela')
        .setImmovable()
      estrela.objeto.anims.play('estrela-piscando', true)
      this.physics.add.collider(estrela.objeto, this.layerBlocos)
      this.physics.add.collider(estrela.objeto, this.layerTrave1)
      this.physics.add.collider(estrela.objeto, this.layerTrave2)
      this.physics.add.collider(estrela.objeto, this.layerTrave3)
      this.physics.add.overlap(this.personagem, estrela.objeto, this.coletarestrela, null, this)
    })
    this.somestrela = this.sound.add('somestrela')

    /* animacoes */

    /* animacoes dos personagens */
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
    this.anims.create({
      key: 'skilercarroesquerda',
      frames: this.anims.generateFrameNumbers('skilercarro', {
        start: 0,
        end: 0
      }),
      frameRate: 1,
      repeat: -1
    })
    this.anims.create({
      key: 'skilercarrodireita',
      frames: this.anims.generateFrameNumbers('skilercarro', {
        start: 1,
        end: 1
      }),
      frameRate: 1,
      repeat: -1
    })
    this.anims.create({
      key: 'skilerpularesquerda',
      frames: this.anims.generateFrameNumbers('skiler', {
        start: 2,
        end: 2
      }),
      frameRate: 1,
      repeat: -1
    })
    this.anims.create({
      key: 'skilerpulardireita',
      frames: this.anims.generateFrameNumbers('skiler', {
        start: 5,
        end: 5
      }),
      frameRate: 1,
      repeat: -1
    })

    this.anims.create({
      key: 'skiler-escada',
      frames: this.anims.generateFrameNumbers('skiler-escada', {
        start: 0,
        end: 3
      }),
      frameRate: 4,
      repeat: -1
    })

    /* animações dos inimigos */
    this.anims.create({
      key: 'ini1walk',
      frames: this.anims.generateFrameNumbers('ini1walk', {
        start: 0,
        end: 3
      }),
      frameRate: 8,
      repeat: -1
    })
    this.ini1walk.setVelocity(-100, 0)

    // Animações automáticas //
    this.ini1walk.anims.play('ini1walk', true)

    /* animacoes para botoes */
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
    this.anims.create({
      key: 'skiler-esquerda'
    })

    /* botoes */
    this.direita = this.add.sprite(125, 430, 'direita', 0)
      .setInteractive()
      .on('pointerdown', () => {
        this.direita.setFrame(1)
        this.personagem.anims.play('skiler-direita', true)
        this.personagem.setVelocityX(230)
      })
      .on('pointerup', () => {
        this.direita.setFrame(0)
        this.personagem.setVelocityX(0)
        this.personagem.anims.play('skilerstopdireita', true)
      })
      .setScrollFactor(0, 0)

    this.esquerda = this.add.sprite(-10, 430, 'esquerda', 0)
      .setInteractive()
      .on('pointerdown', () => {
        this.esquerda.setFrame(1)
        this.personagem.anims.play('skiler-esquerda', true)
        this.personagem.setVelocityX(-230)
      })
      .on('pointerup', () => {
        this.esquerda.setFrame(0)
        this.personagem.setVelocityX(0)
        this.personagem.anims.play('skilerstopesquerda', true)
      })
      .setScrollFactor(0, 0)

    this.baixo = this.add.sprite(800, 450, 'baixo', 0)
      .setInteractive()
      .on('pointerdown', () => {
        this.baixo.setFrame(1)

        /* Verificar o lado do carrinho */
        const anim = this.personagem.anims.getName()
        const esquerda = /.*esquerda.*/ // qualquer expressão com a palavra 'esquerda'
        const direita = /.*direita.*/ // qualquer expressão com a palavra 'direita'
        if (esquerda.test(anim)) {
          this.personagem.setVelocityX(-250)
          this.personagem.anims.play('skilercarroesquerda', true)
        } else if (direita.test(anim)) {
          this.personagem.setVelocityX(250)
          this.personagem.anims.play('skilercarrodireita', true)
        }
      })
      .on('pointerup', () => {
        this.baixo.setFrame(0)
        const anim = this.personagem.anims.getName()
        const esquerda = /.*esquerda.*/ // qualquer expressão com a palavra 'esquerda'
        const direita = /.*direita.*/ // qualquer expressão com a palavra 'direita'
        if (esquerda.test(anim)) {
          this.personagem.setVelocityX(0)
          this.personagem.anims.play('skilerstopesquerda', true)
        } else if (direita.test(anim)) {
          this.personagem.setVelocityX(0)
          this.personagem.anims.play('skilerstopdireita', true)
        }
      })
      .setScrollFactor(0, 0)

    /* PULARRRRRRRRRRRRRRRRR -------- UIIIIIIIIIIIII */
    this.cima = this.add.sprite(800, 300, 'cima', 0)
      .setInteractive()
      .on('pointerdown', () => {
        this.cima.setFrame(1)
        if (this.naEscada) {
          this.personagem.setVelocityY(-100)
          this.personagem.anims.play('skiler-escada')
        } else {
          if (this.personagem.body.blocked.down) {
            const anim = this.personagem.anims.getName()
            const esquerda = /.*esquerda.*/ // qualquer expressão com a palavra 'esquerda'
            const direita = /.*direita.*/ // qualquer expressão com a palavra 'direita'
            if (esquerda.test(anim)) {
              this.personagem.setVelocityY(-450)
              this.personagem.anims.play('skilerpularesquerda', true)
            } else if (direita.test(anim)) {
              this.personagem.setVelocityY(-450)
              this.personagem.anims.play('skilerpulardireita', true)
            }
          }
        }
      })
      .on('pointerup', () => {
        this.cima.setFrame(0)
        if (this.naEscada) {
          this.personagem.setVelocityY(0)
          this.personagem.anims.pause()
        }
      })
      .setScrollFactor(0, 0)

    /* atacar */

    this.atacar = this.add.sprite(800, 150, 'botaobola', 0)
      .setInteractive()
      .on('pointerdown', () => {
        this.atacar.setFrame(1)

        const anim = this.personagem.anims.getName()
        const esquerda = /.*esquerda.*/ // qualquer expressão com a palavra 'esquerda'
        const direita = /.*direita.*/ // qualquer expressão com a palavra 'direita'
        if (esquerda.test(anim)) {
          this.bola = this.physics.add.sprite(this.personagem.x, this.personagem.y + 14, 'bola')
          this.bola.setVelocityX(-500)
          this.personagem.setVelocityY(0)
          this.personagem.anims.play('skilerstopesquerda', true)
        } else if (direita.test(anim)) {
          this.bola = this.physics.add.sprite(this.personagem.x, this.personagem.y + 14, 'bola')
          this.bola.setVelocityX(500)
          this.personagem.setVelocityY(0)
          this.personagem.anims.play('skilerstopdireita', true)
        }

        this.physics.add.collider(this.bola, this.layerBlocos, this.bolaAtingeChao, this.ini1walk, this.bolalAtingeInimigo, null, this)
      })
      .on('pointerup', () => {
        this.atacar.setFrame(0)

        if (this.personagem.body.blocked.down) {
          const anim = this.personagem.anims.getName()
          const esquerda = /.*esquerda.*/ // qualquer expressão com a palavra 'esquerda'
          const direita = /.*direita.*/ // qualquer expressão com a palavra 'direita'
          if (esquerda.test(anim)) {
            this.personagem.setVelocityY(0)
            this.personagem.anims.play('skilerstopesquerda', true)
          } else if (direita.test(anim)) {
            this.personagem.setVelocityY(0)
            this.personagem.anims.play('skilerstopdireita', true)
          }
        }
      })
      .setScrollFactor(0, 0)

    /* colisao bola
    this.physics.add.collider(this.bola, this.layerBlocos)

    this.physics.add.collider(this.bola, this.layerTrave1)
    this.physics.add.collider(this.bola, this.layerTrave2)
    this.physics.add.collider(this.bola, this.layerTrave3)
    */

    /* colisao agua */
    this.agua.forEach((agua) => {
      this.physics.add.collider(agua.objeto, this.layerBlocos)
      this.physics.add.collider(agua.objeto, this.layerTrave1)
      this.physics.add.collider(agua.objeto, this.layerTrave2)
      this.physics.add.collider(agua.objeto, this.layerTrave3)
      this.physics.add.overlap(this.personagem, agua.objeto, () => {
        if (!this.gameover) {
          this.gameover = true
          this.agua.forEach((agua) => {

          })
          this.timer = 1
          this.timedEvent = this.time.addEvent({
            delay: 500,
            callback: () => {
              this.timer -= 1
              if (this.timer <= 0) {
                this.esquerda.destroy()
                this.direita.destroy()
                this.cima.destroy()
                this.baixo.destroy()
                this.add.image(this.personagem.x, this.personagem.y - 100, 'fundopreto')
                this.add.image(this.personagem.x, this.personagem.y - 100, 'cenaperdeu')
                  .setInteractive()
                  .on('pointerdown', () => {
                    this.game.scene.stop('cena2')
                    this.game.scene.start('cena2')
                  })
              }
            },
            callbackScope: this,
            loop: true
          })
        }
      })
    })

    /* camera */
    this.personagem.setCollideWorldBounds(true)
    this.physics.world.setBounds(-700, -832, 3133, 2390, true, true, true, false)
    this.cameras.main.setBounds(-700, -832, 3133, 2390)
    this.cameras.main.startFollow(this.personagem).setZoom(0.8)
    this.cameras.main.followOffset.set(0, 100)

    /* tela cheia */
    this.tela_cheia = this.add
      .sprite(850, 0, 'tela-cheia', 0)
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

  update () {
    if (
      Phaser.Geom.Intersects.RectangleToRectangle(
        this.personagem.getBounds(),
        this.escada.getBounds()
      )
    ) {
      this.naEscada = true
      this.personagem.body.setAllowGravity(false)
    } else {
      this.naEscada = false
      this.personagem.body.setAllowGravity(true)
    }
  }

  coletarmoeda (personagem, moeda) {
    moeda.disableBody(true, true)
    this.sommoeda.play()
  }

  coletarestrela (personagem, estrela) {
    estrela.disableBody(true, true)
    this.somestrela.play()
  }

  noChao (personagem, bloco) {
    if (this.direita.frame.name === 1) {
      if (this.baixo.frame.name === 1) {
        this.personagem.anims.play('skilercarrodireita')
        this.personagem.setVelocityX(250)
      } else {
        this.personagem.anims.play('skiler-direita', true)
        this.personagem.setVelocityX(230)
      }
    } else if (this.esquerda.frame.name === 1) {
      if (this.baixo.frame.name === 1) {
        this.personagem.anims.play('skilercarroesquerda')
        this.personagem.setVelocityX(-250)
      } else {
        this.personagem.anims.play('skiler-esquerda', true)
        this.personagem.setVelocityX(-230)
      }
    }

    
  }

  
    /*arremessarBola() {
      const bola = bolas.create(skiler.x, skiler.y, 'bola');
      bola.setVelocityX(400);
      bola.setLifetime(2000);
    }*/

    bolaAtingeChao(bola, layerBlocos) {
      bola.setVelocityX(500);
    }
/*
    bolalAtingeInimigo(bola, ini1walk) {
      bola.destroy();
      ini1walk.destroy();
    }
    */
}
