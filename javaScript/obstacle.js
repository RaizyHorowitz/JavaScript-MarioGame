//===============================================
//Create new obstacle.
//====================
let obstial = document.getElementById("imgObstial");
let countobstacle = 0;
let speedAbstical = 1.2;
let obstacle;
let speed = 7;
let speedobstacle = 1;
let count = 0;


function createNewObject() {
    posObstial = 0;
    clearInterval(obstacle);
    countobstacle ++ ;
    if (countobstacle > 5) {
        speedAbstical += 0.2;
        countAbstical = 0;
    }
    obstacle = setInterval(obstacleMoving, speed);
}
//===============================================


//===============================================
//obstacle moving;
//===============================================
let posObstial = 0;
function obstacleMoving() {
    //check if gameOver;
    if (posObstial > 500 && posObstial < 550 && posPerson <= 250 && posPerson > 210) {
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
