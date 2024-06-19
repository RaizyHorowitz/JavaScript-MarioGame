//---- game ---//
let jump = document.addEventListener("keydown", callJumpActionByEvent);
var idPerson = null;
let count = 0;
let countStarts = 0;
let text = 'game over';
let person = document.getElementById("person");
let bonus = document.getElementById("imgbonus");
let posbonus = 0;
let speedScore = 100;
let startGameBtn = document.getElementById('startGame');
let level2_text = 'level 2';
let level3_text = 'level 3';
let flag = 0;

//--- start game ---//
function startGame() {
    startGamePlayAudio();
    flag = 1;
    startGameBtn.style.visibility = 'hidden';
    // the score count //
    let time = setInterval(countScore, speedScore);
    createNewObject();
    createNewStar();
    let car = document.getElementById('imgObstial');
    car.style.visibility = "visible";
    let star = document.getElementById('imgbonus');
    star.style.visibility = "visible";
}

//--- background sound!! ---//
function startGamePlayAudio() {
    let audio = document.getElementById("Audio");
    audio.src = "../mp4/backgroundMp4.mp3";
    audio.play();
}

//--- Game Over, Shows game over text.... ---//
function gameOver(text) {
    flag = 0;
    gameOverMp3();
    // speedPosPersonDown = 20;
    let overGame = document.getElementById('game_over');
    overGame.innerText = text;
    countUp = 0;
    overGame.style.position = 'fixed';
    overGame.style.textAlign = 'center';
    overGame.style.fontSize = '5vw';
    overGame.style.marginLeft = '11%';
    overGame.style.marginTop = '9.5%';
    overGame.style.zIndex = '50';
    overGame.style.transform = 'rotateX(0.9)';
    overGame.style.transition = '1s';
    overGame.style.textShadow = "3px 0 white";
    overGame.style.fontWeight = 'bold';
    speedPosPersonDown = 0.8;
    overGame.style.position = 'visibility';
    setTimeout(startGameAgain, 3000);
    return;
}                                                

//--- sound game over ---//
function gameOverMp3() {
    let audio = document.getElementById("Audio");
    audio.pause();
    audio.currentTime = 0;
    let gameOverMusic = document.getElementById("gameOverMusic");
    gameOverMusic.src = "../mp4/gameover.wav";
    gameOverMusic.play();
}

//--- reload ---//
function startGameAgain() {
    location.reload();
}
let position = 300;

//========================================================
//Counts the score.
//=================
let counting = 0;
let countUp = 1;
function countScore() {
    counting += countUp;
    scores.innerText = 'score: ' + counting;
    if (counting == 200){
        level2(level2_text);
    }
    if (counting == 400){
        level3(level3_text);
    }
}
//========================================================


function level2(level2_text) {
    speedPosPersonDown = 20;
    let next_level = document.getElementById('level2');
    next_level.innerText = level2_text;
    next_level.style.position = 'fixed';
    next_level.style.textAlign = 'center';
    next_level.style.fontSize = '5vw';
    next_level.style.marginLeft = '11%';
    next_level.style.marginTop = '9.5%';
    next_level.style.zIndex = '50';
    next_level.style.transform = 'rotateX(0.9)';
    next_level.style.transition = '1s';
    next_level.style.textShadow = "3px 0 white";
    next_level.style.fontWeight = 'bold';
    speedPosPersonDown = 0.8;
    next_level.style.position = 'visibility';
    setTimeout(level_up, 2100);
    return;
}

function level3(level3_text){
    speedPosPersonDown = 20;
    let last_level = document.getElementById('level3');
    last_level.innerText = level3_text;
    last_level.style.position = 'fixed';
    last_level.style.textAlign = 'center';
    last_level.style.fontSize = '5vw';
    last_level.style.marginLeft = '11%';
    last_level.style.marginTop = '9.5%';
    last_level.style.zIndex = '50';
    last_level.style.transform = 'rotateX(0.9)';
    last_level.style.transition = '1s';
    last_level.style.textShadow = "3px 0 white";
    last_level.style.fontWeight = 'bold';
    speedPosPersonDown = 0.8;
    next_level.style.position = 'visibility';
    setTimeout(level_up_up, 2100);
    return
}
function level_up(){
    let nextlevel = document.getElementById('level2');
    nextlevel.innerText = "";
    obstacle2 = document.getElementById('imgObstial');
    obstacle2.src = "../pictures/tenor.gif"
    // speed = 0.00001;
    bonus2 = document.getElementById('imgbonus');
    bonus2.src = "../pictures/cana.png";
    return;
}

function level_up_up(){
    let last_level = document.getElementById('level3');
    last_level.innerText = "";
    obstacle2 = document.getElementById('imgObstial');
    obstacle2.src = "../pictures/sonic.gif";
    speed = 1.4;
    bonus2 = document.getElementById('imgbonus');
    bonus2.src = "../pictures/ballon.png";
    return;
}
