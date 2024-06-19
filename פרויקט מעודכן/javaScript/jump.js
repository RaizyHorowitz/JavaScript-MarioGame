//=====================================================================
//If key pressed is space(32) or arrow up(38) sends to func jumpAction.
//=====================================================================

let posPerson = 0;
function callJumpActionByEvent(event) {
    if (flag != 1){
        return;
    }
    if(posPerson >= 100 && posPerson < -10 ){
        return;
    }
    if (event.which !== 38 && event.which !== 32) {
        return;
    }
    else {
        jumpMusic();
        jumpUp();
        // jumpAction();
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

//========================================================
//Calls func jumpMusic-play the music of jump. and jump.
//========================================================
function jumpAction() {
    clearInterval(idPerson);
    idPerson = setInterval(jumpdown, speedPosPerson);
}

//========================================================

//========================================================
//Character jumps up.
//=====================
function jumpUp() {
    if (posPerson >= 30) {
        clearInterval(idPerson);
    }
    else {
        posPerson += speedPosPersonDown;
        person.style.top = posPerson + 'px';
    }

}

//========================================================
//Character jumps down.
//=====================
function jumpdown() {
    if (posPerson <= -100) {
        clearInterval(idPerson);
        //go back to pos start
        idPerson = setInterval(jumpUp, speedPosPerson);
    }
    else {
        posPerson -= 2;
        person.style.top = posPerson + 'px';
    }
}

