export default class abertura extends Phaser.Scene {
    constructor () {
        super('cena0')
}


preload () {this.load.image('pixil-frame-0', './pixil-frame-0.png')
}

create () {this.add.image(400, 225, 'pixil-frame-0')
}

update () {

}

}