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
let coaster1;
let coaster2;
let coaster3;
let mat1;
let mat2;
let mat3;
let players;
let timer=0;
let timerText = "";
let interval;
var clickedDisk = false;
var diskPlaced = false;
var infoBox;
var infoBoxText;

function preload ()
{
    // this.load.spritesheet('mats', '/assets/mats.png', { frameWidth: 270, frameHeight: 270, endFrame: 5 })
    // this.load.spritesheet('coasters', '/assets/coasters.png', { frameWidth: 250, frameHeight: 250, endFrame: 5 })
    this.load.image('coaster1', 'assets/Coasters/coaster1.1.png')
    this.load.image('coaster1_2', 'assets/Coasters/coaster1.2.png')
    this.load.image('coaster1_3', 'assets/Coasters/coaster1.3.png')
    this.load.image('mat1', 'assets/Mats/mat1.png')
    this.load.image('mat2', 'assets/Mats/mat2.png') 
    this.load.image('mat3', 'assets/Mats/mat3.png') 
    this.load.image('gameBackground', 'assets/gameBackground.png')
    this.load.image('dialogBox', 'assets/dialog_box.png')
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
    // var infoDom = this.add.dom(1110,120, 'div', infoBoxStyle, 'Sorry, you have already placed a disk on your mat.')
    infoBox = this.add.image(1110,120,'dialogBox')
    infoBoxText = this.add.text(1000,110, 'Sorry, you have already \nplaced a disk on your mat.', {color:'#090b0d'});
    infoBox.setScale(0.1);
    infoBoxText.setScale(0.8);

    infoBox.visible = false;
    infoBoxText.visible = false;
  

    // var infoBoxStyle = {
    //     'width': '20px',
    //     'height': '20px',
    //     'font': '10px Arial'
    // };

    timerText = this.add.text(1100,45,'Timer: 0', { fontSize: '16px'});

    mat1 = this.add.image(400,250,'mat1')
    mat1.setScale(0.6)
    mat2 = this.add.image(650,600,'mat2')
    mat2.setScale(0.6)
    mat3 = this.add.image(900,250,'mat3')
    mat3.setScale(0.6)

    const player1 = this.add.text(620,700, 'Player 1');
    const player2 = this.add.text(360,350, 'Player 2');
    const player3 = this.add.text(860,350, 'Player 3');
    


    coaster1 = this.add.sprite(500,680,'coaster1_2').setInteractive();
    coaster2 = this.add.sprite(480,680,'coaster1_2').setInteractive();
    coaster3 = this.add.sprite(460,680,'coaster1_2').setInteractive();
    skullCoaster1 = this.add.sprite(800,680,'coaster1_3').setInteractive();
    coaster1.setScale(0.5);
    coaster2.setScale(0.5);
    coaster3.setScale(0.5);
    skullCoaster1.setScale(0.5);

    coaster4 = this.add.sprite(200,280,'coaster1').setInteractive();
    coaster5 = this.add.sprite(220,280,'coaster1').setInteractive();
    coaster6 = this.add.sprite(240,280,'coaster1').setInteractive();
    skullCoaster2 = this.add.sprite(550,280,'coaster1_3').setInteractive();
    coaster4.setScale(0.5);
    coaster5.setScale(0.5);
    coaster6.setScale(0.5);
    skullCoaster2.setScale(0.5);

    this.input.setDraggable(coaster4);
    this.input.setDraggable(coaster5);
    this.input.setDraggable(coaster6);
    this.input.setDraggable(skullCoaster2);

    coaster7 = this.add.sprite(1050,280,'coaster1').setInteractive();
    coaster8 = this.add.sprite(1070,280,'coaster1').setInteractive();
    coaster9 = this.add.sprite(1090,280,'coaster1').setInteractive();
    skullCoaster3 = this.add.sprite(750,280,'coaster1_3').setInteractive();
    coaster7.setScale(0.5);
    coaster8.setScale(0.5);
    coaster9.setScale(0.5);
    skullCoaster3.setScale(0.5);

    this.input.setDraggable(coaster7);
    this.input.setDraggable(coaster8);
    this.input.setDraggable(coaster9);
    this.input.setDraggable(skullCoaster3);

    this.input.on('drag', function (pointer, gameObject, dragX, dragY){
        gameObject.x = dragX;
        gameObject.y = dragY;
    });

    inteval = setInterval(function(){
        timer += 1;
        timerText.setText("Timer: " + timer);
    }, 1000);

    coaster3.on('pointerdown', function (pointer){
        clickedDisk = true;
        if(diskPlaced == true){
            infoBox.visible = true;
            infoBoxText.visible = true;
        }
    } );
    
}

function update ()
{
    if(clickedDisk == true){
        coaster3.x = 650;
        coaster3.y = 600;
        diskPlaced = true;
    }

    setInterval(hideInfoBox, 4000);

}

function generateCoasters(){

}

function hideInfoBox(){
        if(infoBox.visible == true){
            infoBox.visible = false;
            infoBoxText.visible = false;
    }
}