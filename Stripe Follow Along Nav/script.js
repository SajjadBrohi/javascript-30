const DROP_DOWNS = document.querySelectorAll(".cool > li");
const DROP_DOWN_BACKGROUND = document.querySelector(".dropdownBackground");
const NAVIGATION = document.querySelector("nav");

function displayDropdown() {
	let dropdownElements = this.querySelector(".dropdown");
	let navCoords = NAVIGATION.getBoundingClientRect();
	let {
		top: dropdownTopPosition,
		left: dropdownLeftPosition,
		height: dropdownHeight,
		width: dropdownWidth
	} = dropdownElements.getBoundingClientRect();

	this.classList.add("trigger-enter");
	DROP_DOWN_BACKGROUND.classList.add("open");

	dropdownTopPosition -= navCoords.top;
	dropdownLeftPosition -= navCoords.left;

	DROP_DOWN_BACKGROUND.style.height = `${dropdownHeight}px`;
	DROP_DOWN_BACKGROUND.style.width = `${dropdownWidth}px`;
	DROP_DOWN_BACKGROUND.style.setProperty(
		"transform",
		`translate(${dropdownLeftPosition}px, ${dropdownTopPosition}px)`
	);
}

function hideDropdown() {
	this.classList.remove("trigger-enter");
	DROP_DOWN_BACKGROUND.classList.remove("open");
}

DROP_DOWNS.forEach((dropdown) => {
	dropdown.addEventListener("mouseenter", displayDropdown);
	dropdown.addEventListener("mouseleave", hideDropdown);
});
