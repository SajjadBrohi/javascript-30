const CANVAS = document.querySelector("#draw");
let ctx = CANVAS.getContext("2d");
let mouseClick = false;
let hue = 0;
let circleRadius = 10;
let circleRadiusReverse = false;

CANVAS.width = window.innerWidth;
CANVAS.height = window.innerHeight;

function mouseMoved(e) {
    if (!mouseClick) {
        return
    }

    console.log(e.clientX, e.clientY);
    ctx.beginPath();
    ctx.arc(e.clientX, e.clientY, circleRadius, 0, 2 * Math.PI);
    ctx.fillStyle = `hsla(${hue}, 100%, 50%, 1)`;
    ctx.fill();
    ctx.stroke();

    if (!circleRadiusReverse) {
        circleRadius++;
    } else {
        circleRadius--;
    }

    if (circleRadius == 50) {
        circleRadiusReverse = true;
    } else if (circleRadius == 10) {
        circleRadiusReverse = false;
    }

    hue++;
}

CANVAS.addEventListener("mousedown", ()=> mouseClick = true, false);
CANVAS.addEventListener("mousemove", mouseMoved, false);
CANVAS.addEventListener("mouseup", ()=> mouseClick = false, false);