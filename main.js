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
    let startTimer = setInterval(function () {
        time += 1;
        textModify(time);
        if (time > 3){
            clearInterval(startTimer);
            timerControl();
            startText();
        }
    }, 1000)
}

function textModify(time){
    let timer = document.getElementById("timer");
    timer.innerHTML = "Start in... " + time + " seconds";
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

function startText() {
    createText();
    moveText();
}

function createText() {
    let text = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
    addNewDiv(text)
}

function addNewDiv(text){
    let textDiv = document.createElement("div");
    textDiv.className = 'text-game';
    textDiv.innerHTML = text;
    document.getElementById('contain').appendChild(textDiv);
}

function moveText(){
    let text = document.getElementsByClassName("text-game");
    let time = setInterval(frame, 10); //this one will come random
    let pos = 0;
    function frame(){
        if (pos === 600){
            destroyText(text[0]);
            clearInterval(time);
        } else{
            pos++;
            text[0].style.top = pos + 'px';
        }
    }
}

function destroyText(text){
    text.parentNode.removeChild(text);
}