let obstacle;
let speed = 7;
let obstial = document.getElementById("imgObstial");
let posObstial = 0;
let countobstacle = 0;
let speedAbstical = 1;
//===============================================
//Create new obstacle.
//====================
function createNewObject() {
    posObstial = 0;
    clearInterval(obstacle);
    countobstacle ++ ;
    if (countobstacle < 20) {
        speedAbstical += 0.2;
    }
    obstacle = setInterval(obstacleMoving, speed);
}
//===============================================


//===============================================
//obstacle moving;
//===============================================
function obstacleMoving() {
    //check if gameOver;
    if (posObstial > 440 && posObstial < 480 && posPerson <= 250 && posPerson > 210) {
        gameOver(text);
        return;
    }
    else if (posObstial > 440 && posObstial < 480 && posPerson <= 40 && posPerson > -10) {
        gameOver(text);
        return;
    }
    if (posObstial >= 560) {
        count++;
        obstial.style.visibility = 'hidden';
        obstial.style.right = 0 + 'px';
        obstial.style.visibility = 'visible';
        //to add another obstacle 
        createNewObject();
    }
    else {
        posObstial += speedAbstical;
        obstial.style.right = posObstial + 'px';
    }
}

posPerson = 25;
let speedPosPerson = 1;
let speedPosPersonDown = 0.8;
