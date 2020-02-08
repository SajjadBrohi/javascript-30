const KEYBOARD_KEYS = document.querySelectorAll(".key");
const AUDIO = document.querySelectorAll("audio")

function interval(index) {
    KEYBOARD_KEYS[index].classList.add("playing");
    AUDIO[index].currentTime = 0;
    AUDIO[index].play();

    setTimeout(() => {
        KEYBOARD_KEYS[index].classList.remove("playing");
    }, 70);

}

function keyPress(e) {
    switch (e.key) {
        case "a":
        case "A":
            interval(0);
            break;
        case "s":
        case "S":
            interval(1);
            break;

        case "d":
        case "D":
            interval(2);
            break;

        case "f":
        case "F":
            interval(3);
            break;

        case "g":
        case "G":
            interval(4);
            break;

        case "h":
        case "H":
            interval(5);
            break;

        case "j":
        case "J":
            interval(6);
            break;

        case "k":
        case "K":
            interval(7);
            break;

        case "l":
        case "L":
            interval(8);
            break;

    }
}

addEventListener("keydown", keyPress, false);