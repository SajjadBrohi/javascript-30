const MOLES = document.querySelectorAll(".mole");
const SCORE = document.querySelector(".score");

let holeMole;
let currentScore = 0;
let time = 0;

function startGame() {
	if (typeof holeMole != "undefined") {
		holeMole.style.top = "100%";
	}

	if (time > 10000) {
		time = 0;
		return;
	}

	const holePicked = Math.ceil(Math.random() * 6);
	holeMole = document.querySelector(`.hole${holePicked} .mole`);
	holeMole.style.top = "0%";

	let timeOutTime = Math.random() * 1000;
	time += timeOutTime;
	setTimeout(() => startGame(), timeOutTime);
}

MOLES.forEach((mole) =>
	mole.addEventListener("click", () => {
		currentScore++;
		SCORE.innerText = currentScore;
	})
);
