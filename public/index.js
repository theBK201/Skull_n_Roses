var config = {
    type: Phaser.AUTO,
    scale: {
        mode: Phaser.Scale.FIT,
        width: 1300,
        height: 860,
        parent: 'tableDiv'
    },
    // parent: 'tableDiv',
    // physics: {
    //     default: 'arcade',
    //     arcade: {
    //         debug: true,
    //     }
    // },
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var game = new Phaser.Game(config);
// var coaster1;
// let coaster2;
// let coaster3;
// let mat1;
// let mat2;
// let mat3;
// let players;
// let timer=0;
// let timerText = "";
// let interval;
// var clickedDisk = false;
// var diskPlaced = false;
// var infoBox;
// var infoBoxText;
// var nameOfCoaster;
// var flowerPlaced = 0;
// var skullsPlaced = 0;


function preload ()
{
    this.load.spritesheet('mats', '/public/assets/mats.png', { frameWidth: 280, frameHeight: 280})
    this.load.spritesheet('coasters', '/public/assets/coasters.png', { frameWidth: 250, frameHeight: 250})
    this.load.image('gameBackground', '/public/assets/gameBackground.png')
    this.load.image('dialogBox', '/public/assets/dialog_box.png')
}

function create ()
{
//     var self = this;
//     this.socket = io();
//     this.socket.on('currentPlayers', function(players){
//         Object.keys(players).forEach(function (id){
//             if(players[id].playerId === self.socket.id){
//                 addPlayer(self, players[id]);
//             }
//         });
//     });
//     // var config = {
//     //     key: 'spiningAnimation',
//     //     frames : this.anims.generateFrameNumbers('spiningAnimation', { start: 0, end: 5, first: 5 }),
//     //     frameRate: 20,
//     //     repeat: -1
//     // };

//     // this.anims.create(config)
//     // this.add.sprite(200,200,'mats');
//     // this.add.sprite(400,300, 'coasters').play(spiningAnimation);

    var gameBackground = this.add.image(645,445,'gameBackground');
    gameBackground.setScale(0.6);
//     // var infoDom = this.add.dom(1110,120, 'div', infoBoxStyle, 'Sorry, you have already placed a disk on your mat.')
//     infoBox = this.add.image(1110,120,'dialogBox')
//     infoBoxText = this.add.text(1000,110, 'Sorry, you have already \nplaced a disk on your mat.', {color:'#090b0d'});
//     infoBox.setScale(0.1);
//     infoBoxText.setScale(0.8);

//     infoBox.visible = false;
//     infoBoxText.visible = false;
  

//     var graphics = this.make.graphics().fillStyle(0x612c0c).fillRect(0, 0, 1400, 40);

//     graphics.generateTexture('hudbar', 1400, 40);

//     graphics.destroy();

//     this.add.image(600, 10, 'hudbar');

//     timerText = this.add.text(1100,80,'Timer: 0', { fontSize: '16px'});

//     mat1 = this.add.sprite(400,280,'mats', 6);
//     mat1.setScale(0.6);
//     mat1.setAngle(40);
//     mat2 = this.add.sprite(650,620,'mats', 7);
//     mat2.setScale(0.6);
//     mat3 = this.add.sprite(900,280,'mats', 8);
//     mat3.setScale(0.6);
//     mat3.setAngle(55);

//     var player1 = this.add.text(620,720, 'Player 1');
//     var player2 = this.add.text(290,240, 'Player 2');
//     player2.setAngle(310);
//     var player3 = this.add.text(965,180, 'Player 3');
//     player3.setAngle(58);

//     //Player 1
//     coaster1 = this.add.sprite(500,680,'coasters', 6).setInteractive();
//     coaster2 = this.add.sprite(480,680,'coasters', 6).setInteractive();
//     coaster3 = this.add.sprite(460,680,'coasters', 6).setInteractive();
//     skullCoaster1 = this.add.sprite(800,680,'coasters', 12).setInteractive();
//     coaster1.setScale(0.5);
//     coaster2.setScale(0.5);
//     coaster3.setScale(0.5);
//     skullCoaster1.setScale(0.5);

//     inteval = setInterval(function(){
//         timer += 1;
//         timerText.setText("Timer: " + timer);
//     }, 1000);

//     const passButton = new Button(600,13, 'Pass', this, () => console.log('Player: ' + player1.text + ' passed.'))
//     const bidOne = new Button(670,13, '1', this, () => console.log('Player: ' + player1.text + ' bids 1 disc(s).'))
//     const bidTwo = new Button(720,13, '2', this, () => console.log('Player: ' + player1.text + ' bids 2 disc(s).'))
//     const bidThree = new Button(770,13, '3', this, () => console.log('Player: ' + player1.text + ' bids 3 disc(s).'))
//     const bidFour = new Button(820,13, '4', this, () => console.log('Player: ' + player1.text + ' bids 4 disc(s).'))
    
}

function update ()
{
//     if(clickedDisk == true){
//         diskPlaced = true;
//         clickedDisk = false;
//     }

//     coaster3.on('pointerdown', function (pointer){
//         clickedDisk = true;
//         // if(diskPlaced == true){
//         //     infoBox.visible = true;
//         //     infoBoxText.visible = true;
//         //     setInterval(hideInfoBox, 6000);
//         // }
//         placeCoasters('coaster3');
//         coaster3.setTexture('coasters', 0);
//         flowerPlaced += 1;
//     } );

//     coaster2.on('pointerdown', function (pointer){
//         clickedDisk = true;
//         placeCoasters('coaster2');
//         coaster2.setTexture('coasters', 0);
//     } );

//     coaster1.on('pointerdown', function (pointer){
//         clickedDisk = true;
//         placeCoasters('coaster1');
//         coaster1.setTexture('coasters', 0);
//     } );

//     skullCoaster1.on('pointerdown', function (pointer){
//         clickedDisk = true;
//         placeCoasters('skullCoaster1');
//         skullCoaster1.setTexture('coasters', 0);
//         skullsPlaced += 1;
//     } );

}

// function generateCoasters(){

// }

// function placeCoasters(coasterName){
//     if(coasterName == 'coaster3'){
//         if(skullCoaster1.x == 650 && skullCoaster1.y == 620){
//             coaster3.x = 650;
//             coaster3.y = 600;
//             coaster3.setDepth(1);
//         }else{
//             coaster3.x = 650;
//             coaster3.y = 620;
//         }
//     }

//     if(coasterName == 'coaster2'){
//         if(skullCoaster1.x == 650 && skullCoaster1.y == 600){
//             coaster2.x = 650;
//             coaster2.y = 580;
//             coaster2.setDepth(1);
//         }else{
//             coaster2.x = 650;
//             coaster2.y = 600;
//             coaster2.setDepth(1);
//         }
//     }

//     if(coasterName == 'coaster1'){
//         if(skullCoaster1.x == 650 && skullCoaster1.y == 580){
//             coaster1.x = 650;
//             coaster1.y = 560;
//             coaster1.setDepth(3);
//         }else{
//             coaster1.x = 650;
//             coaster1.y = 580;
//             coaster1.setDepth(2);
//         }
//     }

//     if(coasterName == 'skullCoaster1'){
//         if (coaster3.x == 650 && coaster3.y == 620){
//             skullCoaster1.x = 650;
//             skullCoaster1.y = 600;
//         }else{
//             skullCoaster1.x = 650;
//             skullCoaster1.y = 620;
//         }
//         if (coaster2.x == 650 && coaster2.y == 600){
//             skullCoaster1.x = 650;
//             skullCoaster1.y = 580;
//             skullCoaster1.setDepth(2);
//         }
//         if (coaster1.x == 650 && coaster1.y == 580){
//             skullCoaster1.x = 650;
//             skullCoaster1.y = 560;
//             skullCoaster1.setDepth(3);
//         }
//     }
// }

// function hideInfoBox(){
//         if(infoBox.visible == true){
//             infoBox.visible = false;
//             infoBoxText.visible = false;
//     }
// }

// class Button{
//     constructor(x, y, label, scene, callback){
//         const button = scene.add.text(x, y, label)
//             .setOrigin(0.5)
//             .setPadding(10)
//             .setStyle({backgroundColor: '#197faf'})
//             .setInteractive({ useHandCursor: true })
//             .on('pointerdown', () => callback())
//     }
// }