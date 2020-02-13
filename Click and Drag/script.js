const ALL_ITEMS = document.querySelector(".items");
let clickDraggingBool = false;
let startX;
let scrollLeft;

ALL_ITEMS.addEventListener("mousedown", (e) => {
	clickDraggingBool = true;
	ALL_ITEMS.classList.add("active");
	startX = e.pageX;
	scrollLeft = ALL_ITEMS.scrollLeft;
});

ALL_ITEMS.addEventListener("mouseleave", () => {
	clickDraggingBool = false;
	ALL_ITEMS.classList.remove("active");
});

ALL_ITEMS.addEventListener("mouseup", () => {
	clickDraggingBool = false;
	ALL_ITEMS.classList.remove("active");
});

ALL_ITEMS.addEventListener("mousemove", (e) => {
	if (!clickDraggingBool) return;
	e.preventDefault();
	let x = e.pageX;
	let walk = (x - startX) * 5;
	ALL_ITEMS.scrollLeft = scrollLeft - walk;
});
