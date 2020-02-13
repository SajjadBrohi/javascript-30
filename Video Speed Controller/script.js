const VIDEO = document.querySelector(".wrapper video");
const SPEED_ELEMENT = document.querySelector(".speed");
const SPEED_BAR = document.querySelector(".speed-bar");

function changeSpeedBar(e) {
	let speedRate = e.offsetY / 100;
	let speedPercentage = (e.offsetY / this.offsetHeight) * 100;

	VIDEO.playbackRate = speedRate;
	SPEED_BAR.innerText = `${speedRate}x`;
	SPEED_BAR.style.height = `${speedPercentage}%`;
	console.log(e.pageY);
}

SPEED_ELEMENT.addEventListener("mousemove", changeSpeedBar);
