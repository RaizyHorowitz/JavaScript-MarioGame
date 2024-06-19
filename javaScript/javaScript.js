//---- game ---//
let person = document.getElementById("person");
let speedScore = 100;


function createBoard() {
    mario();
}

//--- start game ---//
let keyBoardFlag = 0;
function startGame() {
    keyBoardFlag = 1;
    startGamePlayAudio()
    let startGameBtn = document.getElementById('startGame');
    startGameBtn.style.visibility = 'hidden';
    //--- the score count ---/
    let time = setInterval(countScore, speedScore);
    createNewObject();
    StarNewPos();
}

//--- background sound!! ---//
function startGamePlayAudio() {
    let audio = document.getElementById("Audio");
    audio.src = "../mp4/backgroundMp4.mp3";
    audio.play();
}

//--- Game Over, Shows game over text.... ---//
let text = 'game over';
function gameOver(text) {
    keyBoardFlag = 0;
    gameOverMp3();
    let overGame = document.getElementById('game_over');
    overGame.innerText = text;
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
    overGame.style.position = 'visibility';
    countUp = 0;
    setTimeout(startGameAgain, 3000)
    createBoard();
    return;
}

//--- sound game over ---//
function gameOverMp3() {
    let audio = document.getElementById("Audio");
    audio.pause();
    // audio.currentTime = 0;
    let gameOverMusic = document.getElementById("gameOverMusic");
    gameOverMusic.src = "../mp4/gameOverMp3.WAV"
    gameOverMusic.play();
}
//=========================================================
//reload
//=========================================================
function startGameAgain() {
    location.reload();
}

//========================================================
//Counts the score.
//========================================================
let counting = 0;
let countUp = 1;
function countScore() {
    counting += countUp;
    scores.innerText = 'score: ' + counting;
}