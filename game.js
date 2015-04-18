var game = new Phaser.Game(800, 600, Phaser.AUTO, 'game', { preload: preload, create: create, update: update });

function preload() {
    game.load.image('background', 'assets/background.png');
    game.load.image('test_flower', 'assets/test_flower.png');
    game.load.image('plot', 'assets/plot.png');
    //game.stage.backgroundColor = 0x0EE68;
}

function create() {
    var background = game.add.sprite(0,0, 'background');
    background.tint = 0x0EE68;
    game.add.sprite(64,64, 'plot');
    game.add.sprite(64,8, 'test_flower');
}

function update() {
    //background.tint = 0xFFFFFF;
}