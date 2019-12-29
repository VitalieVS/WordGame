let score = 0;
let tick = new Audio('sounds/hit.mp3');
let holy = new Audio('sounds/holy.mp3');
let domina = new Audio('sounds/domin.mp3');
let godlike = new Audio('sounds/godlike.mp3');
let unstop = new Audio('sounds/unstop.mp3');
let wicked = new Audio('sounds/wicked.mp3');
document.getElementById("startGame").addEventListener("click", startTheGame);

function startTheGame() {
    hideScore();
    getFieldToClear();
    timerStart();
    showInput();
}

function showInput() {
    let input = document.getElementById("text-game-input");
    input.style.display = 'block';
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

function timerStart() {
    let time = 0;
    let startTimer = setInterval(function () {
        time += 1;
        textModify(time);
        if (time >= 3) {
            clearInterval(startTimer);
            timerControl();
            startText();
        }
    }, 1000)
}

function textModify(time) {
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

function deleteTimer(timer) {
    timer.parentNode.removeChild(timer);
}

function startText() {
    createText();
    moveText();
}

function createText() {
    let text = Math.random().toString(36).substring(2, 6) + Math.random().toString(36).substring(2, 6);
    addNewDiv(text)
}

function addNewDiv(text) {
    let textDiv = document.createElement("div");
    textDiv.className = 'text-game';
    textDiv.innerHTML = text;
    document.getElementById('contain').appendChild(textDiv);
}

function moveText() {
    let text = document.getElementsByClassName("text-game");
    let time = setInterval(frame, 15); //this one will come random
    let pos = 0;
    function frame() {
        if (pos === 600) {
            checkInput(text[0]);
            destroyText(text[0]);
            clearInterval(time);
        } else {
            pos++;
            text[0].style.top = pos + 'px';
        }
    }
}

function destroyText(text) {
    text.parentNode.removeChild(text);
}

function checkInput(textToCheck){
    let s = textToCheck.innerHTML;
    let toCheck = document.getElementById("text-game-input").value;
    if (s === toCheck){
        displayScore();
        checkScore();
        createText();
        document.getElementById("text-game-input").value = '';
        moveText();
    } else{
        console.log('false');
    }
}

function displayScore(){
    tick.play();
    score++;
    document.getElementById("score").innerHTML = "Score:" + score;
}

function hideScore(){
    document.getElementById("score").style.display = "block";
}

function checkScore(){
    if (score > 5 && score < 7){
        document.getElementById("messageBox").innerHTML = "Dominating";
        domina.play();
    }

    if (score > 7 && score < 13){
        document.getElementById("messageBox").innerHTML = "Unstoppable";
        unstop.play();
    }

    if (score > 13 && score < 17){
        document.getElementById("messageBox").innerHTML = "Wicked sick!";
        wicked.play();
    }

    if (score > 17 && score < 21){
        document.getElementById("messageBox").innerHTML = "Godlike!";
        godlike.play();
    }

    if (score > 25 && score < 27){
        document.getElementById("messageBox").innerHTML = "Hooooly shiiit!";
        holy.play();
    }
}