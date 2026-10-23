let timer = document.getElementById("timer");
let openCmds = document.getElementById("open_controls");

let startButton = document.getElementById("start");
let stopButton = document.getElementById("stop");
let resetButton = document.getElementById("resetButton");

function startTimer(){
    let timerContents = timer.textContent;
    timerContents = timerContents.split(":");
    let hrs = timerContents[0];
    let mins = timerContents[1];
    let secs = timerContents[2];
    let ms = timerContents[3];
    start = parseInt( Date.now() - hrs * 3600 * 1000 - mins * 60 * 1000 - secs * 1000 - ms );
    return start;
}
function drawTimer(stTime){
    dt = Date.now() - stTime;
    hrs = dt % (3600 * 1000);
    mins = (dt - hrs * 3600 * 1000) % (60 * 1000);
    secs = (dt - hrs * 3600 * 1000 - mins * 60 * 1000) % 1000;
    ms = parseInt(dt / 1000)
    timer.textContent = `"${String(hrs).padStart(2, "0")}:"` + 
        `"${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}:${String(ms).padStart(4, "0")}"`;
}

button.addEventListener("start", startTimer);
