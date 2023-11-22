/* eslint-disable no-undef */
/* Importação de objetos */
import config from './config.js'
import cena0 from './cena0.js'
import cenatutorial from './cena-tutorial.js'
import cenapanfleto from './cena-panfleto.js'
import cenaanuncio from './cena-anuncio.js'
import cenadialogo from './cena-dialogo.js'
import cena1 from './cena1.js'
import cenapersonagem from './cenapersonagem.js'
import cenaprologo from './cenaprologo.js'
import cena2 from './cena2.js'
import gameover from './gameover.js'
import tentarnovamente from './tentarnovamente.js'
import encerramento from './encerramento.js'

/* Definição do objeto Game */
class Game extends Phaser.Game {
  constructor () {
    super(config)

    this.id = 6 // Jogo Pesadelos Lúcidos, id 1
    this.valor = 100 // crédito padrão em Tijolinhos quando termina o jogo

    let iceServers
    if (window.location.host === 'feira-de-jogos.sj.ifsc.edu.br') {
      iceServers = [
        {
          urls: 'stun:feira-de-jogos.sj.ifsc.edu.br'
        },
        {
          urls: 'turns:feira-de-jogos.sj.ifsc.edu.br',
          username: 'adcipt',
          credential: 'adcipt20232'
        }
      ]
    } else {
      iceServers = [
        {
          urls: 'stun:stun.l.google.com:19302'
        }
      ]
    }
    this.iceServers = { iceServers }
    this.audio = document.querySelector('audio')

    this.socket = io()
    this.socket.on('connect', () => {
      console.log('Conectado ao Servidor')
    })

    this.estadoPersonagem = {}
    this.scoreMoeda = {
      score: 0
    }
    this.vida = {
      frameCoracoes: 0
    }
    this.scoreEstrela = {
      score: 0
    }

    this.scene.add('cena0', cena0)
    this.scene.add('cena-tutorial', cenatutorial)
    this.scene.add('cena-panfleto', cenapanfleto)
    this.scene.add('cena-anuncio', cenaanuncio)
    this.scene.add('cena-dialogo', cenadialogo)
    this.scene.add('cena1', cena1)
    this.scene.add('cenapersonagem', cenapersonagem)
    this.scene.add('cenaprologo', cenaprologo)
    this.scene.add('cena2', cena2)
    this.scene.add('gameover', gameover)
    this.scene.add('tentar-novamente', tentarnovamente)
    this.scene.add('encerramento', encerramento)

    this.scene.start('cena0')
  }
}
/* Criação do objeto Game */
window.onload = () => {
  window.game = new Game()
}
