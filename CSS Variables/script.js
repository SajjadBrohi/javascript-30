const SPACING = document.querySelector("#spacing");
const BLUR = document.querySelector("#blur");
const COLOR = document.querySelector("#base");
const CONTROLS = document.querySelector(".controls");
const ROOT = document.documentElement;

function changeValues() {
    let spacingValue = SPACING.value;
    let blurValue = BLUR.value;
    let colorValue = COLOR.value;
    
    ROOT.style.setProperty("--space", `${spacingValue}px`);
    ROOT.style.setProperty("--blur", `${blurValue}px`);
    ROOT.style.setProperty("--base", `${colorValue}`);
    console.log(spacingValue)
}



CONTROLS.addEventListener("input", changeValues, false);
