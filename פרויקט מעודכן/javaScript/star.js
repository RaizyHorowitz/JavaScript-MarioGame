
function createNewStar() {
    let bonusImg = document.createElement('img');
    bonus.appendChild(bonusImg);
    StarNewPos();
}
//===============================================
//Create new bonus.
//====================
let tr;
function StarNewPos() {
    posbonus = 0;
    flagStars = 0;
    clearInterval(tr);
    tr = setInterval(StarMovingAction, 16);
}


//===============================================
//Create new bonuss.
//====================
function setStarMovingAction() {
    ballb = setInterval(StarMovingAction, speed);
}
//===============================================


//===============================================
let flagStars = 0;
function StarMovingAction() {
    if (posbonus >= 570) {
        // clearInterval(idbonus);
        bonus.style.visibility = 'hidden';
        bonus.style.right = 0 + 'px';
        bonus.style.visibility = 'visible';
        // to add another obstacle 
        createNewStar();
    }
    else if (posbonus >= 400 && posbonus <= 480 && posPerson <= -100 && posPerson > -60) {
    }
    else if (posbonus > 440 && posbonus < 480 && posPerson <= 0 && posPerson > -100) {
        addStar();
    }
    else {
        posbonus += 10;
        bonus.style.right = posbonus + 'px';
    }
}
//==========================================================================


//==========================================================================
//Add star
//========
function addStar() {
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

//==========================================================================
//---audio bonus---//
function starMp3() {
    let starAudio = document.getElementById("gameOverMusic");
    starAudio.src = "../mp4/star.WAV";
    starAudio.play();
}
