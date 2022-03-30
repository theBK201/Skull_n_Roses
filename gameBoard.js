var config = {
    type: Phaser.AUTO,
    width: 1300,
    height: 820,
    parent: 'tableDiv',
    physics: {
        default: 'arcade',
        arcade: {
            debug: true,
        }
    },
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var game = new Phaser.Game(config);
var coaster1;
var coaster2;
var mat1;
var mat2;
var mat3;
var players;

function preload ()
{
    // this.load.spritesheet('mats', '/assets/mats.png', { frameWidth: 270, frameHeight: 270, endFrame: 5 })
    // this.load.spritesheet('coasters', '/assets/coasters.png', { frameWidth: 250, frameHeight: 250, endFrame: 5 })
    this.load.image('coaster1', 'assets/Coasters/coaster1.1.png')
    this.load.image('coaster1_2', 'assets/Coasters/coaster1.2.png')
    this.load.image('mat1', 'assets/Mats/mat1.png')
    this.load.image('mat2', 'assets/Mats/mat2.png') 
    this.load.image('mat3', 'assets/Mats/mat3.png') 
    this.load.image('gameBackground', 'assets/gameBackground.png')
}

function create ()
{
    // var config = {
    //     key: 'spiningAnimation',
    //     frames : this.anims.generateFrameNumbers('spiningAnimation', { start: 0, end: 5, first: 5 }),
    //     frameRate: 20,
    //     repeat: -1
    // };

    // this.anims.create(config)
    // this.add.sprite(200,200,'mats');
    // this.add.sprite(400,300, 'coasters').play(spiningAnimation);

    var gameBackground = this.add.image(645,410,'gameBackground');
    gameBackground.setScale(0.6);

    mat1 = this.add.image(400,250,'mat1')
    mat1.setScale(0.6)
    mat2 = this.add.image(650,600,'mat2')
    mat2.setScale(0.6)
    mat3 = this.add.image(900,250,'mat3')
    mat3.setScale(0.6)

    const player1 = this.add.text(620,700, 'Player 1');
    const player2 = this.add.text(360,350, 'Player 2');
    const player3 = this.add.text(860,350, 'Player 3');
    

    coaster1 = this.add.sprite(200,200,'coaster1').setInteractive();
    coaster1.setScale(0.5);

    this.input.setDraggable(coaster1);

    this.input.on('drag', function (pointer, gameObject, dragX, dragY){
        gameObject.x = dragX;
        gameObject.y = dragY;
    });
    
}

function update ()
{
}