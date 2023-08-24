/* eslint-disable no-undef */
/* Importação de objetos */
import config from './config.js'
import cena0 from './cena0.js'

/* Definição do objeti Game */
class Game extends Phaser.Game {
  constructor () {
    super(config)

    this.scene.add('cena0', cena0)

    this.scene.start('cena0')
  }
}
/* Criação do objeto Game */
window.onload = () => {
  window.game = new Game()
}
