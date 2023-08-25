/* eslint-disable no-undef */
/* Importação de objetos */
import config from './config.js'
import cena0 from './cena0.js'
import cena1 from './cena1.js'
import cena2 from './cena2.js'

/* Definição do objeti Game */
class Game extends Phaser.Game {
  constructor () {
    super(config)

    this.scene.add('cena0', cena0)
    this.scene.add('cena1', cena1)
    this.scene.add('cena2', cena2)

    this.scene.start('cena0')
  }
}
/* Criação do objeto Game */
window.onload = () => {
  window.game = new Game()
}
