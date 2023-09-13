export default class cena2 extends Phaser.Scene {
  constructor () {
    super('cena2')
  }

  preload() {

    /*mapas*/
    this.load.tilemapTiledJSON('fase', '../assets/fases/fase.json')

    /*tilesets*/
    this.load.image('bbb', '../assets/fases/bbb.png')
    this.load.image('c1', '../assets/fases/c1.png')
    this.load.image('c2', '../assets/fases/c2.png')
    this.load.image('c3', '../assets/fases/c3.png')
    this.load.image('f0', '../assets/fases/f0.png')
    this.load.image('f1', '../assets/fases/f1.png')
    this.load.image('f2', '../assets/fases/f2.png')
    this.load.image('tilearv', '../assets/fases/tilearv.png')
    this.load.image('tilebloc', '../assets/fases/tilebloc.png')
    this.load.image('tilebloc2', '../assets/fases/tilebloc2.png')
    this.load.image('tiledec', '../assets/fases/tiledec.png')
    this.load.image('tiledmapa3', '../assets/fases/tiledmapa3.png')
    this.load.image('tileper', '../assets/fases/tileper.png')
    this.load.image('tilesp', '../assets/fases/tilesp.png')
    this.load.image('tiletrave', '../assets/fases/tiletrave.png')

    /*moeda*/
    this.load.spritesheet('moeda', '../assets/fases/moeda.png', {
      frameWidth: 32,
      frameHeight: 32
    })

    /*personagens*/
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

    /*botoes*/
    this.load.spritesheet('direita', '../assets/botoes/direita.png', {
      frameWidth: 64,
      frameHeight: 64
    })
    this.load.spritesheet('esquerda', '../assets/botoes/esquerda.png', {
      frameWidth: 64,
      frameHeight: 64
    })

    /*tela cheia*/
    this.load.spritesheet('tela-cheia', './assets/botoes/tela-cheia.png', {
      frameWidth: 64,
      frameHeight: 64
    })
  }

  create() {

    /*mapas*/
    this.tilemapFase = this.make.tilemap({ key: 'fase' })

    /*tilesets*/
    this.tilesetBbb = this.tilemapFase.addTilesetImage('bbb')
    this.tilesetC1 = this.tilemapFase.addTilesetImage('c1')
    this.tilesetC2 = this.tilemapFase.addTilesetImage('c2')
    this.tilesetC3 = this.tilemapFase.addTilesetImage('c3')
    this.tilesetF0 = this.tilemapFase.addTilesetImage('f0')
    this.tilesetF1 = this.tilemapFase.addTilesetImage('f1')
    this.tilesetF2 = this.tilemapFase.addTilesetImage('f2')
    this.tilesetTilearv = this.tilemapFase.addTilesetImage('tilearv')
    this.tilesetTilebloc = this.tilemapFase.addTilesetImage('tilebloc')
    this.tilesetTilebloc2 = this.tilemapFase.addTilesetImage('tilebloc2')
    this.tilesetTiledec = this.tilemapFase.addTilesetImage('tiledec')
    this.tilesetTiledmapa3 = this.tilemapFase.addTilesetImage('tiledmapa3')
    this.tilesetTileper = this.tilemapFase.addTilesetImage('tileper')
    this.tilesetTilesp = this.tilemapFase.addTilesetImage('tilesp')
    this.tilesetTiletrave = this.tilemapFase.addTilesetImage('tiletrave')
    
    /*camadas*/
    this.layerFundo = this.tilemapFase.createLayer('fundo', [this.tilesetC1, this.tilesetC2, this.tilesetF0, this.tilesetF1, this.tilesetF2])
    this.layerPerigo = this.tilemapFase.createLayer('perigo', [this.tilesetTileper])
    this.layerArvores = this.tilemapFase.createLayer('fundo', [this.tilesetTilearv])
    this.layerBlocos = this.tilemapFase.createLayer('fundo', [this.tilesetTilebloc, this.tilesetTilebloc2, this.tilesetTiledec, this.tilesetTiledmapa3, this.tilesetTilesp])
    this.layerEscada = this.tilemapFase.createLayer('fundo', [this.tilesetTilebloc])
    this.layerDecoracao1 = this.tilemapFase.createLayer('fundo', [this.tilesetTilebloc, this.tilesetTiledec])
    this.layerDecoracao2 = this.tilemapFase.createLayer('fundo', [this.tilesetTilebloc, this.tilesetTilearv, this.tilesetTiledec])
    this.layerPlaca = this.tilemapFase.createLayer('fundo', [this.tilesetTiledec])
    this.layerTrave1 = this.tilemapFase.createLayer('fundo', [this.tilesetTiletrave])
    this.layerTrave2 = this.tilemapFase.createLayer('fundo', [this.tilesetTiletrave])
    this.layerTrave3 = this.tilemapFase.createLayer('fundo', [this.tilesetTiletrave])
    
    /*colisoes*/
    this.layerPerigo.setCollisionByProperty({ colisao: true })
    this.layerBlocos.setCollisionByProperty({ colisao: true })

    this.physics.add.collider(this.personagem, this.layerPerigo)
    this.physics.add.collider(this.personagem, this.layerBlocos)

    /*personagens*/
    this.personagem = this.physics.add.sprite (400, 225, 'skilerstopdireita')
    
    /*animacoes*/

    /*animação moeda*/
    this.anims.create({
      key: 'moeda-girando',
      frames: this.anims.generateFrameNumbers('moeda', {
        start: 0,
        end: 3
      }),
      frameRate: 8,
      repeat: -1
    })

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
