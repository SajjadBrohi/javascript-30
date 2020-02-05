const HOUR_HAND = document.querySelector(".hour-hand");
const MINUTE_HAND = document.querySelector(".min-hand");
const SECOND_HAND = document.querySelector(".second-hand");

let hours;
let minutes;
let seconds;


function changeTime() {
    HOUR_HAND.style.transform = "rotate(" + ((hours * 30) + 90) + "deg)";
    MINUTE_HAND.style.transform = "rotate(" + ((minutes * 6) + 90) + "deg)";
    SECOND_HAND.style.transform = "rotate(" + ((seconds * 6) + 90) + "deg)";
}

setInterval(() => {
    currentDate = new Date();
    hours = currentDate.getHours();
    minutes = currentDate.getMinutes();
    seconds = currentDate.getSeconds();
    
    changeTime();

}, 1000);
