//=====================================================================
//If key pressed is space(32) or arrow up(38) sends to func jumpAction.
//=====================================================================
let jump = document.addEventListener("keydown", callJumpActionByEvent);
function callJumpActionByEvent(event) {
    if(keyBoardFlag != 1){
        return;
    }
    if(posPerson >= -100 && posPerson < -10 ){
        return;
    }
    if (event.which !== 38 && event.which !== 32) {
        return;
    }
    else {
        jumpMusic();
        jumpAction();
    }
}

//=======================================================
//sound jump up.
//==============
function jumpMusic() {
    let audioJump = document.getElementById("audioJump");
    audioJump.src = "../mp4/jumpSound.WAV";
    audioJump.play();
}

//========================================================
//action jump.
//========================================================
let speedPosPerson = 1;
let charectorAction = null;
function jumpAction() {
    clearInterval(charectorAction);
    charectorAction = setInterval(jumpUp, speedPosPerson);
}
//========================================================


//Character jumps up.
//=====================
let posPerson = 25;
function jumpUp() {
    // checks if the person is already up:
    if (posPerson <= 30) {
        clearInterval(charectorAction);
        //go back to position at start:
        charectorAction = setInterval(jumpDown, speedPosPerson);
    }
    else {
        posPerson -= 2;
        person.style.top = posPerson + 'px';
    }
}

//========================================================
//Character jumps down.
//=====================
let speedPosPersonDown = 0.8;
function jumpDown() {
    if (posPerson < 122) {
        posPerson += speedPosPersonDown;
        person.style.top = posPerson + 'px';
    }
}

//========================================================


