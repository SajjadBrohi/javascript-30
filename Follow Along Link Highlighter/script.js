const paraWrapper = document.querySelector(".wrapper");
const triggers = document.querySelectorAll("a");

const highlighter = document.createElement("span");
highlighter.classList.add("highlight");
document.body.appendChild(highlighter);

function mouseOverLink() {
	triggerCoords = this.getBoundingClientRect();

	let coords = {
		xAxis: triggerCoords.left + window.scrollX,
		yAxis: triggerCoords.top + window.scrollY,
		width: triggerCoords.width,
		height: triggerCoords.height
	};

	highlighter.style.width = `${coords.width}px`;
	highlighter.style.height = `${coords.height}px`;
	highlighter.style.transform = `translate(${coords.xAxis}px, ${coords.yAxis}px`;
}

triggers.forEach((trigger) =>
	trigger.addEventListener("mouseover", mouseOverLink)
);
