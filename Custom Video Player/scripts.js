const PLAYER = document.querySelector(".player");
const VIDEO = PLAYER.querySelector(".viewer");
const BUTTONS = PLAYER.querySelectorAll("button");
const VOLUME_SPEED = PLAYER.querySelectorAll("input");
const PROGRESS_BAR = PLAYER.querySelector(".progress");

let videoStatus = false;
let mouseOnControls = false;
let mouseOnBar = false;
let currentProgress;
let mouseDown = false;

console.dir(PROGRESS_BAR);

setInterval(() => progressBarChanges(), 10)

function progressBarChanges() {
    currentProgress = (VIDEO.currentTime / VIDEO.duration) * 100
    PROGRESS_BAR.childNodes[1].setAttribute("style", "flex-basis: " + currentProgress + "%;")
}

function toggleVideo() {
    if (!videoStatus) {
        VIDEO.play();
        BUTTONS[0].innerText = "| |";
        videoStatus = true;
    } else if (videoStatus) {
        VIDEO.pause();
        BUTTONS[0].innerText = "►";
        videoStatus = false;
    }
}

function scrub(e) {
    const scrubTime = (e.offsetX / PROGRESS_BAR.offsetWidth) * VIDEO.duration;
    VIDEO.currentTime = scrubTime;
}

VIDEO.addEventListener("click", toggleVideo);
BUTTONS[0].addEventListener("click", toggleVideo);

BUTTONS.forEach((button) => {
    if (button.dataset.skip) {
        button.addEventListener("click", () => VIDEO.currentTime += parseInt(button.dataset.skip)
            , false);
    }
})

//Detecting changes to the progress bar
PROGRESS_BAR.addEventListener('click', scrub);
PROGRESS_BAR.addEventListener('mousemove', (e) => mouseDown && scrub(e));
PROGRESS_BAR.addEventListener('mousedown', () => mouseDown = true);
PROGRESS_BAR.addEventListener('mouseup', () => mouseDown = false);

// Detecting changes to volume and/or speed
VOLUME_SPEED.forEach((element) => element.addEventListener("mousemove", () => {
    VIDEO.volume = VOLUME_SPEED[0].value;
    VIDEO.playbackRate = VOLUME_SPEED[1].value;
}, false))

