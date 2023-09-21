/* Configuração do objeto Game */

export default {
  type: Phaser.AUTO,
  pixelArt: true,
  width: 800,
  height: 450,
  input: {
    activePointers: 3
  },
  parent: 'game-container',
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 700 },
      debug: false
    }
  },
  scale: {
    mode: Phaser.Scale.FIT,
    parent: 'game-container',
    autoCenter: Phaser.Scale.CENTER_BOTH,
    width: 800,
    height: 450
  }
}
