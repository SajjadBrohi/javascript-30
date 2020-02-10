const VIDEOS_PLAYLIST = document.querySelector(".videos");
let allVideos = Array.from(VIDEOS_PLAYLIST.querySelectorAll("li"));

function extractTime(element, index) {
    return parseInt(element.dataset.time.split(":")[index])
}

allVideos = allVideos
    .map((e) => ((extractTime(e, 0)) * 60) + extractTime(e, 1))
    .reduce((a, c) => a + c)

let seconds = allVideos % 60;
let minutes = ((allVideos - seconds) / 60) % 60;
let hours = (allVideos - seconds - (minutes * 60)) / 60 / 60;

console.log(hours, minutes, seconds);
