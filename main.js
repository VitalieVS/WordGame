document.getElementById("startGame").addEventListener("click", startTheGame);

function startTheGame() {
    getFieldToClear();
    timerStart();
}

function getFieldToClear() {
    let div = document.getElementById("welcome");
    let description = document.getElementById("descr");
    let startG = document.getElementById("start");
    clearField(div, description, startG);
}

function clearField(div, description, startG) {
    div.parentNode.removeChild(div);
    description.parentNode.removeChild(description);
    startG.parentNode.removeChild(startG);
}

function timerStart(){
    let time = 0;
    document.write('<div id="timer">'+time+'</div>');
    let startTimer = setInterval(function () {
        time += 1;
        textModify(time);
        if (time >= 3){
            clearInterval(startTimer);
            timerControl();
        }
    }, 1000)
}

function textModify(time){
    let timer = document.getElementById("timer");
    timer.innerHTML = time;
}

function timerControl() {
    getTimerData();
}

function getTimerData() {
    let timer = document.getElementById("timer");
    deleteTimer(timer);
}

function deleteTimer(timer){
    timer.parentNode.removeChild(timer);
}