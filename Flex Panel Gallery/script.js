const ALL_PANELS = document.querySelectorAll(".panel")

function mouseHover() {
    this.classList.add("open");
    this.querySelector(":first-child").classList.add("open-active");
    this.querySelector(":last-child").classList.add("open-active");
}

function mouseHoverOver() {
    this.classList.remove("open");
    this.querySelector(":first-child").classList.remove("open-active");
    this.querySelector(":last-child").classList.remove("open-active");
}

ALL_PANELS.forEach((panel) => panel.addEventListener("mouseenter", mouseHover, false));
ALL_PANELS.forEach((panel) => panel.addEventListener("mouseleave", mouseHoverOver, false));