export default class cena4 extends Phaser.Scene {
  constructor () {
    super('gameover')
  }

  preload() {
    this.load.image('fundopreto', '../assets/cenas/fundopreto.png')
  }

  create() {
    this.bg = this.add.image(400, 225, 'fundopreto')

    this.messageRestart = this.add
      .text(175, 250, "[Voltar ao Menu]", {
        fontFamily: "monospace",
        font: "24px Courier",
        fill: "#cccccc",
      })
      .setInteractive();

    this.messageRestart.on(
      "pointerdown",
      function () {
        this.messageRestart.destroy();
        this.bg.destroy();
        this.game.scene.start("cena1");
      },
      this
    );

    
  }


  update() {

  }
}
