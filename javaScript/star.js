//===============================================
//star action / bonuses
//==============================================
let posbonus = 0;
let countStarts = 0;
let bonus = document.getElementById("imgbonus");

//===============================================
//Create new bonus.
//====================
let starAction;
function StarNewPos() {
    posbonus = 0;
    flagStars = 0;
    clearInterval(starAction);
    if (keyBoardFlag == 1){
    starAction= setInterval(StarMovingAction, 9);}
    else{
        bonus.style.visibility = "hidden"
    }
}


//===============================================
//bonus at start.
//====================
function setStarMovingAction() {
    starAction = setInterval(StarMovingAction, speed);
}
//===============================================


//===============================================
let flagStars = 0;
function StarMovingAction() {
    if (posbonus >= 570) {
        bonus.style.visibility = 'hidden';
        bonus.style.right = 0 + 'px';
        bonus.style.visibility = 'visible';
        // to add another obstacle 
        StarNewPos();
    }
    else if (posbonus >= 400 && posbonus <= 480 && posPerson <= -100 && posPerson > -60) {
    }
    else if (posbonus > 440 && posbonus < 480 && posPerson <= 0 && posPerson > -100) {
        addBonusScore();
    }
    else {
        posbonus += 10;
        bonus.style.right = posbonus + 'px';
    }
}

//==========================================================================
//Add star to score
//==========================================================================
function addBonusScore() {
    if (flagStars == 0) {
        countStarts++;
        let countStartsCollect = document.getElementById('counterStars');
        let imgbonus = document.getElementById('imgbonus');
        imgbonus.style.visibility = "hidden";
        countStartsCollect.innerText = countStarts;
        flagStars = 1;
        starMp3();
    }
}

//=============================================
//---audio bonus---//
//=============================================
function starMp3() {
    let starAudio = document.getElementById("gameOverMusic");
    starAudio.src = "../mp4/star.WAV";
    starAudio.play();
}
