var form;
var gameState=0
var player;
var game;
var playerCount
function setup(){
    database=firebase.database();

    createCanvas(500,500);
    game=new Game();
    game.getState()
    game.start();

   
}

function draw(){
    background("white");
    

    
}





