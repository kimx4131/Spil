//Min første bane
let maze = [
    [3,5,1,0,0,0,0,0,3,1,0,0,0,0,1,0,3,1,2,5],
    [0,0,0,0,0,1,1,0,0,1,3,0,1,0,1,0,5,1,0,0],
    [0,0,1,1,0,0,1,1,0,1,0,0,1,0,0,0,0,1,0,1],
    [0,0,0,1,1,0,0,1,0,0,0,0,1,1,1,1,0,1,0,1],
    [1,1,0,0,0,0,3,1,1,1,0,1,1,0,0,0,0,1,0,0],
    [0,0,0,1,0,1,1,1,0,0,0,1,0,0,1,1,1,1,1,0],
    [0,1,1,1,1,1,0,1,0,3,1,1,0,1,1,0,0,0,1,0],
    [0,0,0,0,1,3,0,0,0,0,1,3,0,0,1,0,1,0,1,0],
    [0,0,1,0,1,1,1,1,0,1,1,1,1,0,1,0,1,0,1,0],
    [0,3,1,0,-1,0,5,1,0,0,0,5,1,0,0,0,1,0,0,0],
];

function toNewMaze(){
    setTimeout(function(){location.href = "vandt.html";}, 1000);
}

function diedMine(){
    setTimeout(function(){location.href = "../index.html";}, 500);
}

let tileSize = 50;

mineImg=new Image();
mineImg.src='../img/player.png';

pointImg=new Image();
pointImg.src='../img/point.jpg';


let wallColor = "white";
let goalColor = "#D4D9DB";
let mineColor = "#C8AB8D";
let mazeColor = "#7E766E";
let playerColor = "#2E2C2D";


// LYDE 
function soundWalk(){
    let audio = new Audio('../sound/bird.mp3');
    audio.play();
}

function soundWall(){
    let audio = new Audio('../sound/boom.mp3');
    audio.play();
}

function soundMine(){
    let audio = new Audio('../sound/mine.mp3');
    audio.play();
}

function soundClapping(){
    let audio = new Audio('../sound/clapping.mp3');
    audio.play();
}