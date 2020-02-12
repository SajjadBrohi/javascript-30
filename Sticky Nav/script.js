const navigation = document.querySelector("#main");
let navTop = navigation.offsetTop;

function addFixedNav() {
	if (window.scrollY >= navTop) {
		document.body.style.paddingTop = navigation.offsetHeight + "px";
		document.body.classList.add("fixed-nav");
	} else {
		document.body.classList.remove("fixed-nav");
		document.body.style.paddingTop = 0;
	}
}

window.addEventListener("scroll", addFixedNav);
